import { ValidationError } from "../errors/validation.error.js";

export const ValidationMiddleware = (schema) => {
  return (req, _, next) => {
    const data = req.body;
    const { value, error } = schema.validate(data);
    if (error) {
      throw new ValidationError("Validation error in input");
    }
    req.body = value;
    next();
  };
};
