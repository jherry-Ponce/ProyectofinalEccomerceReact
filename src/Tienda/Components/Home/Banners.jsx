import Carousel from 'react-bootstrap/Carousel';
export const Banners = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 tamaño"
          src="https://i.linio.com/cms/e6c7ddc6-ff9b-11ec-aed1-56ba5f1eb965.jpeg"
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 tamaño"
          src="https://dynamic-yield.linio.com//api/scripts/8767678/images/9e900b8d5873__pe_gratidays_1403x325_cel.png"
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 tamaño"
          src="https://dynamic-yield.linio.com//api/scripts/8767678/images/1e6f599d8e242__pe_gratidays_1403x325_lineablanca.png"
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  );
};
