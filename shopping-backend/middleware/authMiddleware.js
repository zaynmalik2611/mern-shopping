import asyncHandler from "express-async-handler";
import jwt from "jsonwebtoken";

export const isAuthorized = asyncHandler(async (req, res, next) => {
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    try {
      token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
    } catch (error) {}
  }
  if (!token) {
    res.status(401);
    throw new Error("Not authorized! no token found.");
  }
  next();
});
