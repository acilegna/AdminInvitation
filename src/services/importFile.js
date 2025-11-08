import axios from "axios";
export async function importFile(file) {
  const formData = new FormData();
  formData.append("file", file);
 // const api = "http://127.0.0.1:8000/api/import";
  const api = "https://backapi.ladoobscurodelaluna.com/public/api/";

  try {
    const response = await axios.post(
    api,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data", // Necesario para subir archivos
        },
      }
    );

    // Retornamos resultado

    return {
      success: true,
      data: response.data.mensaje,
    };
  } catch (error) {
    return {
      success: false,

      data: error.response.data.errors,
    };
  }
}
