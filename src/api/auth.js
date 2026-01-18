// import api from "./api";

// export const login = (email, password) => {
//   return api.post("/login", {
//     national_id,
//     password,
//   });
// };
const API_BASE_URL = "https://darksalmon-anteater-608881.hostingersite.com/api";

export const authFetch = async (url, options = {}) => {
  const token = localStorage.getItem("token");

  const response = await fetch(`${API_BASE_URL}${url}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
      ...options.headers,
    },
  });

  return response;
};
