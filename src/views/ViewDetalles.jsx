import 'bootstrap/dist/css/bootstrap.min.css';

//recibe los datos q envia la vista viewPanel (componente principal-padre)
const ViewDetalles = ({ confirmados, pendientes, ausentes, total }) => {
    return (
        <div className="cont-details p-3 bg-primary text-white rounded ">

            <div className='row'>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6  col-6 d-flex flex-column justify-content-center align-items-center'>
                    <h3 className="text-capitalize text-center"> todos </h3>
                    <span className='detalles'>{total}</span>
                </div>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6  col-6 d-flex flex-column justify-content-center align-items-center confirmados'>
                    <h3 className="text-capitalize text-center"> ausentes </h3>
                    <span className='detalles'>{ausentes}</span>
                </div>
            </div>

            <div className='row dos'>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6  col-6 d-flex flex-column justify-content-center align-items-center confirmado'>
                    <h3 className="text-capitalize text-center"> confirmados </h3>
                    <span className='detalles'>{confirmados}</span>
                </div>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-6 d-flex flex-column justify-content-center align-items-center'>
                    <h3 className="text-capitalize"> pendientes </h3>
                    <span className='detalles' >{pendientes}</span>
                </div>
            </div>
        </div>
    )
}
//exportamos para llamar a la vista desde el componente padre
export default ViewDetalles