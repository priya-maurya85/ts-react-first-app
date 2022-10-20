import { render, screen} from "@testing-library/react"
import HelloName from "./HelloName";


// getByText ////////


describe.skip("HelloName Component", () => {
  

    // test  only and skip --
    
    test('if name passed', () => {
        render(<HelloName name="Priya"/>);
        const element = screen.getByText("Hello Priya");
        expect(element).toBeInTheDocument();
    })
});

describe('testing without props', () => {
    test('hello name testing', () => {
        render(<HelloName />);
        const element = screen.getByText("Hello");
        expect(element).toBeInTheDocument();
    
    })
});