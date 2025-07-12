

const ViewConfirmacion = ({ byFamily, invitado, error, mensaje, handleClick, handleChangeRadio, confirmar, disable, inputValue }) => {
    const invitados = invitado?.invitados || [];
    const adultos = invitados.filter((inv) => inv.categoria.toLowerCase() === "adulto");
    const ninos = invitados.filter((inv) => inv.categoria.toLowerCase() === "niño");

    return (
        <div className="container my-4">
            <h1 className="text-center mb-3">Confirmación de invitados</h1>
            <h5 className="text-center mb-4">Ingresa tu ID de invitado y da clic en buscar</h5>

            <div className="row g-2 justify-content-center mb-4">
                <div className="col-12 col-md-6">
                    <input
                        id="search"
                        type="search"
                        className="form-control"
                        onChange={byFamily}
                        value={inputValue}
                        placeholder="ID de invitado"
                    />
                </div>
                <div className="col-12 col-md-2 d-grid">
                    <button className="btn btn-primary" onClick={handleClick}>Buscar</button>
                </div>
            </div>

            <hr />

            {adultos.length > 0 && (
                <>
                    <h4>Adultos</h4>
                    {adultos.map((invitado) => (
                        <div key={invitado.id} className="d-flex align-items-center mb-2">
                            <strong className="me-3">
                                {invitado.name} {invitado.apellido}
                            </strong>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name={`respuesta-${invitado.id}`} id={invitado.id}
                                    value='Si' onChange={handleChangeRadio} />
                                <label className="form-check-label" htmlFor={`si-${invitado.id}`}>
                                    Sí
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name={`respuesta-${invitado.id}`} id={invitado.id}
                                    value='No' onChange={handleChangeRadio} />
                                <label className="form-check-label" htmlFor={`no-${invitado.id}`}>
                                    No
                                </label>
                            </div>
                        </div>
                    ))}
                </>
            )}
            {ninos.length > 0 && (
                <>
                    <h4>Niños</h4>
                    {ninos.map((invitado) => (
                        <div key={invitado.id} className="d-flex align-items-center mb-2">



                            <strong className="me-3">
                                {invitado.name} {invitado.apellido}
                            </strong>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name={`respuesta-${invitado.id}`} id={invitado.id}
                                    value='Si' onChange={handleChangeRadio} />
                                <label className="form-check-label" htmlFor={`si-${invitado.id}`}>
                                    Sí
                                </label>
                            </div>

                            <div className="form-check form-check-inline">
                                <input className="form-check-input" type="radio" name={`respuesta-${invitado.id}`} id={invitado.id}
                                    value='No' onChange={handleChangeRadio} />
                                <label className="form-check-label" htmlFor={`no-${invitado.id}`}>
                                    No
                                </label>
                            </div>
                        </div>
                    ))}
                </>
            )}

            {mensaje && <h5 className="text-success text-center">{mensaje}</h5>}
            {error && <h5 className="text-danger text-center">{error}</h5>}


            {(adultos.length > 0 || ninos.length > 0) && (
                <div className="text-center my-4">
                    <button className="btn btn-success px-4" onClick={confirmar} disabled={disable}>CONFIRMAR</button>
                </div>
            )}
        </div>
    );
};

export default ViewConfirmacion;