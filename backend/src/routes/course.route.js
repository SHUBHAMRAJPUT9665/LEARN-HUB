import { Router } from "express";
import {
  getAllCourses,
  getLectureCourseId,
  createCourse,
  updateCourse,
  removeCourse,
  addLectureCourseById,
} from "../controllers/course.controller.js";
import { isLoggedIn, authorizedRoles } from "../middleware/auth.middleware.js";
import { upload } from "../middleware/multer.middleware.js";

const router = Router();

router
  .route("/")
  .get(getAllCourses)
  .post(
    // isLoggedIn,
    // authorizedRoles("ADMIN"),
    upload.fields([
      {
        name: "thumbnail",
        maxCount: 1,
      },
    ]),
    createCourse
  );

// course CRUD operation route
router
  .route("/:id")
  .get(
       isLoggedIn, 
       authorizedRoles("ADMIN"), 
       getLectureCourseId
  )
  .put(
        isLoggedIn, 
        authorizedRoles("ADMIN"), 
        updateCourse
  )
  .delete(
         isLoggedIn, 
         authorizedRoles("ADMIN"), 
         removeCourse
  )
  .post(
          isLoggedIn, 
          authorizedRoles("ADMIN"), 
          upload.fields([
            {
              name: "lecture",
              maxCount: 1,
            },
          ]),
          addLectureCourseById
  );

// create course route

export default router;
