import jwt from "jsonwebtoken";

const isLoggedIn = async (req, res, next) => {
  try {
    const { token } = req.cookies;
    if (!token) {
      return res.status(400).json({
        success: false,
        message: "Unauthenticated user, please login again",
        data: {},
      });
    }

    const userDetails = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

    if (!userDetails) {
      return res.status(400).json({
        success: false,
        message: "Invalid token, please login again",
        data: {},
      });
    }
    req.user = userDetails;
    next();
  } catch (error) {
    return res.status(400).json({
      success: false,
      message: "Token verification failed, please login again",
      data: {},
    });
  }
};

const authorizedRoles =
  (...roles) =>
  async (req, res, next) => {
    console.log(req.user);
    const currentUserRoles = req.user.role;

    if (!roles.includes(currentUserRoles)) {
      return res.status(403).json({
        success: false,
        message: "You do not have permission to access this route",
        data: {},
      });
    }

    next();
  };

const authorizeSubscriber = (req,res,next) => {
  const subscription = req.user.subscription;
  const currentUserRole = req.user.role;
  if (currentUserRole !== "ADMIN" && subscription.status !== "active") {
    return res.status(403).json({
      success: false,
      message: "please subscribe to course",
      data: {},
    });
  }
  next();
};
export { isLoggedIn, authorizedRoles, authorizeSubscriber };
