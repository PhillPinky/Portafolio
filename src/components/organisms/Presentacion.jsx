import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import { perfil } from "../../data/perfil";

const Presentacion = () => (
  <section>
    <Image src={perfil.foto} alt={perfil.alt} width={200} />
    <Title level={2}>¿Quién soy? ૮(•͈⌔•͈)ა</Title>
    <Title level={4}>{perfil.nombre}</Title>
    <Text style={{ textAlign: "justify" }}>{perfil.descripcion}</Text>
  </section>
);

export default Presentacion;