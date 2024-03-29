import { body } from "express-validator";

export const loginValidation = [
  body("email", "Invalid mail format").isEmail(),
  body("password", "Password must be at least 5 characters long").isLength({
    min: 5,
  }),
];

export const registerValidation = [
  body("email", "Invalid mail format").isEmail(),
  body("password", "Password must be at least 5 characters long").isLength({
    min: 5,
  }),
  body("fullName", "Provide a name").isLength({ min: 3 }),
  body("avatarUrl", "Invalid avatar link").optional().isURL(),
];

export const postCreateValidation = [
  body("title", "Enter an article title").isLength({ min: 3 }).isString(),
  body("text", "Enter article text").isLength({ min: 3 }).isString(),
  body("tags", "Incorrect tag format").optional().isString(),
  body("imageUrl", "Incorrect image link").optional().isString(),
];
