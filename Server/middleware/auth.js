const ErrorResponse = require("../utils/errorResponse");
const jwt =require("jsonwebtoken");
const User = require("../models/userModel");


//check is user authenticated 
exports.isAuthenticated = async(req , res , next )=>{
    const {token } = req.cookies;
    //make sure that token exists
    if(!token){
        return next(new ErrorResponse("not autherized to access this route ",401));
    }

    try {
        // verify token 
        const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
        req.user = await User.findById(decoded.id);
        next();
    } catch (error){
        return next(new ErrorResponse("Not autherized to access this Route ",401));
    }
}

// middleware for admin
exports.isAdmin = async (req , res , next )=>{
    if(req.user.role===0){
        return next(new ErrorResponse("Access Denied , You must be Admin", 401));
    }
    next();
}