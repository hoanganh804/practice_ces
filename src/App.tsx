import React, { useState } from "react";
import { Provider, useSelector } from "react-redux";
import "./App.css";
import PracticeForm, { Hobby } from "./components/PracticeForm";
import ShowUser from "./components/ShowUser";
import store, { RootState } from "./redux/store";

const App: React.FC = () => {
  const dataUser = useSelector((state: RootState) => state.user);
  const [hobbyUpdate, setHobbyUpdate] = useState<Hobby>({
    name: "",
    value: "",
    key: "",
  });

  return (
    <div
      className="App"
      style={{
        backgroundColor: "#554994",
        height: "100vh",
        paddingTop: "100px",
      }}
    >
      <div
        style={{
          width: "600px",
          margin: "auto",
          padding: "30px",
          backgroundColor: "rgb(246, 117, 168, 0.2)",
        }}
      >
        <PracticeForm
          hobbyUpdate={hobbyUpdate}
          setHobbyUpdate={setHobbyUpdate}
        />
        <ShowUser dataUser={dataUser} setHobbyUpdate={setHobbyUpdate} />
      </div>
    </div>
  );
};

export default App;
