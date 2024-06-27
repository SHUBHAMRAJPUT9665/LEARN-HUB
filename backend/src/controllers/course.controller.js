import Course from "../models/course.model.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { ApiError } from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import uploadFile from "../utils/upload.js";
const getAllCourses = async (req, res) => {
  try {
    const courses = await Course.find({}).select("-lecture");

    res.status(200).json({
        courses
      })
  
  } catch (error) {
    return res.status(400).json({
      success:false,
      message:error.message,
      data:{}
    })
  }
};

const getLectureCourseId = async (req, res) => {
  try {
    const { id } = req.params;
    const course = await Course.findById(id);

    if (!course) {
      throw new ApiError(400, "Invalid course id or course not found !!");
    }

    res.status(200).json(
      new ApiResponse(200, {
        success: true,
        message: "Course lecutres fetched successfully",
        lectures: course,
      })
    );
  } catch (error) {
    throw new ApiError(500, error.message);
  }
};

// creaate course route

const createCourse = async (req, res) => {
  try {
    const { title, description, category, createdBy } = req.body;
    if (!title || !description || !category || !createdBy) {
      return res
      .status(400)
      .json({ 
        success:false,
        message: "All field required",
        data:{}
      });
    }

    const thumbnailLocalPath = req.files?.thumbnail[0]?.path;

    const thumbnailFile = await uploadFile(thumbnailLocalPath, {
      height: 250,
      width: 250,
      crop: "mfit",
    });
    const course = await Course.create({
      title,
      description,
      category,
      createdBy,
      thumbnail: {
        public_id: thumbnailFile.public_id || "hii",
        secure_url: thumbnailFile.secure_url,
      },
    });
    if (!course) {
      return next(new ApiError(500, "Error creating course"));
    }

    const createdCourse = await Course.findById(course._id);
    if (!createdCourse) {
      throw new ApiError(500, "Error retrieving created course");
    }
    return res
      .status(201)
      .json({ 
        success:true,
        message: "course created successfully",
        data:createdCourse
      });
  } catch (error) {
    throw new ApiError(401, error, "Error while creating course");
  }
};

// update course route

const updateCourse = async (req, res) => {
  try {
    const { id } = req.params;

    const course = await Course.findByIdAndUpdate(
      id,
      {
        $set: req.body,
      },
      {
        runValidators: true,
      }
    );

    if (!course) {
      throw new ApiError(500, "Course with give id not exits");
    }

    return res.status(201).json({
      success: true,
      message: "course updated successfull!",
      course,
    });
  } catch (error) {
    throw new ApiError(401, error, "Error while updating course");
  }
};

// delete course route
const removeCourse = async (req, res) => {
  try {
    const { id } = req.params;


    const course = await Course.findByIdAndDelete(id);

    if (!course) {
      throw new ApiError(500, "Course with give id not exits");
    }

    return res.status(201).json({
      success: true,
      message: "course deleted successfull!",
    });
  } catch (error) {
    throw new ApiError(401, error, "Error while deleting course");
  }
};

const addLectureCourseById = async (req, res) => {
  try {
    const { title, description } = req.body;

    const { id } = req.params;

    if (!title || !description) {
      return res.status(400).json({ success: false, message: "Title and description are required" });
    }

    const course = await Course.findById(id);
    if (!course) {
      return res.status(404).json({ success: false, message: "Course with given ID does not exist" });
    }

    const lectureData = { 
      title, 
      description,
      lecture:{}
     };
 
    
      try {
        const lectureLocalPath = req.files?.lecture[0]?.path;
        const lectureFile = await uploadFile(lectureLocalPath);
        if (lectureFile) {
          lectureData.lecture.public_id = lectureFile.public_id
          lectureData.lecture.secure_url = lectureFile.secure_url
        }
      } catch (error) {
        return res.status(500).json({ success: false, message: "Error while adding course lecture thumbnail", error: error.message });
      }
  

    course.lectures.push(lectureData);
    course.numberOflecture = course.lectures.length;
    await course.save();

    return res.status(201).json({
      success: true,
      message: "Course lecture successfully added to course!",
      course,
    });
  } catch (error) {
    return res.status(500).json({ success: false, message: "Error while adding course lecture", error: error.message });
  }
};


export {
  getAllCourses,
  getLectureCourseId,
  createCourse,
  updateCourse,
  removeCourse,
  addLectureCourseById,
};
