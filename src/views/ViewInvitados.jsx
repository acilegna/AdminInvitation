import 'bootstrap/dist/css/bootstrap.min.css';

//recibe los datos q envia la vista viewPanel (componente principal-padre)
const ViewInvitados = ({ data, delet, errores, message, search, showHid }) => {
    const edit = "edit";
    const process="delete"
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
                    {data.map((invitados) => (
                        <tr key={invitados.id}>
                            <td>{invitados.name}</td>
                            <td>{invitados.apellido}</td>
                            <td>{invitados.telefono}</td>
                            <td>{invitados.categoria}</td>
                            <td>{invitados.status}</td>
                            <td>
                                <a className="icono text-black"><i className="bi bi-pencil-fill" onClick={() => { delet(invitados.id), showHid(edit) }}> </i> </a>
                                <a className="icono text-black"><i className="bi bi-trash" onClick={() => delet(invitados.id,process)}></i> </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
                <tfoot>
                    <tr>
                        <td colspan="6">
                            {/*  si message tiene valor entonces renderiza */}
                            {message && (
                                <h5 className="alert alert-danger mt-3">
                                    {message}
                                </h5>
                            )}
                            {errores && (
                                <h5 className="alert alert-danger mt-3">
                                    {errores}
                                </h5>
                            )}
                        </td>
                    </tr>


                </tfoot>

            </table>



        </>
    )
}
//exportamos para llamar a la vista desde el componente padre
export default ViewInvitados