import 'bootstrap/dist/css/bootstrap.min.css';

//recibe los datos q envia la vista viewPanel (componente principal-padre)
const ViewInvitados = ({ invitados }) => {
    return (
        <>

            <table className="table table-striped table-bordered table-responsive">
                <thead>
                    <tr>

                        <th>Nombre</th>
                        <th>Apellido</th>
                        <th>Teléfono</th>
                        <th>categoria</th>
                        <th>status</th>
                        <th>Operaciones</th>

                    </tr>
                </thead>
                <tbody>
                    {invitados.map((invitados) => (
                        <tr key={invitados.id}>
                            <td>{invitados.name}</td>
                            <td>{invitados.apellido}</td>
                            <td>{invitados.telefono}</td>
                            <td>{invitados.categoria}</td>
                            <td>{invitados.status}</td>
                            <td>
                                <a className="icono text-black"><i className="bi bi-pencil-fill"> </i> </a>
                                <a className="icono text-black"><i className="bi bi-trash"> </i> </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}
//exportamos para llamar a la vista desde el componente padre
export default ViewInvitados