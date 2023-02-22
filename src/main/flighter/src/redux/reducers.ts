import { SAVE_TOKEN } from "./actions";

const initialState = {};

export const tokenReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SAVE_TOKEN:
      return action.payload;
    default:
      return state;
  }
};
