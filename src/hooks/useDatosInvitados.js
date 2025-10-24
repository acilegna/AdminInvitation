import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
//importar oBjeto Invitados de servcios
import {
  Invitados,
  delet,
  searchById,
  updateInvitados,
  updateStatus,
  saveInvitado,
  filter,
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
  const [invitadosOriginales, setInvitadosOriginales] = useState([]);
  const [totalNiñosAusentes, setNiñosAusentes] = useState(0);
  const [totalAdultosAusentes, setAdultosAusentes] = useState(0);
  const [totalNiñosConfirmados, setNiñosConfirmados] = useState(0);
  const [totalAdultosConfirmados, setAdultosConfirmados] = useState(0);
  const [totalNiñosNoConfirmados, setNiñosNoConfirmados] = useState(0);
  const [totalAdultosNoConfirmados, setAdultosNoConfirmados] = useState(0);

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
  const [filtro, setFiltro] = useState([]);

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
    //Guardar una copia de los invitados para hacer filtro
    setInvitadosOriginales(result);
  };

  //
  const Confirmation = (id, status) => {
    update(id, status);
    // actualiza solo el elemento modificado en el estado

    setTodosInvitados((prevData) =>
      prevData.map((item) =>
        item.id === id ? { ...item, status: status.status } : item
      )
    );
  };

  const update = async (id, datos) => {
    result = await updateStatus(id, datos);
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

  const resumen = async () => {
    result = await Invitados.resumen();
    setTotalInvitados(result.todos);
    setTotalNiños(result.total_niño);
    setTotalAusentes(result.total_ausentes);
    setTotalConfirmados(result.total_confirmados);
    setTotalPendientes(result.pendientes);
    setTotalAdultos(result.totalAdultos);
    setNiñosAusentes(result.niño_ausente);
    setAdultosAusentes(result.adulto_ausente);
    setNiñosConfirmados(result.total_niño_confirmado);
    setAdultosConfirmados(result.total_adulto_confirmado);
    setNiñosNoConfirmados(result.niño_pendiente);
    setAdultosNoConfirmados(result.adultos_pendiente);
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

  const handleInputChange = (e) => {
    const valorInput = e.target.value;
    setInputValue(valorInput);

    if (valorInput.trim() === "") {
      // Si el input está vacío, restaurar lista completa
      //  setTodosInvitados(invitadosOriginales);
      allInvitados();
    } else {
      const filteredItems = invitadosOriginales.filter(
        (user) =>
          user.name.toLowerCase().includes(valorInput.toLowerCase()) ||
          user.id_familia.toLowerCase().includes(valorInput.toLowerCase())
      );

      setTodosInvitados(filteredItems);
    }

    filters(valorInput);
  };

  const filters = async (datos) => {
    result = await filter(datos);

    if (result.success != false) {
      //console.log(result);
      setFiltro(result);
    } else {
      setError(result.error);
      //console.log(result.error);
    }
  };

  const location = useLocation();
  useEffect(() => {
    if (location.pathname === "/detalles") {
      resumen();
    }
    allInvitados();
  }, []);
  //retornamos funciones y variables

  return {
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
    Confirmation,
    resumen,
    handleInputChange,
    inputValue,
    filtro,
  };
};
