import axios from "axios";

import { GET_LOCATIONS } from "./types";

export const getLocations = () => (dispatch) => {
  axios
    .get(`/servicio-tecnico/web-service/api/localidades/lista`)
    .then((res) =>
      dispatch({
        type: GET_LOCATIONS,
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
