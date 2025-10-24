import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

//recibe los datos q envia la vista viewPanel (componente principal-padre)
const ViewInvitados = ({ data, errores, message, processo, changeTitle, Confirmation, handleInputChange, inputValue }) => {
    const process = "delete";

    return (
        <div className="table-responsive">
            <table className="table table-striped table-bordered align-middle text-center">
                <thead>
                    <tr>
                        <th colSpan="8">
                            <div className="row g-2">
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
                                    <Link className="btn btn-primary" to="/editar" onClick={() => changeTitle()}>
                                        <i className="bi bi-person-add text-white"> Agregar Invitado</i>
                                    </Link>
                                </div>
                            </div>
                        </th>
                    </tr>
                    <tr>
                        <th>Familia</th>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Teléfono</th>
                        <th>Categoría</th>
                        <th>Status</th>
                        <th>Asistira</th>
                        <th>Operaciones</th>

                    </tr>
                </thead>
                <tbody>
                    {data.map((invitado) => (
                        <tr key={invitado.id}>
                            <td>{invitado.id_familia}</td>
                            <td>{invitado.name}</td>
                            <td>{invitado.apellido}</td>
                            <td>{invitado.telefono}</td>
                            <td>{invitado.categoria}</td>
                            <td>{invitado.status}</td>
                            <td>

                                <Link to="/invitados" onClick={() => Confirmation(invitado.id, { status: "Si" })}>
                                    <i className="bi bi-check-circle" title="Sí asistirá"></i>
                                </Link>

                                <Link to="/invitados" onClick={() => Confirmation(invitado.id, { status: "No" })}>
                                    <i className="bi bi-x-circle" title="No asistira"></i>
                                </Link>
                                <Link to="/invitados" onClick={() => Confirmation(invitado.id, { status: "Pendiente" })}>
                                    <i className="bi bi-hourglass-split" title="Pendiente por confirmar"></i>
                                </Link>
                            </td>
                            <td className="d-flex gap-2 justify-content-center">
                                <Link to="/invitados" onClick={() => processo(invitado.id, process)}>
                                    <i className="bi bi-trash text-danger" title="Eliminar"></i>
                                </Link>
                                <Link to="/editar" onClick={() => processo(invitado.id)}>
                                    <i className="bi bi-pencil-fill text-primary" title="Modificar"></i>
                                </Link>
                            </td>

                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="8">
                            {/*  si message tiene valor entonces renderiza */}
                            {/*   {message && (
                                <h5 className="alert alert-danger mt-3">
                                    {message}
                                </h5>
                            )} */}
                            {/*   {errores && (
                                <h5 className="alert alert-danger mt-3">
                                    {errores}
                                </h5>
                            )} */}
                        </td>
                    </tr>
                </tfoot>
            </table>
        </div>

    )
}
//exportamos para llamar a la vista desde el componente padre
export default ViewInvitados