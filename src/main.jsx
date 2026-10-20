import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ConfigProvider } from "antd"; // Asegúrate de importar ConfigProvider desde antd
import Home from "./pages/Home";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Noto Serif', serif",
          colorPrimary: "#b98aa6",
          colorBgContainer: "rgba(255, 255, 255, 0.85)",
          colorText: "#333",
        },
        components: {
          Layout: { bodyBg: "transparent" },
        },
      }}
    >
      <Home />
    </ConfigProvider>
  </StrictMode>
);
