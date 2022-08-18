import { DatePicker } from "antd";
import React, { Dispatch, SetStateAction, useEffect } from "react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { addUser, updateHobby } from "../../redux/slice/userSlice";
import { AppDispatch } from "../../redux/store";

export type UserInputs = {
  name: string;
  email: string;
  bio: string;
  dateOfBirth: Date;
  hobbies: Hobby[];
};
export type Hobby = {
  name: string;
  value: string;
  key: string;
};

interface Props {
  hobbyUpdate: Hobby;
  setHobbyUpdate: Dispatch<SetStateAction<Hobby>>;
}

const PracticeForm: React.FC<Props> = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
  } = useForm<UserInputs>();
  const dispatch = useDispatch<AppDispatch>();
  const { hobbyUpdate, setHobbyUpdate } = props;

  const onSubmitUser: SubmitHandler<UserInputs> = (data) => {
    if (!hobbyUpdate.key) {
      dispatch(addUser(data));
      setValue(`hobbies.${0}.name`, "");
      setValue(`hobbies.${0}.value`, "");
    } else {
      dispatch(updateHobby({ ...data.hobbies[0], key: hobbyUpdate.key }));
      setHobbyUpdate({
        name: "",
        value: "",
        key: "",
      });
      setValue(`hobbies.${0}.name`, "");
      setValue(`hobbies.${0}.value`, "");
    }
  };

  useEffect(() => {
    if (hobbyUpdate.name) {
      setValue(`hobbies.${0}.name`, hobbyUpdate.name);
    }
    if (hobbyUpdate.value) {
      setValue(`hobbies.${0}.value`, hobbyUpdate.value);
    }
  }, [hobbyUpdate.name, hobbyUpdate.value, setValue]);

  return (
    <form onSubmit={handleSubmit(onSubmitUser)}>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <input {...register("name", { required: true })} placeholder="name" />
        {errors.name && <span>Name is required</span>}
        <input
          placeholder="email"
          {...register("email", {
            required: true,
            pattern: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/,
          })}
        />
        {errors.email && <span>Invalid email</span>}
        <input {...register("bio")} placeholder="bio" />
        <Controller
          control={control}
          name="dateOfBirth"
          render={({ field }) => (
            <DatePicker
              placeholder="date"
              onChange={(e) => {
                field.onChange(e);
              }}
            />
          )}
        />

        <input {...register(`hobbies.${0}.name`)} placeholder="name hobby" />
        <input
          {...register(`hobbies.${0}.value`)}
          placeholder="description hobby"
        />

        <button type="submit">{hobbyUpdate.key ? "Update" : "Submit"}</button>
      </div>
    </form>
  );
};

export default PracticeForm;
