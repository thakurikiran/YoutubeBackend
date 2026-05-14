import { asyncHandler } from "../utils/asynHandler.js";
import { ApiError } from "../utils/ApiError.js";

const registerUser = asyncHandler(async (req, res) => {
  //get userdetails from frontend
  // validation - not empty
  //check if user already exits : username , email
  //check for images , check for avatar
  // upload them to cloudinary, avatar
  //create user object - create entry in db
  //remove password and refresh token field from response
  // check for user cretion
  // return res

  const { fullName, email, userName, password } = req.body;

  if (
    [fullName, email, userName, password].some((field) => field?.trim() === "")
  ) {
    throw new ApiError(400, "All fields are required");
  }
});

const existedUser = await User.findOne({
  $or: [{ userName }, { email }],
});

if (existedUser) {
  throw new ApiError(409, "User with email or username already exists");
}



export { registerUser };
