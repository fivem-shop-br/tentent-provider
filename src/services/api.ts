import axios from "axios";

export function setupApiClient(ctx = undefined) {
  const api = axios.create({
    baseURL: "https://api.fivem.website",
  });

  return api;
}
