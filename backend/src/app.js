import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import morgan from "morgan";
import userRoute from "./routes/user.route.js";
import courseRoute from "./routes/course.route.js";
import paymentRoute from './routes/payment.route.js'
const app = express();

const allowedOrigins = [process.env.FRONTEND_URL];
app.use(cors({
  // origin: function (origin, callback) {
  //   if (!origin || allowedOrigins.indexOf(origin) !== -1) {
  //     callback(null, true);
  //   } else {
  //     callback(new Error('Not allowed by CORS'));
  //   }
  // },
  origin:allowedOrigins,
  credentials: true,
}));

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
