import { createAction } from "@reduxjs/toolkit";
export const SAVE_TOKEN = "SAVE_TOKEN";
export const SAVE_USER = "SAVE_USER";

export const saveToken = (token: string) => ({
  type: SAVE_TOKEN,
  payload: token,
});

export const saveUser = (user: string) => ({
  type: SAVE_USER,
  payload: user,
});

export const register = createAction("persist/REGISTER", (key) => {
  return {
    payload: {
      key,
    },
  };
});
