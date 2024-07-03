import { config } from 'dotenv';
config();
import { app } from './app.js'; // Assuming `app` is exported correctly from `app.js`
import connectDB from './db/index.js';

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
    app.on("error", (error) => {
      console.error("Server error:", error);
      throw error;
    });
  })
  .catch((err) => {
    console.error("MONGODB db connection failed!!", err);
  });

export { app }; // Exporting `app` for Vercel serverless function
