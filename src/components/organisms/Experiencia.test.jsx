import { render, screen } from "@testing-library/react";
import Experiencia from "./Experiencia";
import { experiencia } from "../../data/experiencia"; 

describe("Experiencia", () => {
  test("muestra la experiencia de la sección", () => {
    render(<Experiencia />);
    expect(screen.getByRole("heading", { name: /Experiencia/i })).toBeInTheDocument();
  });

  test("muestra el título y lugar de cada experiencia", () => {
    render(<Experiencia />);
    experiencia.forEach((item) => {
      const elementosTitulo = screen.getAllByText(item.titulo);
      const elementosLugar = screen.getAllByText(item.lugar);
      
      expect(elementosTitulo.length).toBeGreaterThan(0);
      expect(elementosLugar.length).toBeGreaterThan(0);
    });
  });
});