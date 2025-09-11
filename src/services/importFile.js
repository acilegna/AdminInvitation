import axios from "axios";
export async function importFile(file) {
  const formData = new FormData();
  formData.append("file", file);
  const api = "http://127.0.0.1:8000/api/import";
  try {
    const response = await axios.post(
      "http://127.0.0.1:8000/api/import", // La URL de tu API
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
