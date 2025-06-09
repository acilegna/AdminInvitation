
import { useImport } from '../hooks/useImport';


const ViewImport = () => {
    const { file, message, error, handleFile, handleFileChange, onClick } = useImport();

    return (
        <div className="container ">
            <label for="formFileSm" className="form-label">Subir Archivo Excel o CSV</label>
            <div className="input-group mb-3">

                <input className="form-control form-control-sm" id="formFileSm" type="file" accept='.xlsx, .xls, .csv'
                    onChange={handleFileChange} />
                <button className="btn btn-primary btn-sm" onClick={onClick} disabled={!onClick}>Subir</button>
            </div>


            {message && (
                <h5 className="alert alert-danger mt-3">
                    {message}
                </h5>
            )}

            {error.length > 0 && (
                <div>
                    <span className="text-primary fs-5" id="error">Errores encontrados:</span>

                    {error.map((error, index) => (
                        <div key={index} style={{ color: "red" }}>
                            {/*    <strong>Fila {error.row}</strong> - {error.attribute}: */}
                            <ul className="list-group">
                                {error.errors.map((msg, i) => (
                                    <li className="list-group-item list-group-item-danger" key={i}>{msg}</li>
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