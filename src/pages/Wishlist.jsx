// import React from 'react'
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons/faTrashCan";
import { useDispatch, useSelector } from "react-redux";
import { removeWishlistItems } from "../redux/slices/wishlistSlice";
import { addItemToCart } from "../redux/slices/cartSlice";

const Wishlist = () => {
  const wishListArray = useSelector((state) => state.wishlist);
  console.log(wishListArray);

  const dispatch = useDispatch()

  const wishes = (item) =>{
    dispatch(addItemToCart(item))
    dispatch(removeWishlistItems(item.id))
  }
  return (
    <>
      <h1 className="text-center text-3xl pt-40">Wishlist</h1>
      {wishListArray.length > 0 ? (
        <div className=" md:grid md:grid-cols-4">
          {wishListArray?.map((item) => (
            <div key={item} className="shadow-lg border border-slate-400 p-2">
              <img
                src={item?.image}
                alt=""
                className="w-full h-60"
              />
              <h4 className="text-center text-2xl">{item?.title}</h4>
              <p className="text-justify mt-2">
                {item?.description}
              </p>
              <p className="text-2xl mt-2">
                Price:<span className="text-violet-600">$ {item?.price}</span>
              </p>
              <div className="flex justify-between">
                <button className="p-3 rounded bg-red-700 text-white" onClick={()=>dispatch(removeWishlistItems(item?.id))}>
                  <FontAwesomeIcon icon={faTrashCan} />
                </button>
                <button className="p-3 rounded bg-green-700 text-white" onClick={()=>wishes(item)}>
                  <FontAwesomeIcon icon={faShoppingCart} />
                </button>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="w-full mt-10 md:grid grid-cols-3">
          <div></div>
          <div>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQWYK4JQI6p1YcEiUBs84P1NPHYUG-bNXkNGw&s"
              alt=""
              className="w-full h-80"
            />
          </div>
          <div></div>
        </div>
      )}
    </>
  );
};

export default Wishlist;
