import axios from "axios";

// mandar url de endpoint a la funcion getdata

//creando un objeto API que tiene varias funciones para hacer peticiones.
//export const confirmed = () => getData("http://127.0.0.1:8000/api/asistiran");

export const Invitados = {
  // Usas dos puntos : para decir “esta propiedad-funcion (confirmed)   tiene este valor getData”.
  confirmed: () => getData("http://127.0.0.1:8000/api/asistiran"),
  notConfirmed: () => getData("http://127.0.0.1:8000/api/pendientes"),
  absent: () => getData("http://127.0.0.1:8000/api/no"),
  numberOfGuests: () => getData("http://127.0.0.1:8000/api/total"),
  guestList: () => getData("http://127.0.0.1:8000/api/invitados"),
};

// funcion  asíncrona que realiza solicitudes HTTP GET a diferentes endpoints
const getData = async (url) => {
  try {
    const res = await axios.get(url);
    //mandar datos
    return res.data;
  } catch (err) {
    if (err.response) {
      return { success: false, error: "Error en la respuesta" };
    } else if (err.request) {
      return { success: false, error: "No se recibió respuesta  del servidor" };
    } else {
      return { success: false, error: "Error al configurar la solicitud" };
    }
  }
};

export const delet = async (id) => {
  try {
    const res = await axios.delete(`http://127.0.0.1:8000/api/invitados/${id}`);
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
    const res = await axios.get(`http://127.0.0.1:8000/api/invitados/${id}`);
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
