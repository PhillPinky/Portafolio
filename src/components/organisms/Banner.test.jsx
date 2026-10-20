import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner", () => {
  test("muestra el Banner de la sección", () => {
    render(<Banner />);
    expect(screen.getByRole("heading", { level: 1, name: /Portafolio Profesional/i })).toBeInTheDocument();
  });
});