import { Router } from "express";
import {
  register,
  getProfile,
  logout,
  login,
  forgotPassword,
  resetPassword,
  changePassword,
  getUser,
  updateUser
} from "../controllers/user.controller.js";
import { isLoggedIn } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";
const router = Router();

router.route("/register").post(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  register
);
router.route("/login").post(login);
router.route("/logout").post(logout);
router.route("/profile").post(isLoggedIn, getProfile);
router.route("/forgot").post(forgotPassword);
router.route("/reset-password/:resetToken").post(resetPassword);
router.route("/change-password").post(isLoggedIn, changePassword);
router.route("/all").get(getUser);
router.route("/update").put(
  upload.fields([
    {
      name: "avatar",
      maxCount: 1,
    },
  ]),
  isLoggedIn,
  updateUser
);

export default router;
