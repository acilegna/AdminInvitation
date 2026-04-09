import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";

import DataTable from "react-data-table-component";
//recibe los datos q envia la vista viewPanel (componente principal-padre)
const ViewInvitados = ({
  data,
  errores,
  message,
  processo,
  changeTitle,
  Confirmation,
  handleInputChange,
  inputValue,
}) => {
  const process = "delete";

  const columns = [
    {
         name: <span className="fw-bold text-primary">Código</span>,
      selector: (row) => row.id_familia,
      
    },
    {
          name: <span className="fw-bold text-primary">Nombre</span>,
      
      selector: (row) => row.name,
    },
    {
       
      name: <span className="fw-bold text-primary">Apellido</span>,
      selector: (row) => row.apellido,
    },
    {
     
       name: <span className="fw-bold text-primary">Grupo</span>,
      selector: (row) => row.categoria,
    },
    {
      
       name: <span className="fw-bold text-primary">Status</span>,
      selector: (row) => row.status,
      cell: (row) => (
        <div
          style={{
            backgroundColor:
              row.status === "Pendiente"
                ? "#fcf186" // Amarillo
                : row.status === "No"
                  ? "#fc8686" // Rojo
                  : row.status === "Sí"
                    ? "#47de81" // Verde
                    : "#47de81", // Gris por defecto
            borderRadius: "8px",
            padding: "4px 8px",
            textAlign: "center",
            fontWeight: "bold",
            minWidth: "80px",
          }}
        >
          {row.status}
        </div>
      ),
    },
    {
     
       name: <span className="fw-bold text-primary">Asistira</span>,
      selector: (row) => row.id,
      cell: (row) => (
        <div>
          <Link
            to="/invitados"
            onClick={() => Confirmation(row.id, { status: "Si" })}
          >
            <i className="bi bi-check-circle" title="Sí asistirá"></i>
          </Link>

          <Link
            to="/invitados"
            onClick={() => Confirmation(row.id, { status: "No" })}
          >
            <i className="bi bi-x-circle" title="No asistira"></i>
          </Link>
          <Link
            to="/invitados"
            onClick={() => Confirmation(row.id, { status: "Pendiente" })}
          >
            <i
              className="bi bi-hourglass-split   "
              title="Pendiente por confirmar"
            ></i>
          </Link>
        </div>
      ),
    },
    {
    name: <span className="fw-bold text-primary">Acciones</span>,
      selector: (row) => row.id,
      cell: (row) => (
        <div className="d-flex justify-content-center gap-3">
          <Link to="/invitados" onClick={() => processo(row.id, process)}>
            <i className="bi bi-trash text-danger" title="Eliminar"></i>
          </Link>

          <Link to="/editar" onClick={() => processo(row.id)}>
            <i className="bi bi-pencil-fill text-primary" title="Modificar"></i>
          </Link>
        </div>
      ),
    },
  ];

  return (
    <div className="container mt-3">
      <div className="row mb-3">
        <div className="col">
          <input
            id="filter"
            type="search"
            className="form-control"
            placeholder="Buscar"
            onChange={handleInputChange}
            value={inputValue}
          />
        </div>
        <div className="col-auto">
          <Link
            className="btn btn-primary"
            to="/editar"
            onClick={() => changeTitle()}
          >
            <i className="bi bi-person-add text-white"> Agregar Invitado</i>
          </Link>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={data}
        responsive
        highlightOnHover
        striped
      />
    </div>
  );
};
//exportamos para llamar a la vista desde el componente padre
export default ViewInvitados;
