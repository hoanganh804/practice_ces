import moment from "moment";
import React, { Dispatch, SetStateAction } from "react";
import { useDispatch } from "react-redux";
import { deleteHobby, User } from "../../redux/slice/userSlice";
import { AppDispatch } from "../../redux/store";
import { Hobby } from "../PracticeForm/index";

interface Props {
  dataUser: User;
  setHobbyUpdate: Dispatch<SetStateAction<Hobby>>;
}

const ShowUser: React.FC<Props> = (props) => {
  const { dataUser, setHobbyUpdate } = props;
  const dispatch = useDispatch<AppDispatch>();
  const handleDeleteHobby = (key: string): void => {
    dispatch(deleteHobby(key));
  };

  return (
    <div>
      <div data-testid="name">Name: {dataUser.name}</div>
      <div data-testid="email">Email: {dataUser.email}</div>
      <div data-testid="bio">Bio: {dataUser.bio}</div>
      <div data-testid="dateOfBirth">
        Date:
        {dataUser.dateOfBirth && (
          <span>{moment.utc(dataUser.dateOfBirth).format("DD/MM/YYYY")}</span>
        )}
      </div>

      <span>List hobbies:</span>
      <div>
        {dataUser.hobbies.map((hobby) => {
          return (
            <div key={hobby.key}>
              <span data-testid="hobby">{`${hobby.name}: ${hobby.value}`}</span>
              <button
                type="button"
                style={{ height: "30px" }}
                onClick={() =>
                  setHobbyUpdate({
                    key: hobby.key,
                    name: hobby.name,
                    value: hobby.value,
                  })
                }
              >
                Update
              </button>
              <button
                type="button"
                style={{ height: "30px" }}
                onClick={() => handleDeleteHobby(hobby.key)}
              >
                Delete
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ShowUser;
