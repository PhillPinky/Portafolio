import { Typography } from "antd";

const { Link: AntLink } = Typography;

const Link = ({ href, target = "_blank", children }) => (
  <AntLink href={href} target={target}>
    {children}
  </AntLink>
);

export default Link;