import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
export const Banners2 = () => {
  return (
    <>
      <Row className="mt-5">
        <Col lg={12}>
          <div
            style={{ background: "#B26AF3", height: "51px" }}
            className="align-items-center"
          >
            <h2 className="text-center text-white pt-2">¡SOLO X 24 HORAS!</h2>
          </div>
        </Col>
        <Col lg={6}>
          <div className="bannerPeque d-flex">
            <div style={{ width: "50%" }}>
              <div className="imgCir">
                <img
                  src="https://i.linio.com/p/69c60d0c79499e1eb412d93adca607bf-product.jpg"
                  alt=""
                  width={120}
                  className="proimg"
                />
              </div>
            </div>
            <div className="text-white mt-3 cajasBanner">
              <span className="fs-4 fw-bold">Audífonos Bluetooth</span>
              <br></br>
              <span className="fs-5">On Ear Sony WH-CH510</span>
              <br></br>
              <span className="fs-5 fw-bold">S/ 109.00</span>
              <br></br>
              <span className="fs-3 fw-bold text-dark">S/ 99.00</span>
              <br></br>
              <img
                src="https://dynamic-yield.linio.com//api/scripts/8767678/images/eeb14ea9917f__cmr_unica.png"
                alt=""
              />
            </div>
          </div>
        </Col>
        <Col lg={6}>
          <div className="bannerPeque d-flex">
            <div style={{ width: "50%" }}>
              <div className="imgCir">
                <img
                  src="https://i.linio.com/p/e4bb3015b845c7945bcc0572befbadb2-product.jpg"
                  alt=""
                  width={120}
                  className="proimg"
                />
              </div>
            </div>
            <div className="text-white mt-3 cajasBanner">
              <span className="fs-4 fw-bold">TV LED 55" UHD</span>
              <br></br>
              <span className="fs-5">LG 4K Thinq Ai 2022</span>
              <br></br>
              <span className="fs-5 fw-bold">S/ 2,799.00</span>
              <br></br>
              <span className="fs-3 fw-bold text-dark">S/ 1,499.00</span>
              <br></br>
              <img
                src="https://dynamic-yield.linio.com//api/scripts/8767678/images/eeb14ea9917f__cmr_unica.png"
                alt=""
              />
            </div>
          </div>
        </Col>
      </Row>
      <Row className="mt-5">
            <h3 className="mb-3">¡LAS MEJORES OFERTAS!</h3>
            <Col lg={6}>
                <img src="img/baner1.jpg" alt="" className="baner2"/>
            </Col>
            <Col lg={3}>
                <img src="img/baner2.jpg" alt="" className="baner2"/>
            </Col>
            <Col lg={3}>
                <img src="img/baner3.jpg" alt="" className="baner2" />
            </Col>
      </Row>
    </>
  );
};
