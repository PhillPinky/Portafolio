import { Typography } from "antd";

const { Title: AntTitle } = Typography;   

const Title = ({ children, level = 3, style }) => (
  <AntTitle level={level} style={style}>
    {children}
  </AntTitle>
);

export default Title;