import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";
export const videoSchema = new Schema(
  {
    videoFile: { type: String, required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    thumbnail: { type: String, required: true },
    views: {
      type: number,
      default: 0,
    },
    duration: { type: number, required: true },
    isPublished: {
      type: Boolean,
      default: true,
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User",
        },
  },

  {
    timestamps: true,
  },
);
videoSchema.plugin(mongooseAggregatePaginate);
export const video = mongoose.model("Video", videoSchema);
