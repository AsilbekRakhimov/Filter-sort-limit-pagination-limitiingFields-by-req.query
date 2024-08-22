import express from "express";
import appConfig from "./config/app.config.js";
import { mongo } from "./db/mongo.db.js";
import router from "./routes/index.routes.js";
import { ErrorHandlerMIddleware } from "./middleware/error.handler.middleware.js";

// use express
const app = express();
app.use(express.json());
// use express

// connect to mongo
await mongo();
// connect to mongo

// end point
app.use("/api/v1", router);
// end point

// catch errors
app.use(ErrorHandlerMIddleware);
// catch errors

// res for wrong url
app.use("*", (_, res) => {
    res.status(404).send({
        message:"Url is not found"
    })
})
// res for wrong url

// listen and run server
app.listen(appConfig.port, appConfig.host, () => {
  console.log(`Server is running on port: ${appConfig.port}`);
});
// listen and run server

