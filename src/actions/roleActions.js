import axios from "axios";

import { GET_ROLES } from "./types";

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
