import React from 'react';
import axios from 'axios';
import { useState } from 'react';

const Invitation = () => {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');
  const [error, setError] = useState([]);
  
  
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    //console.log(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      setMessage('Por favor, selecciona un archivo');
      return;
    }

    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await axios.post(
        'http://127.0.0.1:8000/api/import',

        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        }
      );
      setMessage(response.data.mensaje);
     // console.log(response.data.mensaje)
     // console.log('Archivo subido:', response.data.file_path);
    } catch (error) {
      
      setError(error.response.data.errors);
     // console.log(error.response.data);
     // console.log(error.response.data.errors);

    }
  };



  return (
    <div>
      <h2>Subir Archivo Excel</h2>
      <input
        type='file'
        accept='.xlsx, .xls, .csv'
        onChange={handleFileChange}
      />
      <button onClick={handleUpload}>Subir</button>
      {message && <p>{message  }</p>
      }
      {error.length > 0 && (
        <div>
          <h4>Errores encontrados:</h4>
          {error.map((error, index) => (
            <div key={index} style={{ color: "red" }}>
           {/*    <strong>Fila {error.row}</strong> - {error.attribute}: */}
              <ul>
                {error.errors.map((msg, i) => (
                  <li key={i}>{msg}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Invitation;
