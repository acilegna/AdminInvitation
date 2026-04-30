import "bootstrap/dist/css/bootstrap.min.css";
import { useState, useEffect } from "react";
//recibe los datos q envia la vista viewPanel (componente principal-padre)
const ViewDetalles = ({
  confirmados,
  pendientes,
  ausentes,
  total,
  errores,
  niños,
  adultos,
  niñosAusentes,
  adultosAusentes,
  niñosConfirmados,
  adultosConfirmados,
  adultosPendientes,
  niñosNoConfirmados,
}) => {
  return (
    <div className="cont-details p-3 text-white rounded d-flex flex-column justify-content-center align-items-center gap-2">
      <label className="title-resumen-invitados ">Resumen de Invitados</label>
      <div className="row justify-content-center   d-flex gap-2">
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5  col-12  d-flex flex-column justify-content-center align-items-center invitados">
          <i className="bi bi-people-fill"></i>
          <h3 className="text-capitalize title-invitados"> Total Invitados </h3>
          <span className="detalles number-invitados">{total}</span>
          <div className="d-flex  gap-2 ">
            <i className="bi bi-emoji-smile"></i>
            <span className="text-status"> {niños} Niños</span>
            <span className="border-start"></span>
            <i className="bi bi-person-fill"></i>{" "}
            <span className="text-status"> {adultos} Adultos</span>
          </div>
        </div>

        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5  col-12 d-flex flex-column justify-content-center align-items-center confirmado">
          <i className="bi bi-person-check-fill"></i>
          <h3 className="text-capitalize title-confirmado"> confirmados </h3>
          <span className="detalles number-confirmado">{confirmados}</span>

          <div className="d-flex gap-2">
            <i className="bi bi-emoji-smile"></i>
            <span className="text-status"> {niñosConfirmados} Niños </span>{" "}
            <span className="border-start"></span>
            <i className="bi bi-person-fill"></i>
            <span className="text-status"> {adultosConfirmados} Adultos</span>
          </div>
        </div>
      </div>

      <div className="row justify-content-center d-flex gap-2 ">
        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-12    d-flex flex-column justify-content-center align-items-center ausentes">
          <i className="bi bi-person-dash-fill"></i>
          <h3 className="text-capitalize title-ausentes"> ausentes </h3>
          <span className="detalles number-ausentes">{ausentes}</span>
          <div className="d-flex  gap-2 ">
            <i className="bi bi-emoji-smile"></i>
            <span className="text-status"> {niñosAusentes} Niños</span>{" "}
            <span className="border-start"></span>
            <i className="bi bi-person-fill"></i>
            <span className="text-status"> {adultosAusentes} Adultos</span>
          </div>
        </div>

        <div className="col-xxl-5 col-xl-5 col-lg-5 col-md-5 col-12 d-flex flex-column justify-content-center align-items-center pendientes">
          <i className="bi bi-clock"></i>
          <h3 className="text-capitalize title-pendiente"> pendientes </h3>

          <span className="detalles number-pendiente">{pendientes}</span>
          <div className="d-flex gap-2">
            <i className="bi bi-emoji-smile"></i>
            <span className="text-status">
              {" "}
              {niñosNoConfirmados} Niños
            </span>{" "}
            <span className="border-start"></span>
            <i className="bi bi-person-fill"></i>
            <span className="text-status"> {adultosPendientes} Adultos</span>
          </div>
        </div>
      </div>
    </div>
  );
};
//exportamos para llamar a la vista desde el componente padre
export default ViewDetalles;
