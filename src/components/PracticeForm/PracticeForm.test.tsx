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

    const searchInput = screen.getByPlaceholderText("name") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
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

    const searchInput = screen.getByPlaceholderText(
      "email"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
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

    const searchInput = screen.getByPlaceholderText("bio") as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
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

    const searchInput = screen.getByPlaceholderText(
      "dateOfBirth"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
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

    const searchInput = screen.getByPlaceholderText(
      "name hobby"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
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

    const searchInput = screen.getByPlaceholderText(
      "description hobby"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" } });
    expect(searchInput.value).toBe("test");
  });

  // it("submit user", () => {
  //   const mockSubmit = jest.fn();

  //   render(
  //     <Provider store={store}>
  //       <PracticeForm
  //         hobbyUpdate={hobbyUpdate}
  //         setHobbyUpdate={setHobbyUpdate}
  //       />
  //     </Provider>
  //   );

  //   fireEvent.change(screen.getByPlaceholderText("email"), {
  //     target: { value: "test" },
  //   });
  //   fireEvent.submit(screen.getByTestId("submit-user"));
  //   expect(setHobbyUpdate).toBeCalled();
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

    const searchInput = screen.getByPlaceholderText(
      "email"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "test" } });
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

    const searchInput = screen.getByPlaceholderText(
      "email"
    ) as HTMLInputElement;
    fireEvent.change(searchInput, { target: { value: "" } });
    fireEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(screen.getByText("Email is required")).toBeInTheDocument();
    });
  });
});
