import { Image as AntImage } from "antd";

const Image = ({ alt, src, width }) => (
  <AntImage src={src} alt={alt} width={width} />
);

export default Image;