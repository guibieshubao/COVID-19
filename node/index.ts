import express, { Express, Router, Request, Response } from "express";
import axios from "axios";
const app: Express = express();
app.use("*", (req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); //跨域问题---》！！！！！
  next();
});
const router: Router = express.Router();

app.use("/api", router);

// 接口：中国疫情
router.get("/list", async (req: Request, res: Response) => {
  const result = await axios.post(
    "https://api.inews.qq.com/newsqa/v1/query/inner/publish/modules/list?modules=statisGradeCityDetail,diseaseh5Shelf"
  );
  res.json({
    // data:result.data
    ...result.data.data, //结构一下data
  });
});

// 接口二：广东疫情
router.get("/list1", async (req: Request, res: Response) => {
  const result = await axios.post(
    "https://api.inews.qq.com/newsqa/v1/query/pubished/daily/list?adCode=440000&limit=30"
  );
  res.json({
    // data:result.data
    ...result.data.data, //结构一下data
  });
});

// 接口三：国外疫情
router.get("/list2", async (req: Request, res: Response) => {
  const result = await axios.post(
    "https://api.inews.qq.com/newsqa/v1/automation/modules/list?modules=FAutoCountryConfirmAdd,WomWorld,WomAboard"
  );
  res.json({
    // data:result.data
    ...result.data.data, //结构一下data
  });
});

app.listen(3333, () => {
  console.log("success server http://localhost:3333");
});
