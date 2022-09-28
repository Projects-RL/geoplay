// import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
// import { Provider } from "react-redux";
// import { store } from "../redux/store";
// import Home from "../pages";
// import { server } from "../mocks/server";
// import UserAuth from "../components/UserAuth";
// import userEvent from "@testing-library/user-event";

// describe("UserAuth", () => {
//   beforeAll(() => {
//     server.listen({
//       onUnhandledRequest: "error",
//     });
//   });
//   afterEach(() => {
//     server.resetHandlers();
//   });
//   afterAll(() => {
//     server.close();
//   });

//   const userValue = {
//     email: "test@user.com",
//     password: "pwd123",
//   };

//   test("sign in correctly", () => {
//     render(
//       <Provider store={store}>
//         <UserAuth />
//       </Provider>
//     );

//     userEvent.type(screen.getByPlaceholderText("Email"), userValue.email);
//     userEvent.type(screen.getByPlaceholderText("Password"), userValue.password);
//     userEvent.click(screen.getByDisplayValue("Sign in"));
//   });
// });
