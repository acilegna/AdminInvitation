import axios from "axios";
import { Children } from "react";

// mandar url de endpoint a la funcion getdata

//creando un objeto API que tiene varias funciones para hacer peticiones.
//export const confirmed = () => getData("http://127.0.0.1:8000/api/asistiran");
  const api = " http://apiexcel.ladoobscurodelaluna.com/public/api/";


export const Invitados = {
  // Usas dos puntos : para decir “esta propiedad-funcion (confirmed)   tiene este valor getData”.
  confirmed: () => getData(api + "asistiran"),
  notConfirmed: () => getData(api + "pendientes"),
  absent: () => getData(api + "no"),
  numberOfGuests: () => getData(api + "total"),
  guestList: () => getData(api + "invitados"),
  allChildren: () => getData(api + "totalNino"),
  allAdult: () => getData(api + "totalAdulto"),
  childrenAbsent: () => getData(api + "niñosAusentes"),
  adultAbsent: () => getData(api + "adultoAusentes"),
  adultConfirmed: () => getData("adultoConfirmado"),
  childrenConfirmed: () => getData(api + "niñoConfirmado"),
  adultNotConfirmed: () => getData(api + "adultoPendiente"),
  childrenNotConfirmed: () => getData(api + "niñoPendiente"),
};

// funcion  asíncrona que realiza solicitudes HTTP GET a diferentes endpoints
const getData = async (url) => {
  try {
    const res = await axios.get(url);
    //mandar datos
    return res.data;
  } catch (err) {
    if (err.response) {
      //return { success: false, error: "Error en la respuesta" };
      console.log(err.response);
    } else if (err.request) {
      return {
        success: false,
        error: "Error del servidor, contacta al administrador",
      };
    } else {
      return { success: false, error: "Error al configurar la solicitud" };
    }
  }
};

export const delet = async (id) => {
  try {
    const res = await axios.delete(api + "invitados" + id);
    return res.data;
  } catch (error) {
    if (error.response) {
      return { success: false, error: "Error en la respuesta" };
    } else if (error.request) {
      return { success: false, error: "No se recibió respuesta  del servidor" };
    } else {
      return { success: false, error: "Error al configurar la solicitud" };
    }
  }
};

export const searchById = async (id) => {
  try {
    const res = await axios.get(api + "invitados" + id);
    return res.data;
  } catch (error) {
    if (error.response) {
      return { success: false, error: "Error en la respuesta" };
    } else if (error.request) {
      return { success: false, error: "No se recibió respuesta  del servidor" };
    } else {
      return { success: false, error: "Error al configurar la solicitud" };
    }
  }
};

/* export const searchByFam = async (id) => {
  try {
    const res = await axios.get(`http://127.0.0.1:8000/api/byFamily/${id}`); 
    return res.data;
  } catch (error) {
    if (error.response) {
      return { success: false, error: "Error en la respuesta" };
    } else if (error.request) {
      return { success: false, error: "No se recibió respuesta  del servidor" };
    } else {
      return { success: false, error: "Error al configurar la solicitud" };
    }
  }
}; */

export const searchByFam = async (id) => {
  try {
    const res = await axios.get(api + "byFamily/" + id);
    return res.data;
  } catch (error) {
    if (error.response) {
      return { success: false, error: error.response.data };
    }
  }
};

export const updateInvitados = async (id, data) => {
  try {
    const res = await axios.put(api + "invitados/" + id, data);
    return res.data;
  } catch (error) {
    if (error.response) {
      return { success: false, error: error.response.data.errors };
    } else {
      return { success: false, error: error.message };
    }
  }
};

export const updateStatus = async (id, data) => {
  try {
    const res = await axios.put(api + "update/" + id, data);

    return res.data;
  } catch (error) {
    if (error.response) {
      return { success: false, error: error.response.data.errors };
    } else {
      return { success: false, error: error.message };
    }
  }
};

export const saveInvitado = async (data) => {
  try {
    const res = await axios.post(api + "invitados", data);
    return res.data; // o res.message si lo deseas
  } catch (error) {
    if (error.response && error.response.data) {
      return { success: false, error: error.response.data.errors };
    }
    return { success: false, error: error.message };
  }
};
