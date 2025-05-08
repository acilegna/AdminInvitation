import { useState, useEffect } from "react";
//importar oBjeto Invitados de servcios
import { Invitados, delet, searchById } from "../services/datosInvitados";
//import { columns } from "../services/columns";

export const useDatosInvitados = () => {
  const [totalConfirmados, setTotalConfirmados] = useState(0);
  const [totalPendientes, setTotalPendientes] = useState(0);
  const [totalAusentes, setTotalAusentes] = useState(0);
  const [totalInvitados, setTotalInvitados] = useState(0);
  const [todosInvitados, setTodosInvitados] = useState([]);
  //hook para manejar el status de las vistas ocultar y mostrar
  const [mostrar, setMostrar] = useState(false);
  //hook para manejo de errores
  const [error, setError] = useState(null);
  const [eliminado, setEliminado] = useState("");

  const [formulario, setFormulario] = useState({
    id: "",
    name: "",
    apellido: "",
    telefono: "",
    categoria: "",
    status: "",
  });

  const handleChange = (e) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value,
    });
    console.log(e.target.value);
  };

  const ejecutar = async (InvitadosFunc, setData, extractKey) => {
    const result = await InvitadosFunc();
    if (result.success === false) {
      setError(result.error);
    }
    setData(result[extractKey]);
  };

  //MOSTRAR TODOS LOS INVITADOS
  const allInvitados = async () => {
    const result = await Invitados.guestList();
    setTodosInvitados(result); // Aquí no se extrae ninguna key, se usa todo */
  };

  //ELIMINAR O BUSCAR
  const Remove = async (id, process) => {
    let result = " ";
    if (process === "delete") {
      result = await delet(id);
      setEliminado(result.message);
      //EJECUTAR PARA QUE REFRESQUE DESPUES DE ELIMINAR UN REGISTRO
      allInvitados();
      clearMensaje(setEliminado);
    } else {
      result = await searchById(id);
      setFormulario({
        name: result.name || "",
        apellido: result.apellido || "",
        telefono: result.telefono || "",
        categoria: result.categoria || "",
        status: result.status || "",
      });
    }
    if (result.success === false) {
      setError(result.error);
    }
  };

  //ELIMINAR POR ID
  const Removes = async (id, process) => {
    let result = " ";
    if (process === "delete") {
      result = await delet(id);
    } else {
      result = await searchById(id);
    }

    if (result.success === false) {
      setError(result.error);
    }
    setEliminado(result.message);
    //EJECUTAR PARA QUE REFRESQUE DESPUES DE ELIMINAR UN REGISTRO
    allInvitados();
    clearMensaje(setEliminado);
  };

  //BUSCAR POR ID
  const searchId = async (id) => {
    const result = await searchById(id);
    if (result.success === false) {
      setError(result.error);
    }

    setFormulario({
      name: result.name || "",
      apellido: result.apellido || "",
      telefono: result.telefono || "",
      categoria: result.categoria || "",
      status: result.status || "",
    });
  };

  const clearMensaje = (setValue) => {
    setTimeout(() => {
      setValue(""); // Limpia el mensaje después de 3 segundos (3000 ms)
    }, 2000);
  };

  const loadAll = async () => {
    //ejecutar múltiples fetch al mismo tiempo
    await Promise.all([
      //manda como parametro las funciones y el objeto json "total_confirmados" q envia desde backend
      ejecutar(Invitados.numberOfGuests, setTotalInvitados, "total"),
      ejecutar(Invitados.absent, setTotalAusentes, "total_ausentes"),
      ejecutar(Invitados.confirmed, setTotalConfirmados, "total_confirmados"),
      ejecutar(Invitados.notConfirmed, setTotalPendientes, "pendientes"),
    ]);
  };

  const showHide = (valor) => {
    setMostrar(valor);
  };

  useEffect(() => {
    loadAll();
    allInvitados();
  }, []);
  //retornamos funciones y variables

  return {
    loadAll,
    allInvitados,
    showHide,
    Remove,
    searchId,
    totalConfirmados,
    totalPendientes,
    totalAusentes,
    totalInvitados,
    todosInvitados,
    mostrar,
    eliminado,
    error,
    formulario,
    handleChange,
  };
};
