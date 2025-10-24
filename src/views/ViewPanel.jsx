import ViewDetalles from "./ViewDetalles";
import ViewInvitados from "./ViewInvitados";
import ViewImport from "./ViewImport";
import ViewEdit from "./ViewEdit";

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
        changeTitle, valida, estado, Confirmation, resumen,handleInputChange,inputValue,filtro} = useDatosInvitados();


    return (
        <div className="d-flex"   >

            <Menu resumen={resumen} />
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
                        handleInputChange={handleInputChange}
                        inputValue={inputValue}
                        filtro={filtro}
                    />}></Route>

                    <Route path='/detalles' element={<ViewDetalles
                        resumen={resumen}
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
                        adultosPendientes={totalAdultosNoConfirmados} />}></Route>
                    {/* 
                        const ViewDetalles = ({ confirmados, pendientes, ausentes, total, errores, niños, adultos,
    niñosAusentes, adultosAusentes, niñosConfirmados, adultosConfirmados, adultosNoConfirmados, niñosNoConfirmados })   */}

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

                </Routes>

            </section>


        </div>
    );

}
export default ViewPanel