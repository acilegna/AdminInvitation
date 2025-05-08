
import ViewDetalles from "./ViewDetalles";
import ViewInvitados from "./ViewInvitados";
import ViewEdit from "./ViewEdit";
import { useDatosInvitados } from "../hooks/useDatosInvitados";


function ViewPanel() {
    /* const ViewPanel = () => { */
    //desestructurando los valores que vienen de   useDatosInvitados, extrayendo  sus propiedades y funciones
    const { totalConfirmados, totalPendientes, totalAusentes, formulario,
        handleChange,
        totalInvitados, todosInvitados, mostrar, error, eliminado, showHide, loadAll, allInvitados, Remove, searchId } = useDatosInvitados();
    //declaramos variables para pasar a la funcion showhide y poder alternar mostrar y ocultar 
    const all = "all";
    const detalles = "detalles";
    return (
        <div className="d-flex" id="main-panel">
            <nav className="bg-dark text-white p-4 p-3" id="menu" aria-label="Menú lateral">
                <h4 className="text-center mb-4">INVITACIÓN</h4>
                <ul className="nav flex-column">

                    <li className="nav-item">
                        <a className="nav-link text-white active"  >  <i className="bi bi-house-door"> </i>Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white active" >  <i className="bi bi-file-earmark-excel"> </i>Importar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white active" onClick={() => { allInvitados(); showHide(all); }}>  <i className="bi bi-person-vcard"> </i>Invitados</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link text-white active" onClick={() => { loadAll(), showHide(detalles); }}>   <i className="bi bi-person-vcard"> </i>Detalles</a>


                    </li>
                    <li className="nav-item mt-3">
                        <a className="nav-link text-white active" href="#">  <i className="bi bi-box-arrow-right"> </i>Salir</a>

                    </li>
                </ul>
            </nav>
            <section className="sections container d-flex justify-content-center align-items-center">

                {/*   pasar datos a componentes  */}


                {mostrar === "detalles" && <ViewDetalles confirmados={totalConfirmados}
                    pendientes={totalPendientes} ausentes={totalAusentes} total={totalInvitados} errores={error} />}

                {mostrar === "all" && <ViewInvitados data={todosInvitados} delet={Remove} errores={error}
                    message={eliminado} showHid={showHide} search={searchId} />}

                {mostrar === "edit" && <ViewEdit formulario={formulario} handleChange={handleChange} />}

            </section>


        </div>
    );

}
export default ViewPanel