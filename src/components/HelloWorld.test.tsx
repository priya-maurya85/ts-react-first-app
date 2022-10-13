import { render, screen } from "@testing-library/react";
import HelloWorld from "./HelloWorld";

test("testing text hello world", () => {
    render(<HelloWorld />);
    const textElement = screen.getByText(/hello world/i);
    expect(textElement).toBeInTheDocument();

});