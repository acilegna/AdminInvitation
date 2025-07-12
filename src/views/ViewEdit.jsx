
const ViewEdit = ({ formulario, handleChange, update, errores, agrega, mensaje, titulo, valida, estado }) => {

    return (<>

        <div className="container mt-4">

            <h2>{titulo}</h2>
            {/*  pasar id y ocultarlo */}
            <input type="hidden" value={formulario.id} onChange={handleChange}></input>
            <div className="mb-3">
                <label htmlFor="idFam" className="form-label">Id Familia</label>
                <input
                    type="text"
                    className="form-control"
                    id="id_familia"
                    name="id_familia"
                    value={formulario.id_familia}
                    onChange={handleChange}
                />
                {valida?.id_familia && (
                    <div className="alert alert-danger mt-1">{valida.id_familia[0]}</div>
                )}

            </div>
            <div className="mb-3">
                <label htmlFor="nombre" className="form-label">Nombre</label>
                <input type="text" className="form-control" id="name" name="name" value={formulario.name}
                    onChange={handleChange} required />
            </div>

            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Apellido</label>
                <input type="text" className="form-control" id="apellido" name="apellido" value={formulario.apellido} onChange={handleChange} required />
            </div>

            <div className="mb-3">
                <label htmlFor="telefono" className="form-label">Teléfono</label>
                <input type="tel" className="form-control" id="telefono" name="telefono" value={formulario.telefono} onChange={handleChange} />
                {valida?.telefono && (
                    <div className="alert alert-danger mt-1">{valida.telefono[0]}</div>
                )}
            </div>

            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Categoria</label>

                <input type="text" className="form-control" id="categoria" name="categoria" value={formulario.categoria} onChange={handleChange} required />
                {valida?.categoria && (
                    <div className="alert alert-danger mt-1">{valida.categoria[0]}</div>
                )}
            </div>

            <div className="mb-3">
                <label htmlFor="apellido" className="form-label">Asistirá</label>
                <input type="text" className="form-control" id="status" name="status" value={formulario.status} onChange={handleChange} required />
                {valida?.status && (
                    <div className="alert alert-danger mt-1">{valida.status[0]}</div>
                )}
            </div>



            {(estado === 2) &&
                <a className="icono text-black"><i className="bi bi-floppy" onClick={() => { agrega() }}> Guardar </i>
                </a>
            }
            {(estado === 1) &&
                <a className="icono text-black"><i className="bi bi-floppy" onClick={() => {
                    update(formulario.id)
                }}> Guardar Cambios</i>
                </a>
            }
        </div>
    </>)
}
export default ViewEdit