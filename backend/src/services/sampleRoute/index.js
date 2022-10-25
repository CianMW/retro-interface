import express from "express";
import authorizationMiddle from "../../middlewares/authorization.js";
import verifyTokenMiddle from "../../middlewares/verifyTokenMiddle.js";

// setup the express route
const sampleRoute = express.Router();

// set out each method for the route
sampleRoute
.get("/login", authorizationMiddle, async (req, res) => {
        try {
            const { email, password } = req.body;
            if (user) {
              const token = await jwtAuth(user);
              if (!token) {
                next(createHttpError(403));
              } else {
                res.cookie("token", token)
                res.status(200).send({ token })
              }
            } else {
              next(createHttpError(404, "User credentials error"));
            }
          } catch (error) {
            next(error);
          }
})

.put("/samplePut", verifyTokenMiddle, async (req, res) => {

    try {
        if (req.user) {
          res.send(req.user);
        } else {
          next(createHttpError(404, `Author with the name: ${user.name} not found!`));
        }
      } catch (error) {
        next(error);
      }
})




export default sampleRoute;