import { Row, Col } from "antd";
import MainLayout from "../templates/MainLayout";
import Presentacion from "../organisms/Presentacion";
import Proyectos from "../organisms/Proyectos";
import Experiencia from "../organisms/Experiencia";
import Estudios from "../organisms/Estudios";
import Contacto from "../organisms/Contacto";

const Home = () => (
  <MainLayout>
    <Row gutter={[24, 24]}>
    <Col xs={24} lg={6}><Presentacion /></Col>
    <Col xs={24} lg={12}><Proyectos /></Col>
    <Col xs={24} lg={6}><Experiencia /><Estudios /></Col>
    </Row>
    <Contacto />
  </MainLayout>
);

export default Home;