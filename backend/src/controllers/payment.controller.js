import User from "../models/user.model.js";
import { razorpay } from "../server.js";
import crypto from "crypto";
import Payment from "../models/payment.model.js";

const getRazorpayApiKey = (req, res, next) => {
  try {
    return res.status(200).json({
      success: true,
      message: "Razorpay API KEy",
      data: process.env.RAZORPAY_KEY_ID,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

const buyScription = async (req, res, next) => {
  try {
    const id = req.user._id;
    const user = await User.findById(id);
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "Unauthorized please again",
      });
    }
    console.log(user)

    if (user.role === "ADMIN") {
      console.log("Admin")
      return res.status(500).json({
        success: false,
        message: "Admin cannot purchase a subscription",
        data: {},
      });
    }

    const subscription =  await razorpay.subscriptions.create({
      plan_id: process.env.RAZORPAY_PLAN_ID,
      customer_notify: 1,
      total_count: 12,
    });
    user.subscription.id = subscription.id;
    user.subscription.status = subscription.status;

    await user.save();
    return res.status(200).json({
      success: true,
      message: "Subscribed successfully",
      subscription_id: subscription.id,
    });
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "subscription failed by ",

    });
  }
};

const verifySubscription = async (req, res, next) => {
  try {
    const  id  =  req.user._id;

    console.log(id)
    const {
      razorpay_payment_id,
      razorpay_signature,
      razorpay_subscription_id,
    } = req.body;

    const user = await User.findById(id);

    if (!user) {
      return res.status(500).json({
        success: false,
        message: "please login user not found",
        data: {},
      });
    }

    console.log("Verify payment: ",user)

    const subscriptionId = user.subscription.id;

    const generatedSignature = crypto
      .createHmac("sha256", process.env.RAZORPAY_SECRET)
      .update(`${razorpay_payment_id}|${subscriptionId}`)
      .digest("hex");

    if (generatedSignature !== razorpay_signature) {
      return res.status(500).json({
        success: false,
        message: "Payment not verified please try again",
        data: {},
      });
    }

    await Payment.create({
      razorpay_payment_id,
      razorpay_subscription_id,
      razorpay_signature,
    });

    user.subscription.status = "active";
    await user.save();

    return res.status(200).json({
      success: true,
      message: "payment verified successfully",
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "verification failed",
      data: {},
    });
  }
};

const cancelScription = async (req, res, next) => {
  try {
    const { id } = req.user;

    const user = await User.findById(id);

    if (!user) {
      return res.status(500).json({
        success: false,
        message: "please login user not found",
        data: {},
      });
    }

    if (user.role === "ADMIN") {
      return res.status(500).json({
        success: false,
        message: "Admin cannot  cancel a subscription",
        data: {},
      });
    }

    const subscriptionId = await user.subscription.id;

    const subscription = await razorpay.subscriptions.cancel(subscriptionId);

    user.subscription.status = subscription.status;

    await user.save();
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
      data: {},
    });
  }
};

const allPayments = async (req, res, next) => {
  const { count, skip } = req.query;

  // Find all subscriptions from razorpay
  const allPayments = await razorpay.subscriptions.all({
    count: count ? count : 10, // If count is sent then use that else default to 10
    skip: skip ? skip : 0, // // If skip is sent then use that else default to 0
  });

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const finalMonths = {
    January: 0,
    February: 0,
    March: 0,
    April: 0,
    May: 0,
    June: 0,
    July: 0,
    August: 0,
    September: 0,
    October: 0,
    November: 0,
    December: 0,
  };

  const monthlyWisePayments = allPayments.items.map((payment) => {
    // We are using payment.start_at which is in unix time, so we are converting it to Human readable format using Date()
    const monthsInNumbers = new Date(payment.start_at * 1000);

    return monthNames[monthsInNumbers.getMonth()];
  });

  monthlyWisePayments.map((month) => {
    Object.keys(finalMonths).forEach((objMonth) => {
      if (month === objMonth) {
        finalMonths[month] += 1;
      }
    });
  });

  const monthlySalesRecord = [];

  Object.keys(finalMonths).forEach((monthName) => {
    monthlySalesRecord.push(finalMonths[monthName]);
  });

  res.status(200).json({
    success: true,
    message: "All payments",
    allPayments,
    finalMonths,
    monthlySalesRecord,
  });
};

export {
  getRazorpayApiKey,
  buyScription,
  verifySubscription,
  cancelScription,
  allPayments,
};
