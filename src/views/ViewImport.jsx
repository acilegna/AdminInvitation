import { useImport } from "../hooks/useImport";

const ViewImport = () => {
  const { file, message, error, handleFile, handleFileChange, onClick } =
    useImport();

  return (
    <div className="container my-4">
      <div className="cont-import ">
        <div className="text-center">
          {/* <i className="bi bi-cloud-arrow-up"></i> */}
          <p
            htmlFor="formFileSm"
            className="form-label title-resumen-invitados"
          >
            Subir Archivo de Invitados
          </p>
        </div>

        <div className="row g-2 align-items-center">
          <div className="d-flex flex-column justify-content-center align-items-center">
            {/*  <input
              className="form-control form-control-sm"
              id="formFileSm"
              type="file"
              accept=".xlsx, .xls, .csv"
              onChange={handleFileChange}
            /> */}

            <div className="upload-container">
              <label htmlFor="fileUpload" className="upload-box">
                <i className="bi bi-cloud-arrow-up upload-icon"></i>

                <p className="mb-1 fw-semibold mt-3">Arrastra tu archivo aquí</p>
                <small className="text-muted">
                  o haz clic para seleccionar
                </small>

                <input
                  id="fileUpload"
                  type="file"
                  accept=".xlsx, .xls, .csv"
                  onChange={handleFileChange}
                  hidden
                />
              </label>
            </div>
            <button
              className="btn upFile btn-sm mt-3 mb-3"
              onClick={onClick}
              disabled={!onClick}
            >
              {" "}
              <i className="bi bi-upload"> Subir Archivo</i>
            </button>
          </div>
        </div>
      </div>

      {message && (
        <div className="alert alert-danger mt-3">
          <h6 className="mb-0">{message}</h6>
        </div>
      )}

      {error.length > 0 && (
        <div className="mt-3">
          <span className="text-primary fs-6 fw-bold d-block mb-2">
            Errores encontrados:
          </span>

          {error.map((err, index) => (
            <div key={index} className="mb-2">
              <ul className="list-group">
                {err.errors.map((msg, i) => (
                  <li
                    className="list-group-item list-group-item-danger"
                    key={i}
                  >
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
