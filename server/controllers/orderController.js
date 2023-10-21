
import Order from "../models/orderModels.js";
import Product from "../models/productModel.js";
import catchAsyncErrors from "../middleware/catchAsyncErrors.js";
import ErrorHandler from "../utils/ErrorHandler.js";
/// Create New Order


export const createOrder = catchAsyncErrors(async (req, res, next) => {
    const {
        shippingInfo,
        orderItems,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
    } = req.body;

    const order = await Order.create({
        shippingInfo,
        orderItems,
        itemsPrice,
        taxPrice,
        shippingPrice,
        totalPrice,
        paidAt: Date.now(),
        user: req.user._id,
    });

    res.status(201).json({
        success: true,
        message: "Order Created successfully",
        order,
    });
});

//// Get single order 



export const getSingleOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id).populate(
        "user",
        "name email"
    );
    if (!order) {
        return next(new ErrorHandler("Order not found", 404));
    }
    res.status(200).json({
        success: true,
        message: "Order fetched succesfully",
        order,
    });
});


/// get logged in user orders

export const getMyOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find({ user: req.user._id }).populate(
        "user",
        "name", "email"
    );
    res.status(200).json({
        success: true,
        message: "Orders fetched succesfully",
        orders,
    });
});

///get all orders --- ademin

export const getAllOrders = catchAsyncErrors(async (req, res, next) => {
    const orders = await Order.find();
    let totalAmount = 0;
    orders.forEach((order) => {
        totalAmount += order.totalPrice;
    });

    res.status(200).json({
        success: true,
        message: "all Orders fetched succesfully",
        totalAmount,
        orders,
    });
});


/// Update Order status --Admin

export const updateOrderStatus = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findById(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Order not found with this Id", 404));
    }

    if (order.orderStatus === "Delivered") {
        return next(new ErrorHandler("You have already delivered this order", 400));
    }

    if (req.body.status === "Shipped") {
        order.orderItems.forEach(async (o) => {
            await updateStock(o.product, o.quantity);
        });
    }
    order.orderStatus = req.body.status;

    if (req.body.status === "Delivered") {
        order.deliveredAt = Date.now();
    }

    await order.save({ validateBeforeSave: false });
    res.status(200).json({
        success: true,
        message: "Order status updated succesfully",
        order,
    });
});

async function updateStock(id, quantity) {
    const product = await Product.findById(id);

    product.stock -= quantity;

    await product.save({ validateBeforeSave: false });
}

// delete Order -- Admin

export const deleteOrder = catchAsyncErrors(async (req, res, next) => {
    const order = await Order.findByIdAndDelete(req.params.id);

    if (!order) {
        return next(new ErrorHandler("Order not found with this Id", 404));
    }

    res.status(200).json({
        success: true,
        message: "Order deleted succesfully",
        order,
    });
});
