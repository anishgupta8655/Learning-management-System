import React, { useEffect, useState } from "react";
import Navbar from "../components/pages/Navbar";
import Footer from "../components/pages/Footer";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../components/redux/productSlice";

function DisplayCard() {
  const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  const result = useSelector((state) => state.product.cart);
  //   console.log(result);

  function handleRemove(id) {
    dispatch(removeFromCart(id));
  }

  useEffect(() => {
    const total = result.reduce((acc, cur) => acc + cur.price, 0);

    setTotalPrice(total);
  }, [result]);

  return (
    <div>
      <Navbar />

      <div className="pt-20 flex flex-wrap gap-5">
        {/* Add your card design here */}
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
                    <div className="badge badge-outline">
                      Rating: {res.rating}
                    </div>
                    <div className="badge badge-outline">
                      Price: ${res.price}
                    </div>
                  </div>
                  <div className="btn btn-error mt-4 ">
                    <button onClick={() => handleRemove(res.id)}>
                      Remove Cart
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
      </div>

      <h1 className="text-center p-10 text-lg">
        Total Price : ${totalPrice.toFixed(2)}
      </h1>

      <Footer />
    </div>
  );
}

export default DisplayCard;
