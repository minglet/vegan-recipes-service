import Joi from "joi";

export const editSchema = Joi.object({
    password: Joi.string().min(4).required(),
    name: Joi.string().min(2).required(),
});
