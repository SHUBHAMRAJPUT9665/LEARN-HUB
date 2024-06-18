
import { ApiError } from "./ApiError.js";
import { uploadOnCloudinary } from "./cloudinary.js";
const uploadFile = async(file) => {
    
  if (!file) {
    throw new ApiError(400, "files are required");
  }
  var fileUploaded = await uploadOnCloudinary(file);
  if (!fileUploaded) {
    throw new ApiError(400, "Error uploading files to Cloudinary");
  }

  return fileUploaded
}

export default uploadFile