import { config } from 'dotenv';
config();
import Razorpay from 'razorpay';
import { app } from './app.js'; // Assuming `app` is exported correctly from `app.js`
import connectDB from './db/index.js';

const PORT = process.env.PORT || 8000

export const razorpay = new Razorpay({
  key_id:process.env.RAZORPAY_KEY_ID,
  key_secret:process.env.RAZORPAY_SECRET
})

connectDB()
  .then(() => {
    app.listen(PORT, () => {
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

export { app }; 
