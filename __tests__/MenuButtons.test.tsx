import { render, screen, fireEvent } from "@testing-library/react";
import MenuButtons from "../components/MenuButtons";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";

function MockMenuButtons() {
  return (
    <Provider store={store}>
      <MenuButtons />
    </Provider>
  );
}

describe("MenuButtons", () => {
  it("renders 3 buttons", () => {
    render(<MenuButtons />);

    const menuBtns = screen.getAllByRole("button");

    expect(menuBtns.length).toBe(3);
  });

  test("At initial rendering, the submenu should be hidden", () => {
    render(<MockMenuButtons />);

    const readyButton = screen.queryByText(/Ready/i);

    expect(readyButton).not.toBeInTheDocument();
  });

  test("When Play is clicked, the submenu should appear", async () => {
    render(<MockMenuButtons />);

    const playButton = screen.getByRole("button", { name: "Play" });
    fireEvent.click(playButton);

    expect(await screen.findByText(/Ready/i)).toBeInTheDocument();
  });
});
