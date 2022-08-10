import axios from "axios";

import { GET_ROLES, SAVE_ROLE } from "./types";

export const getRoles = () => (dispatch) => {
  axios
    .get(`/roles/get-roles`)
    .then((res) =>
      dispatch({
        type: GET_ROLES,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error));
};

export const saveRole = (Role) => (dispatch) => {
  axios
    .post(`/roles/save`, Role)
    .then((res) =>
      dispatch({
        type: SAVE_ROLE,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error));
};
