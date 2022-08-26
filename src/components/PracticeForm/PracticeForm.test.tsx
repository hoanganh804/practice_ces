import React from "react";
import {
  render,
  fireEvent,
  cleanup,
  screen,
  act,
  waitFor,
  findByText,
} from "@testing-library/react";
import PracticeForm from "./index";
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import store from "../../redux/store";
import * as actions from "../../redux/slice/userSlice";

afterEach(cleanup);

describe("form user", () => {
  const hobbyUpdate = {
    name: "",
    value: "",
    key: "",
  };

  const setHobbyUpdate = jest.fn();

  it("input name", () => {
    render(
      <Provider store={store}>
        <PracticeForm
          hobbyUpdate={hobbyUpdate}
          setHobbyUpdate={setHobbyUpdate}
        />
      </Provider>
    );

    const input = screen.getByPlaceholderText("name") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("input email", () => {
    render(
      <Provider store={store}>
        <PracticeForm
          hobbyUpdate={hobbyUpdate}
          setHobbyUpdate={setHobbyUpdate}
        />
      </Provider>
    );

    const input = screen.getByPlaceholderText("email") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("input bio", () => {
    render(
      <Provider store={store}>
        <PracticeForm
          hobbyUpdate={hobbyUpdate}
          setHobbyUpdate={setHobbyUpdate}
        />
      </Provider>
    );

    const input = screen.getByPlaceholderText("bio") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("input date of birth", () => {
    render(
      <Provider store={store}>
        <PracticeForm
          hobbyUpdate={hobbyUpdate}
          setHobbyUpdate={setHobbyUpdate}
        />
      </Provider>
    );

    const input = screen.getByPlaceholderText(
      "dateOfBirth"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("input name hobby", () => {
    render(
      <Provider store={store}>
        <PracticeForm
          hobbyUpdate={hobbyUpdate}
          setHobbyUpdate={setHobbyUpdate}
        />
      </Provider>
    );

    const input = screen.getByPlaceholderText("name hobby") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("input description hobby", () => {
    render(
      <Provider store={store}>
        <PracticeForm
          hobbyUpdate={hobbyUpdate}
          setHobbyUpdate={setHobbyUpdate}
        />
      </Provider>
    );

    const input = screen.getByPlaceholderText(
      "description hobby"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  // it("add user should be success", async () => {
  //   const addSpy = jest.spyOn(actions, "addUser");
  //   render(
  //     <Provider store={store}>
  //       <PracticeForm
  //         hobbyUpdate={hobbyUpdate}
  //         setHobbyUpdate={setHobbyUpdate}
  //       />
  //     </Provider>
  //   );

  //   fireEvent.change(screen.getByPlaceholderText("email"), {
  //     target: { value: "anh@gmail.com" },
  //   });
  //   fireEvent.change(screen.getByPlaceholderText("name"), {
  //     target: { value: "123" },
  //   });
  //   fireEvent.click(screen.getByText(/Submit/i));

  //   expect(addSpy).toHaveBeenCalled();
  // });
});

describe("validate user", () => {
  const hobbyUpdate = {
    name: "",
    value: "",
    key: "",
  };

  const setHobbyUpdate = jest.fn();

  it("validation user name should be required", async () => {
    render(
      <Provider store={store}>
        <PracticeForm
          hobbyUpdate={hobbyUpdate}
          setHobbyUpdate={setHobbyUpdate}
        />
      </Provider>
    );

    fireEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeInTheDocument();
    });
  });

  it("validation email should be invalid", async () => {
    render(
      <Provider store={store}>
        <PracticeForm
          hobbyUpdate={hobbyUpdate}
          setHobbyUpdate={setHobbyUpdate}
        />
      </Provider>
    );

    const input = screen.getByPlaceholderText("email") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(screen.getByText("Email is invalid")).toBeInTheDocument();
    });
  });

  it("validation email should be required", async () => {
    render(
      <Provider store={store}>
        <PracticeForm
          hobbyUpdate={hobbyUpdate}
          setHobbyUpdate={setHobbyUpdate}
        />
      </Provider>
    );

    const input = screen.getByPlaceholderText("email") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(screen.getByText("Email is required")).toBeInTheDocument();
    });
  });
});

// describe("update user", () => {
//   it("function update hobby should call", async () => {
//     const updateSpy = jest.spyOn(actions, "updateHobby");
//     const hobbyUpdate = {
//       name: "123sadas",
//       value: "123dasdasdas",
//       key: "123dasdasdasdas-da-sd-as",
//     };
//     const setHobbyUpdate = jest.fn();
//     render(
//       <Provider store={store}>
//         <PracticeForm
//           hobbyUpdate={hobbyUpdate}
//           setHobbyUpdate={setHobbyUpdate}
//         />
//       </Provider>
//     );

//     fireEvent.click(screen.getByText(/UpdateUser/i));
//     expect(updateSpy).toHaveBeenCalled();
//   });
// });
