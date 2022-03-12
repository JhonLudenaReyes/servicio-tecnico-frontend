import axios from "axios";

import {
  SAVE_PERSON,
  GET_ALL_PEOPLE,
  DELETE_PERSON_BY_ID,
  SET_PERSON,
  EDIT_PERSON,
} from "./types";

export const savePerson = (Person) => (dispatch) => {
  axios
    .post(`/servicio-tecnico/web-service/api/personas/save`, Person)
    .then((res) =>
      dispatch({
        type: SAVE_PERSON,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const getPeopleActive = () => (dispatch) => {
  axios
    .get(`/servicio-tecnico/web-service/api/personas/people-active`)
    .then((res) =>
      dispatch({
        type: GET_ALL_PEOPLE,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

/*export const getPeopleActive = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `/servicio-tecnico/web-service/api/personas/people-active`
    );
    const result = await dispatch({
      type: GET_ALL_PEOPLE,
      payload: res.data,
    });
    console.log(result);
  } catch (error) {
    console.log(error);
  }
};*/

export const deletePersonById = (idPerson) => (dispatch) => {
  axios
    .put(
      `/servicio-tecnico/web-service/api/personas/delete-person-log/${idPerson}`
    )
    .then((res) =>
      dispatch({
        type: DELETE_PERSON_BY_ID,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};

export const setPerson = (person) => (dispatch) => {
  dispatch({
    type: SET_PERSON,
    payload: person,
  });
};

export const editPerson = (Person) => (dispatch) => {
  axios
    .put(`/servicio-tecnico/web-service/api/personas/update-person`, Person)
    .then((res) =>
      dispatch({
        type: EDIT_PERSON,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
