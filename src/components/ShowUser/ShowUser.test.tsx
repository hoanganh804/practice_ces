import "@testing-library/jest-dom";
import { fireEvent, render, screen } from "@testing-library/react";
import moment from "moment";
import { Provider } from "react-redux";
import * as actions from "../../redux/slice/userSlice";
import store from "../../redux/store";
import ShowUser from "./index";

describe("Show User", () => {
  const dataUser1 = {
    name: "hoang anh",
    email: "anh@gmail.com",
    bio: "hoang anhhh",
    dateOfBirth: new Date(),
    hobbies: [{ name: "sport", value: "soccer", key: "32049-e0rdfwq4f7843r" }],
  };
  const dataUser2 = {
    name: "hoang anh2",
    email: "anh2@gmail.com",
    bio: "hoang anhhh2",
    dateOfBirth: new Date(),
    hobbies: [{ name: "food", value: "eggs", key: "32049-esadfasdfs" }],
  };

  const setHobbyUpdate = jest.fn();

  it("change props ShowUser", () => {
    const { rerender } = render(
      <Provider store={store}>
        <ShowUser dataUser={dataUser1} setHobbyUpdate={setHobbyUpdate} />
      </Provider>
    );
    expect(screen.getByTestId("name")).toHaveTextContent("Name: hoang anh");
    expect(screen.getByTestId("email")).toHaveTextContent(
      "Email: anh@gmail.com"
    );
    expect(screen.getByTestId("bio")).toHaveTextContent("Bio: hoang anhhh");
    expect(screen.getByTestId("dateOfBirth")).toHaveTextContent(
      `Date:${moment.utc(new Date()).format("DD/MM/YYYY")}`
    );
    expect(screen.getByTestId("hobby")).toHaveTextContent("sport: soccer");

    rerender(
      <Provider store={store}>
        <ShowUser dataUser={dataUser2} setHobbyUpdate={setHobbyUpdate} />
      </Provider>
    );
    expect(screen.getByTestId("name")).toHaveTextContent("Name: hoang anh2");
    expect(screen.getByTestId("email")).toHaveTextContent(
      "Email: anh2@gmail.com"
    );
    expect(screen.getByTestId("bio")).toHaveTextContent("Bio: hoang anhhh2");
    expect(screen.getByTestId("dateOfBirth")).toHaveTextContent(
      `Date:${moment.utc(new Date()).format("DD/MM/YYYY")}`
    );
    expect(screen.getByTestId("hobby")).toHaveTextContent("food: eggs");
  });

  it("function delete hobby should call", async () => {
    const deleteSpy = jest.spyOn(actions, "deleteHobby");
    render(
      <Provider store={store}>
        <ShowUser dataUser={dataUser1} setHobbyUpdate={setHobbyUpdate} />
      </Provider>
    );

    fireEvent.click(screen.getByText(/Delete/i));
    expect(deleteSpy).toHaveBeenCalled();
  });
});
