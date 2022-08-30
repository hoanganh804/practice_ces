import "@testing-library/jest-dom";
import {
  cleanup,
  fireEvent,
  render,
  screen,
  waitFor,
} from "@testing-library/react";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import * as actions from "../../redux/slice/userSlice";
import PracticeForm, { Hobby } from "./index";

afterEach(cleanup);

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
const store = mockStore({});

const renderPracticeForm = (): void => {
  const setHobbyUpdate = jest.fn();
  const hobbyUpdate = {
    name: "",
    value: "",
    key: "",
  };
  render(
    <Provider store={store}>
      <PracticeForm hobbyUpdate={hobbyUpdate} setHobbyUpdate={setHobbyUpdate} />
    </Provider>
  );
};

describe("form user", () => {
  it("input name", () => {
    renderPracticeForm();

    const input = screen.getByPlaceholderText("name") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("input email", () => {
    renderPracticeForm();

    const input = screen.getByPlaceholderText("email") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("input bio", () => {
    renderPracticeForm();

    const input = screen.getByPlaceholderText("bio") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("input date of birth", () => {
    renderPracticeForm();

    const input = screen.getByPlaceholderText(
      "dateOfBirth"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("input name hobby", () => {
    renderPracticeForm();

    const input = screen.getByPlaceholderText("name hobby") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("input description hobby", () => {
    renderPracticeForm();

    const input = screen.getByPlaceholderText(
      "description hobby"
    ) as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    expect(input.value).toBe("test");
  });

  it("add user data should be call true data", async () => {
    const addSpy = jest.spyOn(actions, "addUser");
    renderPracticeForm();

    fireEvent.change(screen.getByPlaceholderText("email"), {
      target: { value: "anh@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("name"), {
      target: { value: "123" },
    });
    fireEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(addSpy).toHaveBeenCalled();
    });

    await waitFor(() => {
      expect(addSpy).toHaveBeenCalledWith({
        bio: "",
        dateOfBirth: undefined,
        email: "anh@gmail.com",
        name: "123",
        hobbies: {
          key: "",
          name: "",
          value: "",
        },
      });
    });
  });
});

describe("validate user", () => {
  it("validation user name should be required", async () => {
    renderPracticeForm();

    fireEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(screen.getByText("Name is required")).toBeInTheDocument();
    });
  });

  it("validation email should be invalid", async () => {
    renderPracticeForm();

    const input = screen.getByPlaceholderText("email") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "test" } });
    fireEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(screen.getByText("Email is invalid")).toBeInTheDocument();
    });
  });

  it("validation email should be required", async () => {
    renderPracticeForm();

    const input = screen.getByPlaceholderText("email") as HTMLInputElement;
    fireEvent.change(input, { target: { value: "" } });
    fireEvent.click(screen.getByText(/Submit/i));

    await waitFor(() => {
      expect(screen.getByText("Email is required")).toBeInTheDocument();
    });
  });
});

describe("update user", () => {
  it("function update hobby should call", async () => {
    const updateSpy = jest.spyOn(actions, "updateHobby");
    const hobbyUpdate1: Hobby = {
      name: "test",
      value: "test",
      key: "test-da-sd-as",
    };
    const setHobbyUpdate = jest.fn();
    render(
      <Provider store={store}>
        <PracticeForm
          hobbyUpdate={hobbyUpdate1}
          setHobbyUpdate={setHobbyUpdate}
        />
      </Provider>
    );
    fireEvent.change(screen.getByPlaceholderText("email"), {
      target: { value: "anh@gmail.com" },
    });
    fireEvent.change(screen.getByPlaceholderText("name"), {
      target: { value: "123" },
    });

    fireEvent.click(screen.getByText(/UpdateUser/i));

    await waitFor(() => {
      expect(updateSpy).toHaveBeenCalled();
    });
  });
});
