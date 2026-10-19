import { Card } from "antd";
import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Link from "../atoms/Link";

const TarjetaProyecto = ({ titulo, imagenes, repositorio, leyenda }) => (
  <Card>
    {imagenes.length > 0 && (<Image src={imagenes[0].src} alt={imagenes[0].alt} />)}
    <Title level={3}>{titulo}</Title>
    <Text>{leyenda}</Text>
    <br />
    <Link href={repositorio}>Ver repositorio</Link>
  </Card>
);

export default TarjetaProyecto;

