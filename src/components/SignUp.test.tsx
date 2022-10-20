import { render, screen } from "@testing-library/react"
import SignUp from "./SignUp"

describe.skip("SignUp test", () => {
    test("Welcome button if login", () => {
        render(<SignUp />);
        const welcomeButton  = screen.getByRole('button', {name: "Welcome"});
        expect(welcomeButton).toBeInTheDocument();
    })

    test("SignUp button if not login -- quesryByRole", () => {
        render(<SignUp />);
        const signUpElement  = screen.queryByRole('button', {name: "SIgn Up"});
        expect(signUpElement).not.toBeInTheDocument();
    })

    test("SignUp button findByRole -- should present after 500 ms", async() => {
        render(<SignUp />);
        screen.debug();
        const signUpElement  = await screen.findByRole('button', {name: "SIgn Up"}, {timeout: 2500});
        screen.debug();
        expect(signUpElement).toBeInTheDocument();
    })
})