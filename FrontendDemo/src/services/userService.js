import axiosInstance from "../constants/BaseUrl";

// User registration service
export const registerUser = async (userData) => {
  try {
    const response = await axiosInstance.post("/register", userData);
    return response.data; // return server response
  } catch (error) {
    // Handle and rethrow error properly
    if (error.response) {
      // Server responded with a status other than 2xx
      throw new Error(error.response.data.message || "Registration failed.");
    } else if (error.request) {
      // Request was made but no response received
      throw new Error("No response from server. Please try again later.");
    } else {
      // Something else went wrong
      throw new Error("An error occurred during registration.");
    }
  }
};
