import mongoose from "mongoose";

const productSchema = new mongoose.Schema({

    name: {
        type: String,
        required: [true, "please Enter the Product Name"],

    },
    description: {
        type: String,
        required: [true, "please Enter the Product Name"]
    },
    price: {
        type: Number,
        required: [true, "please Enter the Product Name"],
        maxLength: [8, "please Enter the Product Name"]
    },
    // ratings: {
    //     type: Number,
    //     default: 0
    // },
    images: {
        type: String,
        required: [true, "please Enter the images "],
    },

    category: {
        type: String,
        required: [true, "please Enter the Product Name"],
    },
    stock: {
        type: Number,
        required: [true, "please Enter the Product Name"],
        default: 3
    },
    // numOfReviews: {
    //     type: Number,
    //     default: 0
    // },

    // reviews: [
    //     {
    //         user: {
    //             type: mongoose.Schema.Types.ObjectId,
    //             ref: "User",
    //             required: true,
    //         },
    //         name: {
    //             type: String,
    //             required: true,
    //         },
    //         rating: {
    //             type: String,
    //             required: true,
    //         },
    //         comment: {
    //             type: String,
    //             required: true,
    //         }
    //     }
    // ],

    // seller: {
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true
    // },

    createdAt: {
        type: Date,
        default: Date.now
    }
})

const Product = mongoose.model('Product', productSchema);

export default Product;