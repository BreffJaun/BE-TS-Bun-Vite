// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import type { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";

// I M P O R T:  F U N C T I O N S
import UserModel from "../models/userModel.ts";

// I M P O R T:  T Y P E S
import { CustomError } from "../types/classes.ts";

// I M P O R T:  E N V  O P T I O N S
import { JWT_KEY, BE_HOST, cookieAge } from "../config/config.js";
import { createVerifyToken } from "../services/jwt/jwt.js";

//========================

// POST (Add) a new User
export const usersPostUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const newUser = req.body;
    const hashedPassword = await bcrypt.hash(newUser.password, 10);
    await UserModel.create({
      ...newUser,
      password: hashedPassword,
    });

    res.status(201).json({
      message: "Created account successfully",
    });
  } catch (err) {
    next(err);
  }
};

// POST Login a User
export const usersPostLogin = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const userData = req.body;
    const userFromDb = await UserModel.findOne({ email: userData.email });
    if (!userFromDb) {
      throw new CustomError("There is no user with this email!", 401);
    }

    const checkPassword = await bcrypt.compare(
      userData.password,
      userFromDb.password
    );
    if (!checkPassword) {
      throw new CustomError("Invalid password!", 401);
    }

    const token = createVerifyToken(userFromDb);
    res
      .cookie("loginCookie", token, {
        maxAge: cookieAge.oneHour,
        httpOnly: true,
        sameSite: "none",
        secure: true,
      })
      .json({
        auth: "loggedin",
        email: userFromDb.email,
        userId: userFromDb._id,
        message: "Login SUCCESSFUL!",
      });
  } catch (err) {
    next(err);
  }
};

// ======================================================
