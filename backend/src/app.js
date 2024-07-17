import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
const app = express();

app.use(express.json());

const corsOptions = {
  origin: 'https://learn-hub-v1.vercel.app',  // Specific origin
  credentials: true  // Allow credentials (cookies, authorization headers, etc.)
};

app.use(cors(corsOptions));

// Ensure the headers are set for all responses
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://learn-hub-v1.vercel.app');  // Specific origin
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Methods', 'GET,HEAD,OPTIONS,POST,PUT');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  next();
});

app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev"));

//user  routes
app.use("/api/v1/user", userRoute);

// courses routes

app.use("/api/v1/courses", courseRoute);

app.all("*", (req, res) => {
  res.status(404).send("oops ! 404 not found");
});

export { app };
