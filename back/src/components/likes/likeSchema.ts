import { Schema, model } from "mongoose";

const LikeSchema = new Schema(
    {
        user_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "User"
        },
        recipe_id: {
            type: Schema.Types.ObjectId,
            required: true,
            ref: "Recipe"
        },
    },
    {
        timestamps: true,
    }
);

const LikeModel = model("Like", LikeSchema);

export { LikeModel };