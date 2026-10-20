import MainLayout from "../components/templates/MainLayout";
import Presentacion from "../components/organisms/Presentacion";
import Proyectos from "../components/organisms/Proyectos";
import Experiencia from "../components/organisms/Experiencia";
import Estudios from "../components/organisms/Estudios";
import Contacto from "../components/organisms/Contacto";
import Marco from "../components/molecules/Marco"; 
import { Row, Col } from "antd";

const Home = () => (
  <MainLayout>
    <Row gutter={[24, 24]}>
      {/* Columna Izquierda con Marco */}
      <Col xs={24} lg={6}>
        <Marco>
          <Presentacion />
        </Marco>
      </Col>
      <Col xs={24} lg={12}>
        <Proyectos />
      </Col>
      <Col xs={24} lg={6}>
        <Marco>
          <Experiencia />
          <Estudios />
        </Marco>
      </Col>
    </Row>
    <Contacto />
  </MainLayout>
);

export default Home;
