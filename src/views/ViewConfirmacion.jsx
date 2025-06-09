const ViewConfirmacion = ({ byFamily, invitado, error, mensaje }) => {

    return (

        <>
            <div className="container">
                <h1>Confirmación de Invitados</h1>
                <h3>ingresa tu id de invitado y da clic en buscar</h3>
                <input type="search" onChange={byFamily}  ></input>
                <hr />
                <div>{invitado?.invitados?.length > 0 ? (
                    <ul>
                        {invitado.invitados.map((invitado) => (
                            <div key={invitado.id}>
                                <h2> {invitado.name} {invitado.apellido} <sapn>  {invitado.categoria} </sapn></h2>
                               
                                
                            </div>
                        ))}
                    </ul>
                ) : (
                    <p className="text-muted">No hay invitados cargados</p>

                )}
                </div>
            </div>

        </>
    );
}
export default ViewConfirmacion;