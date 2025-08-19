import ViewDetalles from "./ViewDetalles";
import ViewInvitados from "./ViewInvitados";
import ViewImport from "./ViewImport";
import ViewEdit from "./ViewEdit";
import ViewInvitation from "./ViewInvitation";
import { Routes, Route } from 'react-router-dom';
import { useDatosInvitados } from "../hooks/useDatosInvitados";
import Menu from "./Menu";


function ViewPanel() {
    /* const ViewPanel = () => { */
    //desestructurando los valores que vienen de   useDatosInvitados, extrayendo  sus propiedades y funciones
    const {
        totalConfirmados, totalPendientes, totalAusentes, totalInvitados, todosInvitados,
        totalNiños, totalAdultos, totalNiñosAusentes, totalAdultosAusentes, totalAdultosConfirmados,
        totalNiñosConfirmados, totalNiñosNoConfirmados, totalAdultosNoConfirmados, formulario,
        handleChange, error, mensaje, ProcessDeleteOrSearch, updateInvitado, addNew, titulo,
        changeTitle, valida, estado, Confirmation } = useDatosInvitados();


    return (
        <div className="d-flex"   >

            <Menu />
            <section className="sections d-flex justify-content-center align-items-center"  >
                {/*   pasar datos a componentes  */}

                <Routes>
                    <Route path='/invitados' element={<ViewInvitados
                        data={todosInvitados}
                        processo={ProcessDeleteOrSearch}
                        errores={error}
                        message={mensaje}
                        changeTitle={changeTitle}
                        Confirmation={Confirmation}
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
                        niñosNoConfirmados={totalNiñosNoConfirmados}
                        adultosNoConfirmados={totalAdultosNoConfirmados} />}></Route>

                    <Route path='/editar' element={<ViewEdit
                        formulario={formulario}
                        handleChange={handleChange}
                        estado={estado}
                        update={updateInvitado}
                        errores={error}
                        mensaje={mensaje}
                        agrega={addNew}
                        titulo={titulo}
                        valida={valida} />}>
                    </Route>

                    <Route path='/import' element={<ViewImport />}></Route>

                    {/*  <Route path='/ver' element={<ViewInvitation/>}></Route> */}
                </Routes>

            </section>


        </div>
    );

}
export default ViewPanel