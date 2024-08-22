import Joi from "joi";

export const createProductSchema = Joi.object({
    name:Joi.object().required().min(2),
    description: Joi.object().min(2),
    count:Joi.number()
});