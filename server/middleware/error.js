import ErrorHandler from "../utils/ErrorHandler.js";



export default (err, req, res, next) => {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "internal server Error";


    /// wrong mongodb id error
    if (err.name === "CastError") {
        const message = `Resource not found . Invalid ${err.path}`;
        err = new ErrorHandler(message, 400)

    }

    //// mogoose duplicte key error
    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400)
    }



    /// wrong jwt error
    if (err.name === "JsonWebTokenError") {
        const message = `Invalid token`;
        err = new ErrorHandler(message, 400)
    }

    /// jwt expire error

    if (err.name === "TokenExpiredError") {
        const message = `Token has expired`;
        err = new ErrorHandler(message, 400)
    }



    res.status(err.statusCode).json({
        success: false,
        error: err.message,
    });
};