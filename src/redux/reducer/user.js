import { SET_INFOR } from "../constant/user";

let userJson = localStorage.getItem("USER");
let user = JSON.parse(userJson);
const initialState = {
  info: user,
};

export let userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_INFOR:
      return { ...state, info: payload };

    default:
      return state;
  }
};
