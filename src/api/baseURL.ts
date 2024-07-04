import axios from "axios";

// Create an axios instance
export const bharatStay = axios.create({
  baseURL: "https://api.pripgo.com",
});

// instance of kernel
export const kernelAPI = axios.create({
  baseURL: "https://kernel.bookingjini.com",
});
