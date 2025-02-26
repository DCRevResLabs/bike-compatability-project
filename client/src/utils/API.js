import axios from "axios";
import { saveAuthorisation, isAuthorised, logout } from "./auth";

export default {
  // Gets all components
  getComponents: function (search) {
    return axios.get(`/api/components${search ? "?" + search : ""}`);
  },
  // Gets the component with the given id
  getComponent: function (id) {
    console.log(id);
    return axios.get("/api/components/" + id);
  },
  // Deletes the component with the given id
  deleteComponent: function (id) {
    return axios.delete("/api/components/" + id);
  },
  // Saves a component to the database
  saveComponent: function (componentData) {
    return axios.post("/api/components", componentData);
  },
  updateComponent: function (componentData) {
    return axios.put("/api/components", componentData);
  },
  loginAPI: async function (data) {
    const response = await axios.post("/api/login", data);
    saveAuthorisation(response.data.data.token);
    return response;
  },
  registerAPI: async function (data) {
    const response = await axios.post("/api/signup", data);
    saveAuthorisation(response.data.data.token);
    return response;
  },
  getUser: function () {
    return axios.get("/api/me", {
      headers: {
        authorization: "Bearer " + isAuthorised(),
      },
    });
  },
  getUserBasedOnToken: function (token) {
    return axios.get("/api/me", {
      headers: {
        Authorization: "Bearer " + token,
        "Content-Type": "application/json",
      },
    });
  },
  logoutAPI: async function () {
    logout();
    return;
  },
};
