import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
import paymentRoute from './routes/payment.route.js'
const app = express();

const allowedOrigins = [process.env.FRONTEND_URL];
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://learn-hub-v1.vercel.app');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.set("trust proxy", 1);
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(morgan("dev"));

//user  routes
app.use("/api/v1/user", userRoute);


app.use("/api/v1/courses", courseRoute);
app.use("/api/v1/payments", paymentRoute );


app.all("*", (req, res) => {
  res.status(404).send("oops ! 404 not found");
});

export { app };
