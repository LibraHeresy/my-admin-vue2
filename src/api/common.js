import request from "./request";

const userApi = {
  Login: "/auth/login",
  Logout: "/auth/logout",
  GetWorkbenchesData: "/api/workbenches/getData",
};

export function login(parameter) {
  return request({
    url: userApi.Login,
    method: "post",
    data: parameter,
  });
}

export function getWorkbenchesData(parameter) {
  return request({
    url: userApi.GetWorkbenchesData,
    method: "get",
    data: parameter,
  });
}
