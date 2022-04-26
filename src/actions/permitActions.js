import axios from "axios";

import { SAVE_PERMIT, GET_PERMITS } from "./types";

export const savePermit = (permit) => (dispatch) => {
  axios
    .post(`/servicio-tecnico/web-service/api/permisos/save_permits`, permit)
    .then((res) =>
      dispatch({
        type: SAVE_PERMIT,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error));
};

export const getListPermits = () => (dispatch) => {
  const url = `/servicio-tecnico/web-service/api/permisos/all-permits`;
  axios
    .get(url)
    .then((res) => {
      dispatch({
        type: GET_PERMITS,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};