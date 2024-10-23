import { faBackward } from "@fortawesome/free-solid-svg-icons/faBackward";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { emptyCart, removeCartItem } from "../redux/slices/cartSlice";

const Cart = () => {
  const [total, setTotal] = useState(0);
  const cartItems = useSelector((state) => state.cart);
  console.log(cartItems);

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const getTotal = ()=>{
    if(cartItems.length>0){
      
      setTotal(cartItems?.map((item)=>item.price).reduce((n1,n2)=>n1+n2))
    }
  }
  console.log(total);

  const handleCheck = () =>{
    alert('Order placed successfully')
    dispatch(emptyCart())
    navigate('/')
  }
  useEffect(()=>{
    getTotal()
  },[cartItems])
  return (
    <div className="pt-10 text-black">
     { cartItems.length>0 ?
      <div className="md:grid grid-cols-[2fr_1fr] my-10">
        <div className="md:py-5 md:px-20">
          <table className="w-full border border-gray-400">
            <thead>
              <tr className="border border-black bg-gray-500">
                <th className="border border-black p-3">#</th>
                <th className="border border-black p-3">Title</th>
                <th className="border border-black p-3">Image</th>
                <th className="border border-black p-6">Price</th>
                <th className="border border-black p-3">Action</th>
              </tr>
            </thead>
            <tbody>
          {   cartItems.map((item,index)=>(<tr key={item}>
                <td className="border border-black text-center ">{index+1}</td>
                <td className="border border-black text-center ">{item?.title}</td>
                <td className="border border-black text-center flex justify-center ">
                  <img
                    src={item?.image}
                    alt="no image"
                    style={{ maxHeight: "150px" }}
                  />
                </td>
                <td className="border border-black text-center ">$ {item?.price}</td>
                <td className="border border-black text-center ">
                  <button className="bg-red-700 rounded py-2 px-3" onClick={()=>dispatch(removeCartItem(item?.id))}>
                    <FontAwesomeIcon
                      icon={faTrash}
                      style={{ color: "white" }}
                    />
                  </button>
                </td>
              </tr>)) }
            </tbody>
          </table>
        </div>
        <div className="pt-5 px-10">
          <div className="p-5 shadow-lg">
            <h1 className="text-center text-3xl">Cart Summary</h1>
            <p className="mt-4 text-xl">Total number of products : {cartItems?.length}</p>
            <p className="mt-2 text-xl">GrandTotal : $ {total}</p>
            <button className="w-full border-green-600 bg-green-600 text-white p-3 mt-4 hover:bg-white hover:border hover:border-green-600 hover:text-green-600" onClick={handleCheck}>
              Checkout
            </button>
          </div>
        </div>
      </div>
      :
      <div className="w-full mt-10 md:grid grid-cols-3">
        <div></div>
        <div className="flex flex-col justify-center items-center my-10">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW4VGZNjFdHpJNoRGR6EYCvf02yRx2gkBMbCJQf3dcCGiI5c8-vY7iNVH3zFtnqRUDDAc&usqp=CAU"
            alt=""
            className="w-full h-80"
          />
          <p className="text-violet-800 text-3xl">Your Cart is Empty</p>

          <Link to={"/"}>
            <button className="bg-green-700 text-white p-3 rounded mt-3">
              <FontAwesomeIcon icon={faBackward} className="me-2" />
              Back Home
            </button>
          </Link>
        </div>

        <div></div>
      </div>
}
    </div>
  );
};

export default Cart;
