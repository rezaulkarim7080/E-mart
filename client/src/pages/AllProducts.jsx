import React, { useEffect, useState } from "react";
import Product from "../components/Product";
import { getProduct } from "../actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import Loader from "../loader/Loader";
import { useParams } from "react-router-dom";
import Pagination from "react-js-pagination";
import "../pagination/PaginationBox.css";

const categories = ["laptop", "t-shirt", "backpack", "camera", "tops", "pc"];

const AllProducts = () => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState("");

  const { loading, error, products, productsCount, resultPerPage } =
    useSelector((state) => state.products);
  const { keyword } = useParams();

  const setCurrentPageNo = (e) => {
    setCurrentPage(e);
  };

  //   const keyword = match.params.keyword;
  useEffect(() => {
    // if (error) {
    //   return alert.error(error);
    // }
    dispatch(getProduct(keyword, currentPage, category));
  }, [dispatch, keyword, currentPage, category]);

  return (
    <>
      <div className="py-10">
        {loading ? (
          <Loader />
        ) : (
          <div>
            <div className="px-6">
              <h1 className="text-center font-bold text-3xl">all Products</h1>
              <div className="grid md:grid-cols-4 gap-4 ">
                {products &&
                  products.map((product) => (
                    <div>
                      <Product key={product._id} product={product} />
                    </div>
                  ))}
              </div>

              {/* filter */}
              <div></div>
              {/* Caltagorier */}
              <div>
                {categories.map((category) => (
                  <button key={category} onClick={() => setCategory(category)}>
                    {category}
                  </button>
                ))}
              </div>
              {/* pagination */}

              <div className="paginationBox">
                <Pagination
                  activePage={currentPage}
                  itemsCountPerPage={resultPerPage}
                  totalItemsCount={productsCount}
                  onChange={setCurrentPageNo}
                  nextPageText="Next"
                  prevPageText="Prev"
                  firstPageText="1st"
                  lastPageText="Last"
                  itemClass="page-item"
                  linkClass="page-link"
                  activeClass="pageItemActive"
                  activeLinkClass="pageLinkActive"
                />
              </div>

              {/* {resultPerPage < productsCount && (
                <div className="paginationBox">
                  <Pagination
                    activePage={currentPage}
                    itemsCountPerPage={resultPerPage}
                    totalItemsCount={productsCount}
                    onChange={setCurrentPageNo}
                    nextPageText="Next"
                    prevPageText="Prev"
                    firstPageText="1st"
                    lastPageText="Last"
                    itemClass="page-item"
                    linkClass="page-link"
                    activeClass="pageItemActive"
                    activeLinkClass="pageLinkActive"
                  />
                </div>
              )} */}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default AllProducts;
