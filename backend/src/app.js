import express from "express";
import cors from 'cors'
import cookieParser from "cookie-parser";
import morgan from "morgan";
import userRoute from './routes/user.route.js'
import courseRoute from './routes/course.route.js'
const app = express();

app.use(express.json());

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    Credential: true,
  })
);
app.use(express.urlencoded({ extended: true, limit: "20kb" }));
app.use(express.static("public"));
app.use(cookieParser());
app.use(morgan("dev"));

//user  routes
app.use('/api/v1/user', userRoute)


// courses routes

app.use('/api/v1/courses' , courseRoute)

app.all("*", (req, res) => {
  res.status(404).send("oops ! 404 not found");
});

export { app };
