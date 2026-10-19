import { Layout } from "antd";
import Banner from "../organisms/Banner";
import Footer from "../organisms/Footer";

const { Content } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <Banner />
    <Content style={{ padding: "1rem" }}>
      {children}
    </Content>
    <Footer />
  </Layout>
);

export default MainLayout;