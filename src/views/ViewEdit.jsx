const ViewEdit = ({ formulario, handleChange }) => {

    return (<>

        <div class="container mt-4">

            <h2>Editar Usuario</h2>

            <div class="mb-3">
                <label for="nombre" class="form-label">Nombre</label>
                <input type="text" class="form-control" id="name" name="name" value={formulario.name}
                    onChange={handleChange} required />
            </div>

            <div class="mb-3">
                <label for="apellido" class="form-label">Apellido</label>
                <input type="text" class="form-control" id="apellido" name="apellido" value={formulario.apellido} onChange={handleChange} required />
            </div>

            <div class="mb-3">
                <label for="telefono" class="form-label">Teléfono</label>
                <input type="tel" class="form-control" id="telefono" name="telefono" value={formulario.telefono} onChange={handleChange} />
            </div>

            <div class="mb-3">
                <label for="apellido" class="form-label">Categoria</label>

                <input type="text" class="form-control" id="categoria" name="categoria" value={formulario.categoria} onChange={handleChange} required />
            </div>

            <div class="mb-3">
                <label for="apellido" class="form-label">Status</label>
                <input type="text" class="form-control" id="status" name="status" value={formulario.status} onChange={handleChange} required />
            </div>

            <a className="icono text-black"><i className="bi bi-floppy"> Guardar</i> </a>
        </div>
    </>)
}
export default ViewEdit