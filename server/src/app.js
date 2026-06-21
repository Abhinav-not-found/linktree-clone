import cookieParser from "cookie-parser";
import express from "express";
import morgan from "morgan";
import routes from "./routes/index.route.js";

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

// app.get("/", (_, res) => res.send("Hello World!"));

app.use("/api", routes);

// wild card end point
app.get("/*name", (_, res) => {
	res.sendFile("public/index.html", { root: process.cwd() });
});

export default app;
