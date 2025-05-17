import { useState, useEffect } from "react";
//importar oBjeto Invitados de servcios
import {
  Invitados,
  delet,
  searchById,
  updateInvitados,
  saveInvitado,
} from "../services/datosInvitados";

export const useDatosInvitados = () => {
  const [totalConfirmados, setTotalConfirmados] = useState(0);
  const [totalPendientes, setTotalPendientes] = useState(0);
  const [totalAusentes, setTotalAusentes] = useState(0);
  const [totalInvitados, setTotalInvitados] = useState(0);
  const [todosInvitados, setTodosInvitados] = useState([]);
  //hook para manejar el status de las vistas ocultar y mostrar
  const [mostrar, setMostrar] = useState("");
  //hook para manejo de errores
  const [error, setError] = useState(null);
  //hook para manejo de notificacion
  const [mensaje, setMensaje] = useState("");
  //hook para manejo de notificacion de validacion de campos
  const [valida, setValida] = useState("");
  //hook para manejo cambio de titulo
  const [titulo, setTitulo] = useState("Editar Usuario");

  //hook envio de status
  const [estado, setEstado] = useState(0);

  const [formulario, setFormulario] = useState({
    id: "",
    name: "",
    apellido: "",
    telefono: "",
    categoria: "",
    status: "",
  });

  let result = "";

  const changeTitle = () => {
    setTitulo("Registrar Invitado");
  };
  //agregar nuevo registro
  const addNew = async () => {
    result = await saveInvitado(formulario);

    if (result.success === false) {
      setValida(result.error);
      clearMensaje(setValida);
    } else {
      setMensaje(result.message);
      setEstado(1);

      clearMensaje(setMensaje);

      setMostrar("");
    }
  };

  //modificar registro
  const updateInvitado = async (id) => {
    result = await updateInvitados(id, formulario);
    if (result.success === false) {
      //setError(result.error);
      setValida(result.error);
      clearMensaje(setValida);
    } else {
      setMensaje(result.mensaje);
      setEstado(2);
      clearMensaje(setMensaje);

      setMostrar("");
    }
  };

  const handleChange = (e) => {
    setFormulario({
      // Copia todo el formulario anterior (...formulario)
      ...formulario,
      //Actualiza   el campo que cambió
      [e.target.name]: e.target.value,
    });
  };

  //MOSTRAR TODOS LOS INVITADOS
  const allInvitados = async () => {
    result = await Invitados.guestList();
    setTodosInvitados(result); // Aquí no se extrae ninguna key, se usa todo */
  };

  //ELIMINAR O BUSCAR
  const ProcessDeleteOrSearch = async (id, process) => {
    if (process === "delete") {
     
      result = await delet(id);
      setMensaje(result.message);
       allInvitados();
      clearMensaje(setMensaje);
    } else {
      result = await searchById(id);
      setFormulario({
        id: result.id || "",
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

  //ocultar notificacion después de 2 segundos
  const clearMensaje = (setValue) => {
    setTimeout(() => {
      setValue("");
      setValida("");
    }, 5000);
  };

  const ejecutar = async (InvitadosFunc, setData, extractKey) => {
    result = await InvitadosFunc();
    if (result.success === false) {
      setError(result.error);
    }
    setData(result[extractKey]);
  };

  //
  const infoInvitados = async () => {
    //ejecutar múltiples fetch al mismo tiempo
    await Promise.all([
      //manda como parametro las funciones y el objeto json "total_confirmados" q envia desde backend
      ejecutar(Invitados.numberOfGuests, setTotalInvitados, "total"),
      ejecutar(Invitados.absent, setTotalAusentes, "total_ausentes"),
      ejecutar(Invitados.confirmed, setTotalConfirmados, "total_confirmados"),
      ejecutar(Invitados.notConfirmed, setTotalPendientes, "pendientes"),
    ]);
  };

  //ocultar y/o mostrar vista
  const showHide = (valor) => {
    console.log(valor);
    if (valor === "add" || valor === "edit") {
      clearTask();
      //resetear estado para q no muestre todos los invitados
      setEstado(0);
    }
    setMostrar(valor);
    setEstado(0);
  };

  //Limpiar campos
  const clearTask = () => {
    setFormulario({
      id: "",
      name: "",
      apellido: "",
      telefono: "",
      categoria: "",
      status: "",
    });
  };

  useEffect(() => {
    infoInvitados();
    allInvitados();
  }, [mostrar]);

  //retornamos funciones y variables
  return {
    infoInvitados,
    allInvitados,
    showHide,
    ProcessDeleteOrSearch,
    updateInvitado,
    addNew,
    totalConfirmados,
    totalPendientes,
    totalAusentes,
    totalInvitados,
    todosInvitados,
    mostrar,
    mensaje,
    error,
    formulario,
    handleChange,
    titulo,
    changeTitle,
    valida,
    estado,
  };
};
