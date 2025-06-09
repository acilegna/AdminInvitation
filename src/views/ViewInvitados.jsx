import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

//recibe los datos q envia la vista viewPanel (componente principal-padre)
const ViewInvitados = ({ data, errores, message, processo, changeTitle }) => {
    const process = "delete";

    return (
        <>
            <table className="table table-striped table-bordered table-responsive">
                <thead>
                    <tr>
                        <th colSpan="6">

                            <Link className="btn btn-primary" to="/editar" onClick={() => { changeTitle() }}>
                                <i className="bi bi-person-add text-white"> Agregar Invitado</i>
                            </Link>


                        </th>
                    </tr>
                    <tr>
                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Teléfono</th>
                        <th>Categoria</th>
                        <th>Status</th>
                        <th>Operaciones</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((invitados) => (
                        <tr key={invitados.id}>
                            <td>{invitados.name}</td>
                            <td>{invitados.apellido}</td>
                            <td>{invitados.telefono}</td>
                            <td>{invitados.categoria}</td>
                            <td>{invitados.status}</td>
                            <td className="d-flex gap-2">

                                <Link className="text-white" to="/invitados" onClick={() => { processo(invitados.id, process) }}> <i className="bi bi-trash text-black"  ></i>  </Link>
                                <Link className="text-white" to="/editar" onClick={() => { processo(invitados.id) }}> <i className="bi bi-pencil-fill text-black"  ></i>  </Link>

                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colSpan="6">
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



        </>
    )
}
//exportamos para llamar a la vista desde el componente padre
export default ViewInvitados