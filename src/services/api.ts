import axios from "axios";

export function setupApiClient(ctx = undefined) {
  const api = axios.create({
    baseURL: process.env.API_URL,
  });

  return api;
}
