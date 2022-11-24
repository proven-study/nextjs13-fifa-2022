import { NextApiRequest, NextApiResponse } from "next";
const httpProxyMiddleware = require("next-http-proxy-middleware");

// pages/api/[...all].ts
export const config = {
  api: {
    // Enable `externalResolver` option in Next.js
    externalResolver: true,
  },
};

const appApi = (req: NextApiRequest, res: NextApiResponse) =>
  // isDevelopment
  //   ? 
    httpProxyMiddleware(req, res, {
        // You can use the `http-proxy` option
        target: "http://api.cup2022.ir",
        // In addition, you can use the `pathRewrite` option provided by `next-http-proxy-middleware`
        pathRewrite: [
          {
            patternStr: "^/api/v1",
            replaceStr: "/server",
          },
          {
            patternStr: "^/api",
            replaceStr: "",
          },
        ],
      })
    // : res.status(404).send(null);

export default appApi;
