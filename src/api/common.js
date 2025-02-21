import request from "./request";

const userApi = {
  Login: "/auth/login",
  Logout: "/auth/logout",
};

export function login(parameter) {
  return request({
    url: userApi.Login,
    method: "post",
    data: parameter,
  });
}

export function getSmsCaptcha(parameter) {
  return request({
    url: userApi.SendSms,
    method: "post",
    data: parameter,
  });
}
