import { useState } from "react";
import { importFile } from "../services/importFile";

export function useImport() {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState("");
  const [error, setError] = useState([]);
  const [onClick, setOnClick] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setOnClick(() => () => handleFile(selectedFile)); // Guardamos una función para ejecutar luego
    }
  };

  const handleFile = async (selectedFile) => {
    setFile(selectedFile); // Guardamos el archivo en el estado
    const result = await importFile(selectedFile); // Llamamos a la función del servicio
    //console.log(result);
    if (result.success == true) {
      setMessage("Archivo importado con éxito");
    } else {
      const resultado = result.data;
      setError(resultado);
      setMessage("");
    }
  };

  return { file, message, error, handleFile, handleFileChange, onClick };
}
