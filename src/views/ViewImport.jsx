
import { useImport } from '../hooks/useImport';


const ViewImport = () => {
    const { file, message, error, handleFile, handleFileChange, onClick } = useImport();

    return (
        <div>
            <h2>Subir Archivo Excel o CSV</h2>
            <input
                type='file'
                accept='.xlsx, .xls, .csv'
                onChange={handleFileChange}
            />
            <button onClick={onClick} disabled={!onClick}>SubiR</button>
          
            {message && <p>{message}</p>}

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

export default ViewImport;