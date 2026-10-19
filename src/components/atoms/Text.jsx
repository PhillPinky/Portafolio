import { Typography } from "antd";

const { Text: AntText } = Typography;

const Text = ({ children, type }) => <AntText type={type}>{children}</AntText>;
export default Text;