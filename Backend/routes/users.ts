// I M P O R T:  E X T E R N A L  D E P E N D E N C I E S
import express from "express";

// I M P O R T:  F U N C T I O N S

import { userValidator } from "../middleware/userValidator.ts";
import { validateRequest } from "../middleware/validator.ts";

// I M P O R T:  C O N T R O L L E R
import {
  usersPostUser,
  usersPostLogin,
} from "../controller/usersController.ts";

// ========================

// C R E A T E   R O U T E S
const router = express.Router();

// Authentication routes
router.route("/login").post(usersPostLogin);
// router.route("/logout").get(usersGetLogout);

// User management routes
router.route("/signup").post(userValidator, validateRequest, usersPostUser);

export default router;
