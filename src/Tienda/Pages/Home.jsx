import { Banners } from "../Components/Home/Banners";
import Container from "react-bootstrap/Container";
import { Informacion } from "../Components/Home/Informacion";
import { CategoriasVen } from "../Components//Home/CategoriasVen";
import { CarrouselCategori } from "../Components/Home/CarrouselCategori";
import { Banners2 } from "../Components/Home/Banners2";
import { Carrousel2 } from "../Components/Home/Carrousel2";
import { OficialTiendas } from "../Components/Home/OficialTiendas";
import { Carrousel3 } from "../Components/Home/Carrousel3";

export const Home = () => {
  return (
    <Container>
      <Informacion />
      <Banners />
      <CategoriasVen/>
      <CarrouselCategori/>
      <Banners2/>
      <Carrousel2/>
      <OficialTiendas/>
      <Carrousel3/>
    </Container>
  );
};
