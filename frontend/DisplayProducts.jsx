import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, productThunk } from "../components/redux/productSlice";

function DisplayProducts() {
  const dispatch = useDispatch();
  const result = useSelector((state) => state.product.product);
 

  useEffect(() => {
    dispatch(productThunk());
  }, []);

  function handleAddToCart(e) {
    console.log(e);
    // Add to cart logic goes here
    dispatch(addToCart(e));
  }

  return (
    <>
      {result && result.length > 0 ? (
        result.map((res, index) => (
          <div
            className="card bg-base-100 w-[330px] shadow-md shadow-black "
            key={index}
          >
            <figure>
              <img
                src={`${res.thumbnail}`}
                alt="Shoes"
                style={{ height: "150px" }}
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title text-sm">
                {res.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p style={{ height: "100px", overflow: "hidden" }}>
                {res.description}
              </p>
              <div className="card-actions justify-end">
                <div className="badge badge-outline">Rating: {res.rating}</div>
                <div className="badge badge-outline">Price: ${res.price}</div>
              </div>
              <div className="btn btn-info mt-4 ">
                <button onClick={() => handleAddToCart(res)}>
                  Add To Cart
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h1>No Products Available</h1>
        </div>
      )}
    </>
  );
}

export default DisplayProducts;
