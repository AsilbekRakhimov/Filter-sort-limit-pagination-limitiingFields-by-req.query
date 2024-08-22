import express from "express";
import appConfig from "./config/app.config.js";
import { mongo } from "./db/mongo.db.js";
import router from "./routes/index.routes.js";
import { ErrorHandlerMIddleware } from "./middleware/error.handler.middleware.js";

const app = express();
app.use(express.json());
await mongo();

app.use("/api/v1", router);

app.use(ErrorHandlerMIddleware);

app.use("*", (_, res) => {
    res.status(404).send({
        message:"Url is not found"
    })
})

app.listen(appConfig.port, appConfig.host, () => {
  console.log(`Server is running on port: ${appConfig.port}`);
});
