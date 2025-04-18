import axios from "axios";

export const confirmados = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/asistiran");
    return res.data;
    //console.log(res.data);
  } catch (err) {
    return err;
  }
};

export const pendientes = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/pendientes");
    return res.data;
  } catch (err) {
    return err;
  }
};

export const ausente = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/no");
    return res.data;
  } catch (err) {
    return err;
  }
};

export const totalInvitado = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/total");
    return res.data;
  } catch (err) {
    return err;
  }
};

export const allGuests = async () => {
  try {
    const res = await axios.get("http://127.0.0.1:8000/api/invitados");
    return res.data;
  } catch (err) {
    return err;
  }
};
