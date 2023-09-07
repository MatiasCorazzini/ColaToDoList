import express from "express";
import morgan from "morgan";
import testRoutes from "./routes/test.routes.js";

const app = express();

app.use(morgan("dev"));
app.use(testRoutes)

export default app;
