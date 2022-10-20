import { render, screen } from "@testing-library/react"
import { text } from "stream/consumers"
import HelloForm from "./HelloForm"

////getByRole ///////

/// -- getByRole -- 
/*
name - label of text
name  - aria-label attribute text 
name- text between the element

codevolution youtube series refer

*/

describe("hello form test component", ()=>{
    test.skip("testing input getByRole", () => {
        render(<HelloForm />);
        const labelElement = screen.getByRole("textbox",{name: "First name"});        
        expect(labelElement).toBeInTheDocument();

        const selectElement = screen.getByRole("combobox");
        expect(selectElement).toBeInTheDocument();

        const buttonSubmitElement = screen.getByRole("button",{name: "Submit"});
        expect(buttonSubmitElement).toBeInTheDocument();

        // const buttonResetElement = screen.getByRole("button",{name: "reset-btn"});
        // expect(buttonResetElement).toBeInTheDocument();

        //// test case - when page loads - heading shoulde be loaded//

        const headingH1 = screen.getByRole("heading", {name: "This is getByRole testing"});
        expect(headingH1).toBeInTheDocument();

        // testing by heading levels from h1 to h6
        const headingH2 = screen.getByRole("heading", {level: 2});
        expect(headingH2).toBeInTheDocument();

        //testing by role = hidden -- not working  --------- @@@@@//////////
  
        // const buttonHiddenElement = screen.getByRole('button', { hidden: true });
        // expect(buttonHiddenElement).toBeInTheDocument();

    });
    test.skip("testing input by getByLabelText", ()=>{
        render(<HelloForm />);
        const inputElement = screen.getByLabelText("First name");
        expect(inputElement).toBeInTheDocument();


        //// getByPlaceholder ////
        const labelElement = screen.getByPlaceholderText("fullname");        
        expect(labelElement).toBeInTheDocument();

    });

    test.skip("testing input by getByDisplayValue", ()=>{
        render(<HelloForm />);
        const inputElement = screen.getByDisplayValue("Priya");
        expect(inputElement).toBeInTheDocument();

    });

    test.skip("testing input by getByAltText", ()=>{
        render(<HelloForm />);
        const inputElement = screen.getByAltText("Incredibles 2 Poster");
        expect(inputElement).toBeInTheDocument();

    });

    test.skip("testing input by getByTitle", ()=>{
        render(<HelloForm />);
        const inputElement = screen.getByTitle("close");
        expect(inputElement).toBeInTheDocument();

    });
    test.skip("testing input by getByTestId", ()=>{
        render(<HelloForm />);
        const inputElement = screen.getByTestId("customElement");
        expect(inputElement).toBeInTheDocument();

    });





})



