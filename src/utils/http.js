import axios from "axios";
import store from "../store";
import router from "../router";

export const http = axios.create({
  // prod -> url
  // dev  -> url
  baseURL: "/api",
});

// /api/login

// 请求拦截
// koa-jwt -> config.headers

http.interceptors.request.use((config) => {
  const token = store.state.token;
  if (token) {
    config.headers.authorization = "Bearer " + token;
  }

  return config;
});

http.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    console.log(err.response);
    // 处理一些通用的 错误处理逻辑的
    if (err.response.status === 401) {
      router.replace({
        name: "Login",
      });
    }
  }
);