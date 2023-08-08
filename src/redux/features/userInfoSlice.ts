import { createSlice } from "@reduxjs/toolkit";

export type UserInfoType = {
  id: string;
  token: string;
};
const storedUserInfo = JSON.parse(
  localStorage.getItem("UserInfo")
) as UserInfoType;

const UserInfoSlice = createSlice({
  name: "UserInfo",
  initialState: storedUserInfo || null,
  reducers: {
    setUserInfo: (state, action: { payload: UserInfoType }) => {
      localStorage.setItem("UserInfo", JSON.stringify(action.payload));
      return action.payload;
    },
    clearUserInfo: () => {
      localStorage.removeItem("UserInfo");
      return null;
    },
    initializeUserInfo: () => storedUserInfo || null,
  },
});

export const { setUserInfo, clearUserInfo, initializeUserInfo } =
  UserInfoSlice.actions;
export default UserInfoSlice.reducer;
