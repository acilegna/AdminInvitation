
import { useImport } from '../hooks/useImport';


const ViewImport = () => {
    const { file, message, error, handleFile, handleFileChange, onClick } = useImport();

    return (
         <div className="container my-4">
  <label htmlFor="formFileSm" className="form-label">Subir archivo Excel o CSV</label>

  <div className="row g-2 align-items-center">
    <div className="col-12 col-md-8">
      <input
        className="form-control form-control-sm"
        id="formFileSm"
        type="file"
        accept=".xlsx, .xls, .csv"
        onChange={handleFileChange}
      />
    </div>
    <div className="col-12 col-md-4 d-grid">
      <button
        className="btn btn-primary btn-sm"
        onClick={onClick}
        disabled={!onClick}
      >
        Subir
      </button>
    </div>
  </div>

  {message && (
    <div className="alert alert-danger mt-3">
      <h6 className="mb-0">{message}</h6>
    </div>
  )}

  {error.length > 0 && (
    <div className="mt-3">
      <span className="text-primary fs-6 fw-bold d-block mb-2">Errores encontrados:</span>

      {error.map((err, index) => (
        <div key={index} className="mb-2">
          <ul className="list-group">
            {err.errors.map((msg, i) => (
              <li className="list-group-item list-group-item-danger" key={i}>
                {msg}
              </li>
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