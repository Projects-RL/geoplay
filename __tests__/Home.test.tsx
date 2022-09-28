import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import { store } from "../redux/store";
import Home from "../pages";
import { server } from "../mocks/server";
import UserAuth from "../components/UserAuth";
import userEvent from "@testing-library/user-event";

describe("Home", () => {
  test("Modal renders when the profile button is clicked", () => {
    render(
      <Provider store={store}>
        <Home isLoggedIn={false} />
      </Provider>
    );
    const profileBtn = screen.getByTestId("profileButton");
    expect(screen.queryByPlaceholderText("Email")).not.toBeInTheDocument();

    fireEvent.click(profileBtn);
    expect(screen.getByPlaceholderText("Email")).toBeInTheDocument();
  });
});

describe("UserAuth", () => {
  beforeAll(() => {
    server.listen({
      onUnhandledRequest: "error",
    });
  });
  afterEach(() => {
    server.resetHandlers();
  });
  afterAll(() => {
    server.close();
  });

  const userValue = {
    email: "test@user.com",
    password: "pwd123",
  };

  test("sign in correctly", async () => {
    render(
      <Provider store={store}>
        <UserAuth />
      </Provider>
    );

    fireEvent.change(screen.getByPlaceholderText("Email"), {
      target: { value: userValue.email },
    });
    fireEvent.change(screen.getByPlaceholderText("Password"), {
      target: { value: userValue.password },
    });
    fireEvent.click(screen.getByDisplayValue("Sign in"));

    await new Promise((r) => setTimeout(r, 2000));

    screen.debug();
  });
});
