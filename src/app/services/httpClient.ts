import axios from "axios";

export const httpClient = axios.create({
  baseURL: "https://3cyf25zzel.execute-api.us-east-1.amazonaws.com",
});
