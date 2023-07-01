import jwt from "jsonwebtoken";
import { catchAsyncError } from "./catchAsyncError.js";
import ErrorHandler from "../utils/erroeHandler.js";
import {User} from '../models/user.js';

export const isAuthenticated = catchAsyncError(async (req,res,next)=>{
    const {token} = req.cookies;

    if(!token) return next(new ErrorHandler("Not logged In!", 401));

    const decode = jwt.verify(token, process.env.JWT_SECRET);

    req.user = await User.findById(decode._id);

    next();
});

export const authorizeAdmin = (req, res, next) =>{
    if(req.user.role !== "admin") return next(new ErrorHandler(`${req.user.role} is not allowed to access this course!`, 403));

    next();
};

export const authorizeSubscribers = (req, res, next) =>{
    if(req.user.subscription.status !== "active" && req.user.role !== "admin") return next(new ErrorHandler(`Only subscribers can access this course!`, 403));

    next();
}