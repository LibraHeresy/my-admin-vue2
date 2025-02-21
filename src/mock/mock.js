import Mock from "mockjs";

Mock.mock("/api/workbenches/getData", "get", {
  code: 200,
  message: "成功",
  data: Mock.mock({
    "totalSales|200000-2000000": 1,
    "todaySales|10000-100000": 1,
    "totalVisitors|100000-1000000": 1,
    "todayVisitors|10000-100000": 1,
    "totalOrders|10000000-100000000": 1,
    "todayOrders|10000-100000": 1,
    "totalProgress|70-100": 1,
    "todayProcess|10-20": 1,
  }),
});
