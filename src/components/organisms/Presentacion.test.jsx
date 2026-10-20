import { render, screen } from "@testing-library/react";
import Presentacion from "./Presentacion";
import { perfil } from "../../data/perfil"; 

describe("Presentacion", () => {
  test("muestra la presentación de la sección", () => {
    render(<Presentacion />);
   
    expect(screen.getByRole("heading", { name: /Quién soy|Valentina Cordero/i })).toBeInTheDocument();
  });

  test("muestra el nombre del perfil", () => {
    render(<Presentacion />);
    expect(screen.getByText(perfil.nombre)).toBeInTheDocument();
  });
});