import { render, screen } from "@testing-library/react";
import { link } from "fs";
import GetByAllTest from "./GetByAllTest";

describe.skip("testing multiple elements by getAllBy....", ()=> {
    const users = ["typescript", "hooks"];
    test("all elements of list are rendered", () => {
        render(<GetByAllTest users={users}/>)
        const listElement = screen.getByRole("list");
        expect(listElement).toBeInTheDocument();
    })

    test("two items of list are rendered", () => {
        render(<GetByAllTest users={users}/>)
        const listElement = screen.getAllByRole("listitem");
        expect(listElement).toHaveLength(users.length);
    })
    test("testing header h1 by textmatch", () => {
        render(<GetByAllTest users= {users}/>)
        const textElement = screen.getAllByText((content) => content.startsWith("List"));
        expect(textElement).toHaveLength(3);
    })
})