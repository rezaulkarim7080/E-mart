import mongoose from "mongoose";
import validator from "validator";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import crypto from "crypto";


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "please Enter the user Name"],

    },
    email: {
        type: String,
        required: [true, "please Enter the user email"],
        unique: true,

    },
    password: {
        type: String,
        required: [true, "please Enter the user password"],
    },
    userImage: {
        type: String,
        required: [true, "please Enter the user password"],
    },

    role: {
        type: String,
        default: "user"
        // required: [true, "please Enter role"],
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    resetPasswordToken: String,
    resetPasswordExpires: Date,


});


userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        next();
    }
    this.password = await bcrypt.hash(this.password, 10);
})

/// jwt Token

userSchema.methods.getJWTToken = function () {
    return jwt.sign({ id: this._id }, process.env.JWT_SECRET, {
        expiresIn: process.env.JWT_EXPIRE,
    });

}


// compare password

userSchema.methods.comparePassword = async function (password) {
    return await bcrypt.compare(password, this.password);
}

// generatting user password reset Token

userSchema.methods.getResetPasswordToken = function () {

    const resetPasswordToken = crypto.randomBytes(20).toString("hex");

    this.resetPasswordToken = crypto
        .createHash("sha256")
        .update(resetPasswordToken)
        .digest("hex");

    this.resetPasswordExpires = Date.now() + 3600000;

    return resetPasswordToken;
};


const User = mongoose.model('User', userSchema);

export default User;