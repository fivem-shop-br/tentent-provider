import axios from "axios";

export function setupApiClient(ctx = undefined) {
  const api = axios.create({
    baseURL: "http://localhost:3000",
  });

  return api;
}
