import { Card } from "antd";
import Image from "../atoms/Image";
import Title from "../atoms/Title";
import Text from "../atoms/Text";
import Link from "../atoms/Link";

const TarjetaProyecto = ({ titulo, imagenes = [], repositorio, leyenda }) => (
  <Card>
    {imagenes.map((img, index) => (
      <figure key={img.id || index} style={{ margin: "0 0 1rem 0" }}>
        <Image src={img.src} alt={img.alt} width="100%" />
        <figcaption>
          <Text type="secondary">{img.leyenda || img.alt}</Text>
        </figcaption>
      </figure>
    ))}

    <Title level={3}>{titulo}</Title>
    <Text>{leyenda}</Text>
    <br />
    <Link href={repositorio}>Ver repositorio</Link>
  </Card>
);

export default TarjetaProyecto;