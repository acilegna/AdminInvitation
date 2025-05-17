const ViewEdit = ({ formulario, handleChange, update, errores, showHides, agrega, mensaje, titulo, mostrar, valida }) => {
    const saveChanges = "saveChanges";
    const save = "save";
    return (<>

        <div className="container mt-4">

            <h2>{titulo}</h2>
            {/*  pasar id y ocultarlo */}
            <input type="hidden" value={formulario.id} onChange={handleChange}></input>
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



            {(mostrar === "edit" || mostrar === "saveChanges") && <a className="icono text-black"><i className="bi bi-floppy" onClick={() => {
                update(formulario.id),
                    showHides(saveChanges)
            }}> Guardar Cambios</i> </a>}


            {(mostrar === "add" || mostrar === "save") && <a className="icono text-black">
                <i className="bi bi-floppy" onClick={() => { agrega(), showHides(save) }}> Guardar</i> </a>}



        </div>
    </>)
}
export default ViewEdit