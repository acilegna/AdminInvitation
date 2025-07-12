import { useState, useEffect } from "react";
//importar oBjeto Invitados de servcios
import {
  Invitados,
  delet,
  searchById,
  searchByFam,
  updateInvitados,
  updateStatus,
  saveInvitado,
} from "../services/datosInvitados";
import { useNavigate } from "react-router-dom";

export const useDatosInvitados = () => {
  const [totalConfirmados, setTotalConfirmados] = useState(0);
  const [totalPendientes, setTotalPendientes] = useState(0);
  const [totalAusentes, setTotalAusentes] = useState(0);
  const [totalNiños, setTotalNiños] = useState(0);
  const [totalAdultos, setTotalAdultos] = useState(0);
  const [totalInvitados, setTotalInvitados] = useState(0);
  const [todosInvitados, setTodosInvitados] = useState([]);
  const [totalNiñosAusentes, setNiñosAusentes] = useState(0);
  const [totalAdultosAusentes, setAdultosAusentes] = useState(0);
  const [totalNiñosConfirmados, setNiñosConfirmados] = useState(0);
  const [totalAdultosConfirmados, setAdultosConfirmados] = useState(0);
  const [totalNiñosNoConfirmados, setNiñosNoConfirmados] = useState(0);
  const [totalAdultosNoConfirmados, setAdultosNoConfirmados] = useState(0);
  const [invitadosFamily, setInvitadosFamily] = useState(0);

  //hook para manejo de errores
  const [error, setError] = useState(null);
  //hook para manejo de notificacion
  const [mensaje, setMensaje] = useState("");
  //hook para manejo de notificacion de validacion de campos
  const [valida, setValida] = useState("");
  //hook para manejo cambio de titulo
  const [titulo, setTitulo] = useState("Editar Usuario");

  //hook para manejar el status   ocultar y mostrar boton
  const [estado, setEstado] = useState(0);

  const [inputValue, setInputValue] = useState("");

  const [seleccion, setSeleccion] = useState({});
  // hablitar boton
  const [disable, setDisable] = useState(true);

  const navigate = useNavigate();
  const [formulario, setFormulario] = useState({
    id: "",
    id_familia: "",
    name: "",
    apellido: "",
    telefono: "",
    categoria: "",
    status: "",
  });

  let result = "";

  const changeTitle = () => {
    setTitulo("Registrar Invitado");
    clearTask();
    setEstado(2);
  };

  //agregar nuevo registro
  const addNew = async () => {
    result = await saveInvitado(formulario);

    if (result.success === false) {
      setValida(result.error);
      clearMensaje(setValida);
    } else {
      setTodosInvitados((prev) => [...prev, result.invitado]);

      setMensaje(result.message);
      setEstado(1);
      clearMensaje(setMensaje);
      navigate("/invitados");
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
      //Actualiza el estado todosInvitados, reemplazando el invitado que tiene el mismo id con uno nuevo (el actualizado) que llega en result.invitado.
      setTodosInvitados((prev) =>
        prev.map((i) => (i.id === id ? result.info : i))
      );

      navigate("/invitados");

      setMensaje(result.mensaje);
      setEstado(2);
      clearMensaje(setMensaje);
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

  // buscar por id de familya
  const byFamily = async (id) => {
    result = await searchByFam(id);

    if (result.success === true) {
      setInvitadosFamily(result);
      setError("");
    }

    if (result.success === false) {
      console.log(result.error.error);
      setError(result.error.error);
      clearMensaje(setError);
      setInvitadosFamily("");
    }
  };

  //detectar cambio de input
  const handleInput = (e) => {
    const valorInput = e.target.value;
    setInputValue(valorInput);

    if (valorInput === "") {
      setInvitadosFamily("");
    }
  };

  const handleClick = () => {
    if (inputValue.trim() !== "") {
      byFamily(inputValue);
    }
  };

  const update = async (id, datos) => {
    const result = await updateStatus(id, datos);
  };

  const handleChangeRadio = (e) => {
    const valor = e.target.value;
    const id = e.target.id;

    setSeleccion((prev) => ({
      ...prev,
      [id]: valor,
    }));
  };

  //ELIMINAR O BUSCAR
  const ProcessDeleteOrSearch = async (id, process) => {
    if (process === "delete") {
      result = await delet(id);
      setMensaje(result.message);
      setTodosInvitados((prev) => prev.filter((i) => i.id !== id));
      clearMensaje(setMensaje);
    } else {
      result = await searchById(id);
      setFormulario({
        id: result.id || "",
        id_familia: result.id_familia || "",
        name: result.name || "",
        apellido: result.apellido || "",
        telefono: result.telefono || "",
        categoria: result.categoria || "",
        status: result.status || "",
      });

      setEstado(1);
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
      setMensaje("");
      setError("");
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
      ejecutar(Invitados.allChildren, setTotalNiños, "total"),
      ejecutar(Invitados.absent, setTotalAusentes, "total_ausentes"),
      ejecutar(Invitados.confirmed, setTotalConfirmados, "total_confirmados"),
      ejecutar(Invitados.notConfirmed, setTotalPendientes, "pendientes"),
      ejecutar(Invitados.allAdult, setTotalAdultos, "totalAdultos"),
      ejecutar(Invitados.childrenAbsent, setNiñosAusentes, "total"),
      ejecutar(Invitados.adultAbsent, setAdultosAusentes, "total"),
      ejecutar(Invitados.childrenConfirmed, setNiñosConfirmados, "total"),
      ejecutar(Invitados.adultConfirmed, setAdultosConfirmados, "total"),
      ejecutar(Invitados.childrenNotConfirmed, setNiñosNoConfirmados, "total"),
      ejecutar(Invitados.adultNotConfirmed, setAdultosNoConfirmados, "total"),
    ]);
  };

  //Limpiar campos
  const clearTask = () => {
    setFormulario({
      id: "",
      id_familia: "",
      name: "",
      apellido: "",
      telefono: "",
      categoria: "",
      status: "",
    });
  };

  const resetRespuestas = () => {
    setMensaje("Tu confirmación ha sido registrada");
    setSeleccion({});
    setInvitadosFamily("");
    setDisable(true);
    setInputValue("");
  };

  const confirmar = () => {
    Object.entries(seleccion).forEach(([id, valor]) => {
      update(id, { status: valor });
    });
    clearMensaje(setMensaje);
    resetRespuestas();
  };

  useEffect(() => {
    infoInvitados();
    allInvitados();
    if (invitadosFamily) {
      const totalRespuestas = Object.keys(seleccion).length;
      const totalInvitado = invitadosFamily.invitados.length;
      if (totalRespuestas === totalInvitado) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
  }, [invitadosFamily, seleccion]);

  //retornamos funciones y variables

  return {
    infoInvitados,
    allInvitados,
    ProcessDeleteOrSearch,
    updateInvitado,
    addNew,
    totalConfirmados,
    totalPendientes,
    totalAusentes,
    totalInvitados,
    todosInvitados,
    totalNiños,
    totalAdultos,
    totalNiñosAusentes,
    totalAdultosAusentes,
    totalAdultosConfirmados,
    totalNiñosConfirmados,
    totalNiñosNoConfirmados,
    totalAdultosNoConfirmados,
    mensaje,
    error,
    formulario,
    handleChange,
    titulo,
    changeTitle,
    valida,
    estado,
    invitadosFamily,
    handleClick,
    handleInput,
    handleChangeRadio,
    confirmar,
    disable,
    inputValue,
  };
};
