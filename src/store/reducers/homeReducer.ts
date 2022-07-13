import {createSlice} from "@reduxjs/toolkit";

interface HomeState {
  usersBlock: HTMLElement | null,
  signUpBlock: HTMLElement | null,
  pages: number[],
  disabledUsersButton: boolean,
}

const initialState: HomeState = {
  usersBlock: null,
  signUpBlock: null,
  pages: [1],
  disabledUsersButton: false,
};

const homeSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    setUsersBlock(state, action) {
      state.usersBlock = action.payload;
    },
    setSignUpBlock(state, action) {
      state.signUpBlock = action.payload;
    },
    setPages(state, action) {
      state.pages = action.payload;
    },
    setDisabledUsersButton(state, action) {
      state.disabledUsersButton = action.payload;
    },
  },
});

export default homeSlice.reducer;
export const {
  setUsersBlock,
  setSignUpBlock,
  setPages,
  setDisabledUsersButton,
} = homeSlice.actions;