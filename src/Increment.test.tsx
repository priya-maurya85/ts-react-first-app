import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import IncrementDecrement from "./IncrementDecrement"

describe("test increment", () => {
    test("counter on load is 0",  () => {
        render(<IncrementDecrement />);
        const counterValue = screen.getByRole('heading', { name: /0/i});
        expect(counterValue).toBeInTheDocument();
        const incBtn = screen.getByRole('button', {name: /increment/i});
        expect(incBtn).toBeInTheDocument();
    })

    test("onclick of incre btn counter value should show 1", () => {
        render(<IncrementDecrement />);
        
    })
})