import axios from "axios";

const API = axios.create({
  baseURL: "https://your-app.up.railway.app",
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
