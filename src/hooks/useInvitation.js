import { useState, useEffect } from "react";
import { searchByFam } from "../services/datosInvitados";

export const useInvitation = () => {
  const [seleccion, setSeleccion] = useState({});
  const [invitadosFamily, setInvitadosFamily] = useState(0);
  const [inputValue, setInputValue] = useState("");
  //hook para manejo de errores
  const [error, setError] = useState(null);
  const [disable, setDisable] = useState(true);
  //hook para manejo de notificacion
  const [mensaje, setMensaje] = useState("");

  const targetDate = "2026-12-20T15:00:00"; // fecha y hora del evento

  const calculateTimeLeft = () => {
    const difference = new Date(targetDate) - new Date();
    if (difference <= 0) return null;

    return {
      dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
      horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutos: Math.floor((difference / 1000 / 60) % 60),
      segundos: Math.floor((difference / 1000) % 60),
    };
  };
  const [tiempoRestante, setTiempoRestante] = useState(calculateTimeLeft());

  const handleClick = (e) => {
    e.preventDefault(); // opcional, por si acaso
    setSeleccion({});
    if (inputValue.trim() !== "") {
      byFamily(inputValue);
    }
  };
  // buscar por id de familya
  let result = "";
  const byFamily = async (id) => {
    result = await searchByFam(id);

    if (result.success === true) {
      setInvitadosFamily(result);
      setError("");
    }

    if (result.success === false) {
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

  const handleChangeRadio = (e) => {
    // const valor = e.target.value;
    const { id, value } = e.target;
    //const id = e.target.id;

    setSeleccion((prev) => ({
      ...prev, // Copia todos los valores anteriores del estado
      [id]: value, // Reemplaza o agrega la propiedad con el id del input y le asigna el valor
    }));

    /*  setTimeout(() => {
      valor="Pendiente";
    }, 6000); */
  };

  const confirmar = () => {
    Object.entries(seleccion).forEach(([id, valor]) => {
      update(id, { status: valor });
    });
    clearMensaje(setMensaje);

    resetRespuestas();
  };
  const comparar = () => {
    if (invitadosFamily) {
      const totalRespuestas = Object.keys(seleccion).length;
      const totalInvitado = invitadosFamily.invitados.length;
      if (totalRespuestas === totalInvitado) {
        setDisable(false);
      } else {
        setDisable(true);
      }
    }
  };
  //ocultar notificacion después de 2 segundos
  const clearMensaje = (setValue) => {
    setTimeout(() => {
      setValue("");

      setMensaje("");
      setError("");
    }, 5000);
  };

  const resetRespuestas = () => {
    setMensaje("Tu confirmación ha sido registrada");
    setSeleccion({});
    setInvitadosFamily("");
    setDisable(true);
    setInputValue("");
  };

  useEffect(() => {
    const timer = setInterval(() => {
      const timeLeft = calculateTimeLeft();
      setTiempoRestante(timeLeft);

      if (!timeLeft) {
        clearInterval(timer);
      }
    }, 1000);
    comparar();
    return () => clearInterval(timer);
  }, [targetDate, invitadosFamily, seleccion]);
  //return tiempoRestante;

  return {
    tiempoRestante,
    invitadosFamily,
    error,
    handleChangeRadio,
    handleClick,
    mensaje,
    confirmar,
    disable,
    inputValue,
    handleInput,
    seleccion,
  };
};
