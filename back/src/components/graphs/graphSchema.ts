import { Schema, model } from "mongoose";

const GraphSchema = new Schema(
  {
    data: { type: Object, required: true }
  },
  {
    timestamps: true,
  }
);

const GraphModel = model("Graph", GraphSchema);

export { GraphModel };
