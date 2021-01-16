import axios from "axios";
import * as actionTypes from "./actionTypes";
require("dotenv").config();

var urlHeroku = "https://sosmetend.herokuapp.com/api/v1";

// Register User
export const registerUser = (userData, history) => (dispatch) => {
  axios
    .post(`${urlHeroku}/user`, userData)
    .then((res) => history.push("/login"))
    .catch((err) =>
      dispatch({
        type: actionTypes.GET_ERRORS,
        payload: err.response.data,
      })
    );
};
