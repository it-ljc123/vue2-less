/*
Description: axios 请求封装
Author : 
Date: 2023-3-22
 */
import axios from "axios";
const uuid = require("./uuid");
import { Message } from "element-ui";
const http = axios.create({
  timeout: 1000 * 30,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
  baseURL: process.env.BASE_URL,
});
/**
 * 请求拦截
 */
http.interceptors.request.use(
  (config) => {
    var requestId = uuid.v4();
    config.headers["token"] = 111;
    config.headers["x-request-id"] = requestId; // 请求头带上requestId
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

/**
 * 响应拦截
 */
http.interceptors.response.use(
  (response) => {
    console.log(response);
    return response;
  },
  (error) => {
    if (error.response?.status == 401) {
      return;
    }
    Message.error("服务器升级中");
    return Promise.reject(error);
  }
);

export default http;
