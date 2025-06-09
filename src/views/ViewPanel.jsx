
import ViewDetalles from "./ViewDetalles";
import ViewInvitados from "./ViewInvitados";
import ViewImport from "./ViewImport";
import ViewEdit from "./ViewEdit";
import ViewConfirmacion from "./ViewConfirmacion";
import { Link, Routes, Route } from 'react-router-dom';
import { useDatosInvitados } from "../hooks/useDatosInvitados";

function ViewPanel() {
    /* const ViewPanel = () => { */
    //desestructurando los valores que vienen de   useDatosInvitados, extrayendo  sus propiedades y funciones
    const {
        totalConfirmados, totalPendientes, totalAusentes, totalInvitados, todosInvitados,
        totalNiños, totalAdultos, totalNiñosAusentes, totalAdultosAusentes, totalAdultosConfirmados,
        totalNiñosConfirmados, totalNiñosNoConfirmados, totalAdultosNoConfirmados, formulario,  invitadosFamily,byFamily,handleInput,
        handleChange, error, mensaje, infoInvitados, allInvitados, ProcessDeleteOrSearch, updateInvitado,
        addNew, titulo, changeTitle, valida, estado } = useDatosInvitados();

    return (
        <div className="d-flex" id="main-panel">
            <nav className="bg-dark text-white p-4 p-3" id="menu" aria-label="Menú lateral">
                <h4 className="text-center mb-4">INVITACIÓN</h4>
                <ul className="nav flex-column">

                    <li className="nav-item">
                            <Link className="nav-link text-white active" to="/confirmacion"  > <i className="bi bi-house-door"></i> Inicio</Link>

                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white active" to="/import"  > <i className="bi bi-person-vcard"></i> Importar</Link>

                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white active" to="/invitados" onClick={allInvitados}> <i className="bi bi-person-vcard"></i> Invitados</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link text-white active" to="/detalles" onClick={infoInvitados}> <i className="bi bi-person-vcard"></i> Detalles</Link>
                    </li>

                    <li className="nav-item mt-3">
                        <a className="nav-link text-white active" href="#">  <i className="bi bi-box-arrow-right"> </i>Salir</a>

                    </li>
                </ul>
            </nav>
            <section className="sections container d-flex justify-content-center align-items-center">

                {/*   pasar datos a componentes  */}

                <Routes>
                    <Route path='/invitados' element={<ViewInvitados
                        data={todosInvitados}
                        processo={ProcessDeleteOrSearch}
                        errores={error}
                        message={mensaje}
                        changeTitle={changeTitle}

                    />}></Route>

                    <Route path='/detalles' element={<ViewDetalles
                        confirmados={totalConfirmados}
                        pendientes={totalPendientes}
                        ausentes={totalAusentes}
                        total={totalInvitados}
                        errores={error}
                        niños={totalNiños}
                        adultos={totalAdultos}
                        niñosAusentes={totalNiñosAusentes}
                        adultosAusentes={totalAdultosAusentes}
                        niñosConfirmados={totalNiñosConfirmados}
                        adultosConfirmados={totalAdultosConfirmados}                         
                        niñosNoConfirmados = { totalNiñosNoConfirmados }
                        adultosNoConfirmados = { totalAdultosNoConfirmados } />}></Route>

                    <Route path='/editar' element={<ViewEdit
                        formulario={formulario}
                        handleChange={handleChange}
                        estado={estado}
                        update={updateInvitado}
                        errores={error}
                        mensaje={mensaje}
                        agrega={addNew}
                        titulo={titulo}
                        valida={valida} />}></Route>

                    <Route path='/import' element={<ViewImport
                    />}></Route>

                    <Route path='/confirmacion' element={<ViewConfirmacion mensaje={mensaje} invitado={invitadosFamily} byFamily={handleInput} error={error}
                    />}></Route>
                </Routes>

            </section>


        </div>
    );

}
export default ViewPanel