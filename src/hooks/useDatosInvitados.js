import { useState, useEffect } from "react";
//importar funciones del servicio
import {
  confirmados,
  pendientes,
  ausente,
  totalInvitado,
  allGuests,
} from "../services/datosInvitados";

export const useDatosInvitados = () => {
  const [totalConfirmados, setTotalConfirmados] = useState(0);
  const [totalPendientes, setTotalPendientes] = useState(0);
  const [totalAusentes, setTotalAusentes] = useState(0);
  const [totalInvitados, setTotalInvitados] = useState(0);
  const [todosInvitados, setTodosInvitados] = useState([]);
  const [mostrar, setMostrar] = useState(false);

  // Llamamos a cada función del servicio
  const asisten = async () => {
    const result = await confirmados();
    setTotalConfirmados(result.total_confirmados);
  };
  const sinConfirmar = async () => {
    const result = await pendientes();
    setTotalPendientes(result.pendientes);
  };
  const ausentes = async () => {
    const result = await ausente();
    setTotalAusentes(result.total_ausentes);
  };

  const todos = async () => {
    const result = await totalInvitado();
    setTotalInvitados(result.total);
  };

  const allInvitados = async () => {
    const result = await allGuests();

    setTodosInvitados(result);
  };
  //fin llamada a funciones

  //Llama a las funciónes  una sola vez al montar el componente
  useEffect(() => {
    asisten();
    sinConfirmar();
    ausentes(), todos();
    allInvitados();
  }, []);

  const showHide = (valor) => {
    //invierte su valor original de false a true
    //setMostrar(!mostrar);
    setMostrar(valor);
  };
  //retornamos funciones y variables
  return {
    asisten,
    sinConfirmar,
    ausentes,
    todos,
    showHide,
    allInvitados,
    totalConfirmados,
    totalPendientes,
    totalAusentes,
    totalInvitados,
    mostrar,
    todosInvitados,
  };
};
