import React from "react";
import { render, fireEvent, cleanup, screen } from "@testing-library/react";
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

  it("submit user", () => {
    render(
      <Provider store={store}>
        <PracticeForm
          hobbyUpdate={hobbyUpdate}
          setHobbyUpdate={setHobbyUpdate}
        />
      </Provider>
    );

    const searchInput = screen.getByTestId("submit-user") as HTMLInputElement;
    fireEvent.click(searchInput);
    expect(searchInput.).toEqual("test");
  });
});
