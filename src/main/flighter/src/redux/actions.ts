export const SAVE_TOKEN = "SAVE_TOKEN";

export const saveToken = (token: string) => ({
  type: SAVE_TOKEN,
  payload: token,
});
