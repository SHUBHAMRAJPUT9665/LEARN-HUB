import { Router } from "express";
import {
  getRazorpayApiKey,
  buyScription,
  verifySubscription,
  cancelScription,
  allPayments,
} from "../controllers/payment.controller.js";

import { isLoggedIn,authorizedRoles } from "../middleware/auth.middleware.js";

const router = Router();

router.route("/razorpay-key").get(isLoggedIn,getRazorpayApiKey);

router.route("/subscribe").post(isLoggedIn,buyScription);

router.route("/verify").post(isLoggedIn,verifySubscription);

router.route("/unsubscribe").post(isLoggedIn,cancelScription);

router.route("/").get(isLoggedIn,authorizedRoles,allPayments);

export default router;
