import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { perfil } from "../../data/perfil";

const Presentacion = () => (
  <section>
    <Image src={perfil.foto} alt={perfil.alt} width={200} />
    <Title level={2}>Quién soy</Title>
    <Title level={3}>{perfil.nombre}</Title>
    <Text>{perfil.descripcion}</Text>
  </section>
);

export default Presentacion;