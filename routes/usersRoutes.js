import express from "express";
import multer from "multer";
// all functions required for userRoutes.
import {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword,
  updateProfileInformation,
  changePassword,
  getUser,
  getUserListByRole,
  getUserByOther,
  changeUserStatus,
  registerInstructor,
  checkEmailOTPUser,
  registerAppUser,
  loginAppUser,
  updateProfilePicture,
  changePasswordAppUser,
  changeAppUserName,
} from "../controllers/usersController.js";
// middleware required.
import auth from "../middlewares/auth.js";

const router = express.Router();
const storage = multer.memoryStorage();
// const upload = multer({ dest: '../uploads' })
const upload = multer({ storage: storage });

// register user
router.post("/register", registerUser);

//login user
router.post("/login", loginUser);

//forgot password
router.post("/forgot-password", forgotPassword);

//reset password(sending link to user when he clicks it redirect to passwork change route which is different for each user).
router.post("/reset-password/:id/:token", resetPassword);

//get user
router.get("/", auth, getUser);

// til here job done.

// (not currently)
router.post("/register-app-user", registerAppUser);

// register instructor(not currently)
router.post("/register/instructor", auth, registerInstructor);

// otp authentication(not currently)
router.post("/otp-authentication", checkEmailOTPUser);

// (not currently)
router.post("/login-app-user", loginAppUser);

// update profile information(not currently).
router.put(
  "/update-profile",
  auth,
  upload.single("picture"),
  updateProfileInformation
);

// (not currently).
router.put(
  "/update-profile-picture",
  auth,
  upload.single("picture"),
  updateProfilePicture
);

// change password(not currently).
router.put("/change-password", auth, changePassword);
// (not currently).
router.put("/change-password-app-user", auth, changePasswordAppUser);
// (not currently).
router.put("/change-app-user-name", auth, changeAppUserName);

//get all users by role(not currently).
router.get("/get-list-users/:role", auth, getUserListByRole);

//get user by other(not currently).
router.get("/:id", getUserByOther);

// change user status(not currently).
router.put("/change-user-status/:id", auth, changeUserStatus);

export { router as usersRoutes };
