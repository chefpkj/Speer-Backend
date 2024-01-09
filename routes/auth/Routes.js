import express from "express";
import jwtControls from "../../middleware/jwtControls.js";
import controller from "./Controller.js";
const router = express.Router();

router
  .route("/login")
  .get((req, res) => {
    return res.status(200).send("welcome to login page!!");
  })
  .post(controller.login);

router
  .route("/signup")
  .get((req, res) => {
    return res.status(200).send("this is signup routes!!");
  })
  .post(controller.signup);

export default router;
// localhost:4000/api/auth
