import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { v4 as uuid } from "uuid";
import { Hobby, UserInputs } from "./../../components/PracticeForm/index";

export const addUser = createAsyncThunk(
  "user/addUser",
  async (data: UserInputs) => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        const newData = {
          ...data,
        };
        newData.hobbies.key = uuid();
        console.log(newData);

        resolve(newData);
      }, 1000);
    });
    return response;
  }
);

export const deleteHobby = createAsyncThunk(
  "user/deleteHobby",
  async (key: string) => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(key);
      }, 1000);
    });
    return response;
  }
);

export const updateHobby = createAsyncThunk(
  "user/updateHobby",
  async (data: Hobby) => {
    const response = await new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    });
    return response;
  }
);

export type User = {
  name: string;
  email: string;
  bio: string;
  dateOfBirth: Date;
  hobbies: Hobby[];
};

const initialState: User = {
  name: "",
  email: "",
  bio: "",
  dateOfBirth: new Date(),
  hobbies: [],
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: {
    [addUser.fulfilled.type]: (state, action) => {
      if (action.payload.hobbies.name) {
        return {
          ...action.payload,
          hobbies: [...state.hobbies, action.payload.hobbies],
        };
      }
      return { ...state, ...action.payload, hobbies: state.hobbies };
    },
    [deleteHobby.fulfilled.type]: (state, action) => {
      const newDataUser = {
        ...state,
        hobbies: state.hobbies.filter((hobby) => hobby.key !== action.payload),
      };
      return newDataUser;
    },
    [updateHobby.fulfilled.type]: (state, action) => {
      const objIndex = state.hobbies.findIndex(
        (hobby) => hobby.key === action.payload.key
      );
      state.hobbies[objIndex].name = action.payload.name;
      state.hobbies[objIndex].value = action.payload.value;
    },
  },
});

export const {} = userSlice.actions;

export default userSlice.reducer;
