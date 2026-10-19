import Title from "../atoms/Title";
import Link from "../atoms/Link";
import Formulario from "./Formulario";
import { redes } from "../../data/redes";

const Contacto = () => (
  <section id="contacto">
    <Title level={2}>Contacto</Title>
    {redes.map((red) => (
      <div key={red.url}>
        <Link href={red.id}>{red.nombre}</Link>
      </div>
    ))}
    <Formulario />
  </section>
);

export default Contacto;