import axios from "axios";

import {
  SAVE_PERMIT,
  GET_PERMITS,
  DELETE_PERMIT_BY_ID,
  SET_PERMIT,
  EDIT_PERMIT,
} from "./types";

export const savePermit = (permit) => (dispatch) => {
  axios
    .post(`/permisos/save_permits`, permit)
    .then((res) =>
      dispatch({
        type: SAVE_PERMIT,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error));
};

export const setPermit = (permit) => (dispatch) => {
  dispatch({
    type: SET_PERMIT,
    payload: permit,
  });
};

export const editPermit = (permit) => (dispatch) => {
  const url = `/permisos/update-permit`;
  axios
    .put(url, permit)
    .then((res) =>
      dispatch({
        type: EDIT_PERMIT,
        payload: res.data,
      })
    )
    .catch((error) => console.log(error));
};

export const getListPermits = () => (dispatch) => {
  const url = `/permisos/all-permits`;
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

export const deletePermitById = (permitId) => (dispatch) => {
  const url = `/permisos/delete-permit-by-id/${permitId}`;
  axios
    .put(url)
    .then((res) => {
      dispatch({
        type: DELETE_PERMIT_BY_ID,
        payload: res.data,
      });
    })
    .catch((error) => console.log(error));
};
