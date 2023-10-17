import Product from "../models/productModel.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utils/ErrorHandler.js";
import ApiFeatures from "../utils/apiFeatures.js";




// input adminroute using post method 



export const createProduct = catchAsyncErrors(async (req, res, next) => {

    req.body.user = req.user.id;

    const product = await Product.create(req.body);

    res.status(201).json({
        message: "Product created successfully",
        product
    })

});

// get all product

export const getAllProduct = catchAsyncErrors(async (req, res) => {

    const resultPerPage = 20;
    const productCount = await Product.countDocuments();
    const apiFeature = new ApiFeatures(Product.find(), req.query).search().filter().pagination(resultPerPage);

    const products = await apiFeature.query;

    // const products = await Product.find();


    res.status(200).json({
        message: "Product get successfully",
        success: true,
        productCount,
        products,
        resultPerPage,
    });

});

// update Product adminroute

export const updateProduct = catchAsyncErrors(async (req, res, next) => {
    let product = Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("product not fount", 404));
    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true, useFindAndModify: false
    });
    res.status(201).json({
        message: "successfully Product updated",
        product,
    })
})


// deleteProduct Product 

export const deleteProduct = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findOneAndDelete({ _id: req.params.id });
    if (!product) {
        return next(new ErrorHandler("product not fount", 404));
    }
    res.status(200).json({
        success: true,
        message: "successfully Product deleted",
    })

}

)
// update Product adminroute

export const productDetails = catchAsyncErrors(async (req, res, next) => {
    const product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("product not fount", 404));
    }

    res.status(200).json({
        success: true,
        message: "successfully Product details",
        product
    })
})



/// create new product Review or update the product Review

export const createProductReview = catchAsyncErrors(async (req, res, next) => {

    const { rating, comment, productId } = req.body;

    const review = {
        user: req.user._id,
        name: req.user.name,
        rating: Number(rating),
        comment,

    };

    const product = await Product.findById(productId);

    const isReviewd = product.reviews.find(rev => rev.user.toString() === req.user._id.toString());
    if (isReviewd) {
        product.reviews.forEach((rev) => {

            if (rev.user.toString() === req.user._id.toString()) {
                rev.rating = rating;
                rev.comment = comment
            }


        });
    } else {
        product.reviews.push(review);
        product.numOfReviews = product.reviews.length;
    }

    let avg = 0;

    product.reviews.forEach((rev) => {
        avg += rev.rating;
    })

    product.ratings = avg / product.reviews.length;


    await product.save({ validateBeforeSave: false });

    res.status(200).json({
        status: true,
        message: "reviews added successfully",
        review,
    });
});

/// get all reviews of a product

export const getProductReviews = catchAsyncErrors(async (req, res, next) => {

    const product = await Product.findById(req.query.id);

    if (!product) {
        return next(new ErrorHandler("product not fount", 404));
    }

    res.status(200).json({
        status: true,
        message: "reviews get successfully",
        data: product.reviews
    });
});



// delete reviews of a product

export const deleteProductReview = catchAsyncErrors(async (req, res, next) => {


    const product = await Product.findById(req.query.productId);

    if (!product) {
        return next(new ErrorHandler("product not fount", 404));
    }


    const reviews = product.reviews.filter((rev) => rev._id.toString() !== req.query.id.toString());

    if (!reviews) {
        return next(new ErrorHandler("review not fount", 404));
    }


    let avg = 0;
    reviews.forEach((rev) => {
        avg += rev.rating;
    })

    let ratings = 0;

    if (reviews.length === 0) {
        ratings = 0;
    } else {
        ratings = avg / reviews.length;
    }
    const numOfReviews = reviews.length;

    await Product.findByIdAndUpdate(
        req.query.productId,
        {
            reviews,
            ratings,
            numOfReviews,
        },
        {
            new: true,
            runValidators: true,
            useFindAndModify: false,
        }
    )
    res.status(200).json({
        status: true,
        message: "review deleted successfully",
        data: reviews
    });
});