import jwt from 'jsonwebtoken';
import { ApiError } from '../utils/ApiError.js';

const isLoggedIn = async (req, res, next) => {
  try {
    const { token } = req.cookies;

    if (!token) {
      return next(new ApiError(400, "Unauthenticated user, please login again"));
    }

    const userDetails = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);


    if (!userDetails) {
      return next(new ApiError(401, "Invalid token, please login again"));
    }

    req.user = userDetails;
    next();
  } catch (error) {
    return next(new ApiError(400, "Token verification failed, please login again"));
  }
};


const authorizedRoles = (...roles) => async (req,res , next) =>{
  const currentUserRoles =  req.user.role;

  if(!roles.includes(currentUserRoles)){
    return next(new ApiError(403, "You do not have permission to access this route"));
  }

  next();
}
export { isLoggedIn , authorizedRoles };
