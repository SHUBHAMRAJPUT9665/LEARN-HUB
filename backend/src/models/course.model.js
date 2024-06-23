import mongoose, { Schema } from "mongoose";

const courseSchema = new Schema(
  {
    title: {
      type: String,
      required:[true,"title is required"],
      minLength:[8,'Title must be atleast 8 character'],
      maxLength:[50,'Title should be less  then 50 character']

    },
    description: {
      type: String,
      required:[true,"Description is required"],
      minLength:[8,'Description must be atleast 8 character'],
      maxLength:[200,'Description should be less  then 200 character']
    },
    category: {
      type: String,
      required:[true,"Category is required"],
    },
    thumbnail: {
      public_id: {
        type: String,
        required:true
      },
      secure_url: {
        type: String,
        required:true
      },
    },
    lectures: [
      {
        title: String,
        description: String,
        lecture: {
          public_id: {
            type: String,
          },
          secure_url: {
            type: String,
          },
        },
      },
    ],
    numberOflecture: {
      type: Number,
      default:0,
    },
    createdBy: {
      type: String,
    },
  },
  { timestamps: true }
);


const Course = mongoose.model('Course',courseSchema)

export default Course;
