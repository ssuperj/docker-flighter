import { SAVE_TOKEN, SAVE_USER } from "./actions";

const initialState = {};

export const tokenReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return action.payload;
    default:
      return state;
  }
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_USER:
      return action.payload;
    default:
      return state;
  }
};
