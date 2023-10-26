import axios from "axios";
import { store } from "../index";
import {
  turnOnLoadingAction,
  turnOffLoadingAction,
} from "../redux/action/spinner";

const TOKEN_CYBERSOFT =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA1NiIsIkhldEhhblN0cmluZyI6IjAzLzA0LzIwMjQiLCJIZXRIYW5UaW1lIjoiMTcxMjEwMjQwMDAwMCIsIm5iZiI6MTY4MzMwNjAwMCwiZXhwIjoxNzEyMjUwMDAwfQ.YeDhc_oSixV2XtFPDzcpxFhBos5832JpQpndHNoqZLk";

export let https = axios.create({
  baseURL: "https://movienew.cybersoft.edu.vn",
  headers: {
    TokenCybersoft: TOKEN_CYBERSOFT,
  },
});

// Axios interceptors

https.interceptors.request.use(
  function (config) {
    console.log("api đi");
    store.dispatch(turnOnLoadingAction());
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

https.interceptors.response.use(
  function (response) {
    console.log("api về");
    store.dispatch(turnOffLoadingAction());
    return response;
  },
  function (error) {
    return Promise.reject(error);
  }
);
