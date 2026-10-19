import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("muestra el año actual", () => {
    render(<Footer />);
    const anio = new Date().getFullYear();
    expect(screen.getByText(new RegExp(String(anio)))).toBeInTheDocument();
  });
});