import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import SmallMenu from "../components/SmallMenu";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MockSmallMenu() {
    return (
        <Provider store={store}>
            <SmallMenu />
        </Provider>
    );
}

describe("SmallMenu", () => {
    it("renders 3 buttons", () => {
        render(<MockSmallMenu />);

        const menuBtns = screen.getAllByRole("button");

        expect(menuBtns.length).toBe(3);
    });
    // it('should not render a options div', ()=>{})
    // test('that the input field changes when a new option is clicked',()=>{})
    // test('that a new page is rendered when the "Ready" button is clicked',()=>{})
});
