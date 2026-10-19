import MainLayout from "../components/templates/MainLayout";
import Presentacion from "../components/organisms/Presentacion";
import Proyectos from "../components/organisms/Proyectos";
import Experiencia from "../components/organisms/Experiencia";
import Estudios from "../components/organisms/Estudios";
import Contacto from "../components/organisms/Contacto";

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