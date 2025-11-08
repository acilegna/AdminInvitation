import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

import DataTable from 'react-data-table-component';
//recibe los datos q envia la vista viewPanel (componente principal-padre)
const ViewInvitados = ({ data, errores, message, processo, changeTitle, Confirmation, handleInputChange, inputValue }) => {
    const process = "delete";

    const columns = [
          {
            name: 'Codigo',
            selector: row => row.id_familia,
        },
        {
            name: 'Nombre',
            selector: row => row.name,
        },
        {
            name: 'Apellido',
            selector: row => row.apellido,
        },
        {
            name: 'Grupo',
            selector: row => row.categoria,
        },
        {
            name: 'Status',
            selector: row => row.status,
            cell: row => (
                <div
                    style={{
                        backgroundColor:
                            row.status === "Pendiente"
                                ? "#fcf186"   // Amarillo
                                : row.status === "No"
                                    ? "#fc8686"   // Rojo
                                    : row.status === "Sí"
                                        ? "#47de81"   // Verde
                                        : "#cccccc",  // Gris por defecto
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
            name: 'Asistira',
            selector: row => row.id,
            cell: row => (<div>
                <Link to="/invitados" onClick={() => Confirmation(row.id, { status: "Si" })}>
                    <i className="bi bi-check-circle" title="Sí asistirá"></i>
                </Link>

                <Link to="/invitados" onClick={() => Confirmation(row.id, { status: "No" })}>
                    <i className="bi bi-x-circle" title="No asistira"></i>
                </Link>
                <Link to="/invitados" onClick={() => Confirmation(row.id, { status: "Pendiente" })}>
                    <i className="bi bi-hourglass-split" title="Pendiente por confirmar"></i>
                </Link>
            </div>
            )

        },
        {
            name: 'Acciones',
            selector: row => row.id,
             cell: row => (<div>
                 <Link to="/invitados" onClick={() => processo(row.id, process)}>
                                    <i className="bi bi-trash text-danger" title="Eliminar"></i>
                                </Link>
                                <Link to="/editar" onClick={() => processo(row.id)}>
                                    <i className="bi bi-pencil-fill text-primary" title="Modificar"></i>
                                </Link>

            </div>
            )
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
        />
    </div>
);

}
//exportamos para llamar a la vista desde el componente padre
export default ViewInvitados