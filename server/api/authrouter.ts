import { Router } from "express";
import { json } from "body-parser";
import { createHmac } from "crypto";

const authrouter = Router();
const jsonparser = json();

authrouter.post("/login", jsonparser, (req, res) => {
  try {
    console.log(req.body.id);
    console.log(req.body.pass);
    if (
      req.body.id === process.env.USER_NAME &&
      req.body.pass === process.env.USER_PASS
    ) {
      let userid: any = req.body.id;
      let pass: any = req.body.pass;
      let exp: any = process.env.LOG_LENGTH;
      let hash = createHmac("sha256", userid).update(pass).digest("hex");
      res
        .cookie("gopassion", `${hash}`, { maxAge: exp * 1 })
        .status(200)
        .json({
          status: "Success",
        });
    } else {
      res.status(400).json({
        status: "Failed to authenticate",
      });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Failed",
    });
  }
});

authrouter.get("/logout", (req, res) => {
  try {
    res.clearCookie("gopassion").status(200).json({
      status: "Success",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      status: "Failed",
    });
  }
});

export default authrouter;
