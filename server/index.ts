import express from "express";
import compression from "compression";
import { renderPage } from "vite-plugin-ssr";
import { createHmac } from "crypto";
import { config } from "dotenv";
import authrouter from "./api/authrouter";
import questionrouter from "./api/questionrouter";
import * as cookieParser from "cookie-parser";
const isProduction = process.env.NODE_ENV === "production";
const root = `${__dirname}/..`;

config();

startServer();

async function startServer() {
  const app = express();
  app.use(cookieParser.default());
  app.use(express.json());
  app.use(compression());

  if (isProduction) {
    const sirv = require("sirv");
    app.use(sirv(`${root}/dist/client`));
  } else {
    const vite = require("vite");
    const viteDevMiddleware = (
      await vite.createServer({
        root,
        server: { middlewareMode: true },
      })
    ).middlewares;
    app.use(viteDevMiddleware);
  }
  app.use("/auth", authrouter);
  app.use("/api", questionrouter);
  app.get("*", async (req, res, next) => {
    let userid: any = process.env.USER_NAME?.toString();
    let pass: any = process.env.USER_PASS?.toString();

    let hash = createHmac("sha256", userid).update(pass).digest("hex");

    const storedhash = req.cookies.gopassion;

    const pageContextInit = {
      urlOriginal: req.originalUrl,
      storedhash,
      hash,
    };
    const pageContext = await renderPage(pageContextInit);
    const { httpResponse } = pageContext;
    if (!httpResponse) return next();
    const { body, statusCode, contentType } = httpResponse;
    res.status(statusCode).type(contentType).send(body);
  });

  const port = process.env.PORT || 3000;
  app.listen(port);
  console.log(`Server running at http://localhost:${port}`);
}
