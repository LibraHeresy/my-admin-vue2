import request from "./request";

const userApi = {
  // 获取工作台数据
  GetWorkbenchData: "/api/workbench/getData",
};

export function getWorkbenchData(parameter) {
  return request({
    url: userApi.GetWorkbenchData,
    method: "get",
    data: parameter,
  });
}
