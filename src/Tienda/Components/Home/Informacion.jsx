import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const Informacion = () => {
  return (
    <Row>
      <Col lg md className="d-flex justify-content-center align-items-center p-2 infoRes">
        <i class="fa fa-clock-o fa-2x"></i>
        <p className="mt-3 ms-2">Envio en 24hrs</p>
      </Col>
      <Col lg md className="d-flex justify-content-center align-items-center p-2 infoRes">
        <i class="fa fa-mobile fa-2x" aria-hidden="true"></i>
        <p className="mt-3 ms-2">Precios mas bajos</p>
      </Col>
      <Col lg md className="d-flex justify-content-center align-items-center p-2 infoRes">
        <i class="fa fa-cc-visa fa-2x" aria-hidden="true"></i>
        <p className="mt-3 ms-2">S/80 de regalo</p>
      </Col>
      <Col lg md className="d-flex justify-content-center align-items-center p-2 infoRes">
        <i class="fa fa-flag fa-2x" aria-hidden="true"></i>
        <p className="mt-3 ms-2">Remate</p>
      </Col>
      <Col lg md className="d-flex justify-content-center align-items-center p-2 infoRes">
        <i class="fa fa-mobile fa-2x" aria-hidden="true"></i>
        <p className="mt-3 ms-2">Pronto una App</p>
      </Col>
      <Col lg={12} md={12} className="">
        <img src="https://dynamic-yield.linio.com//api/scripts/8767678/images/2dc01f521ef6c__cint_lo_mejpr_cyber_modificaciones_xvi_1.jpg" alt="" className="img-fluid img-info mb-3" />
      </Col>
    </Row>
  );
};
