import axios from "axios";

const API = axios.create({
  baseURL: "https://outstanding-grace-production-9f84.up.railway.app/",
});
export const generateKey = () => {
  return "key-" + Date.now() + "-" + Math.random();
};

export const createExpense = (data, key) => {
  return API.post("/expenses", data, {
    headers: {
      "Idempotency-Key": key,
    },
  });
};

export const getExpenses = (params) => {
  return API.get("/expenses", { params });
};
