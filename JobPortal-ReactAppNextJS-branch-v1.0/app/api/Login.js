// api.js

import axios from "axios";

var host="", port=8000;
if (typeof window !== 'undefined') {
    var protocol = window.location.protocol;
    var hostname = window.location.hostname;
    host = protocol + "//" + hostname;
}

host= host+":"+port;

// API call for Login
export const loginUser = async (loginData) => {
  console.log("Cool", loginData);
  try {
    // Create a FormData object
    const formData = new FormData();
    formData.append("username", loginData.username);
    formData.append("password", loginData.password);

    // Make the POST request with form data
    const response = await axios.post(host+"/users/login", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Ensure correct content type for form data
      },
    });

    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : "Login failed");
  }
};

// API call for Register
export const registerUser = async (registerData) => {
  try {
    const response = await axios.post(host+"/users", registerData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : "Registration failed");
  }
};

// API call for Forgot Password
export const forgotPassword = async (forgotData) => {
    console.log("Good", forgotData);
  try {
    const response = await axios.post(host+"/api/forgot-password", forgotData);
    return response.data;
  } catch (error) {
    throw new Error(error.response ? error.response.data : "Forgot password failed");
  }
};
