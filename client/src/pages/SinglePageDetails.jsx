/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";
import PageNavigation from "../components/PageNavigation";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getProductDetails } from "../actions/productAction";
import { Carousel } from "react-responsive-carousel";
import Rating from "../components/Rating";
import ReviewCard from "../components/ReviewCard";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { addItemsToCart } from "../actions/cartAction";

const SinglePageDetails = ({ match }) => {
  const [quantity, setQuentity] = useState(1);

  const decriseQuentity = () => {
    if (quantity <= 1) return;

    const qty = quantity - 1;
    setQuentity(qty);
  };

  const increaseQuentity = () => {
    if (product.stock <= quantity) return;
    const qty = quantity + 1;
    setQuentity(qty);
  };

  const dispatch = useDispatch();
  const { id } = useParams();
  const { product, loading, error } = useSelector(
    (state) => state.productDetails
  );

  useEffect(() => {
    dispatch(getProductDetails(id));
  }, [dispatch, id]);

  const addToCartHandler = () => {
    dispatch(addItemsToCart(id, quantity));
  };

  return (
    <div className="py-10">
      {/* pagination here */}
      <div className="flex justify-between items-center px-10">
        <div>
          <PageNavigation title={product.name || "Loading..."} />
          {/* <PageNavigation title={"Loading..."} /> */}
        </div>

        <div className="py-5">
          <Link className="underline hover:text-cyan-600" to={"/"}>
            Back to home
          </Link>
        </div>
      </div>

      {/*End pagination here */}

      <div className="grid md:grid-cols-4 px-14">
        <div>
          {/* <Carousel> */}
          {/* images */}
          {/* {product.images &&
              product.images.map((item, i) => (
                <div>
                  <img
                    key={item.url}
                    src={item.url}
                    alt={`${i} Slide`}
                    className="w-[50%]"
                  />
                </div>
              ))} */}

          {/* </Carousel> */}
          <img src={product.images} alt={product.name} />
        </div>

        {/* part -2 */}
        <div></div>
        <div className="col-span-2 pl-10">
          <h1 className="font-semibold text-xl">{product.name}</h1>
          <h1 className="font-thin">product id: {product._id}</h1>

          <div className="flex gap-3 items-center">
            <Rating
              ratings={product.ratings}
              numReview={product.numOfReviews}
            />
          </div>
          <div className="text-lg font-semibold">
            <h1
              className={product.stock >= 1 ? "text-green-600" : "text-red-600"}
            >
              {product.stock >= 1 ? "Instock" : "Out Of Stock"}
            </h1>
          </div>
          <h1 className="text-3xl font-medium py-2">$ {product.price}</h1>
          {/* add to cart */}
          <div>
            <div className="flex  gap-2">
              <button
                onClick={decriseQuentity}
                className="bg-gray-100 px-5 py-2 text-2xl font-semibold"
              >
                -
              </button>
              <input
                readOnly
                type="number"
                value={quantity}
                className=" py-1 w-[50px] bg-gray-50 font-bold text-lg"
              />
              <button
                onClick={increaseQuentity}
                className="bg-gray-100 px-5 py-2 text-2xl font-semibold"
              >
                +
              </button>
              <div>
                <button
                  onClick={addToCartHandler}
                  className=" px-5 py-3 bg-[#ffb30d] border-[2px] border-solid hover:border-black "
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>

          {/*End add to cart */}

          <h1> category:{product.category}</h1>

          <h1>description :{product.description}</h1>
          <button className="bg-gray-200 px-5 py-2">Submit Review</button>
        </div>
      </div>

      {/* Product review */}

      <div className="px-5 ">
        <h1 className="py-5 text-xl font-semibold text-center">
          Product review
        </h1>
        <div>
          {product.reviews && product.reviews[0] ? (
            <div>
              {product.reviews &&
                product.reviews.map((review) => <ReviewCard review={review} />)}
            </div>
          ) : (
            <h1>No review Yet </h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePageDetails;
