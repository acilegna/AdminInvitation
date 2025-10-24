import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from "react";
//recibe los datos q envia la vista viewPanel (componente principal-padre)
const ViewDetalles = ({ confirmados, pendientes, ausentes, total, errores, niños, adultos,
    niñosAusentes, adultosAusentes, niñosConfirmados, adultosConfirmados, adultosPendientes, niñosNoConfirmados  }) => {

 
    return (
        <div className="cont-details p-3 text-white rounded d-flex flex-column justify-content-center align-items-center ">
            <div className='row justify-content-center'>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6  col-12 d-flex flex-column justify-content-center align-items-center invitados'>
                    <h3 className="text-capitalize text-center"> Invitados </h3>
                    <span className='detalles'>{total}</span>
                    <div className="d-flex gap-2">
                        <span>Niños: {niños}</span> <span>Adultos: {adultos}</span>
                    </div>
                </div>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6  col-12 d-flex flex-column justify-content-center align-items-center confirmados'>
                    <h3 className="text-capitalize text-center"> ausentes </h3>
                    <span className='detalles'>{ausentes}</span>
                    <div className="d-flex gap-2">
                        <span>Niños: {niñosAusentes}</span> <span>Adultos: {adultosAusentes} </span>
                    </div>

                </div>
            </div>

            <div className='row justify-content-center'>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6  col-12 d-flex flex-column justify-content-center align-items-center confirmado'>
                    <h3 className="text-capitalize text-center"> confirmados </h3>
                    <span className='detalles'>{confirmados}</span>
                    <div className="d-flex gap-2">
                        <span>Niños: {niñosConfirmados}</span> <span>Adultos: {adultosConfirmados} </span>
                    </div>
                </div>
                <div className='col-xxl-6 col-xl-6 col-lg-6 col-md-6 col-12 d-flex flex-column justify-content-center align-items-center pendientes'>
                    <h3 className="text-capitalize"> pendientes </h3>
                    <span className='detalles' >{pendientes}</span>
                    <div className="d-flex gap-2">
                        <span>Niños: {niñosNoConfirmados}</span> <span>Adultos: {adultosPendientes} </span>
                    </div>
                </div>

            </div>
        </div>
    )
}
//exportamos para llamar a la vista desde el componente padre
export default ViewDetalles