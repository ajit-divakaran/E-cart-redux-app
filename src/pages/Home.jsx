import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import React from 'react'
import useFetch from '../hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addWishlistItems } from '../redux/slices/wishlistSlice'
import { addItemToCart } from '../redux/slices/cartSlice'

const Home = () => {
  const data = useFetch('https://fakestoreapi.com/products')
  console.log(data);
  const dispatch = useDispatch()
  return (
    <div className=' pt-40 md:grid md:grid-cols-4'>
    {
      data?.length>0 && data?.map((item)=>(

      <div key={item} className="border border-black rounded m-2 p-2 flex flex-col justify-between">
        <img src={item?.image} alt="" className='w-full h-60' />
        <h4 className="text-center d-font heads mt-4">{item?.title}</h4>
        <p className="text-justify mt-5">{item?.description.slice(0,60)}</p>
        <p className="text-2xl mt-5">Price:<span className='text-violet-600 ml-2'>$ {item?.price}</span></p>
        <div className="flex justify-between mb-4 mt-2">
          <button className="p-3 rounded bg-red-700 text-white" onClick={()=>dispatch(addWishlistItems(item))}><FontAwesomeIcon icon={faHeart}/></button>
          <button className="p-3 rounded bg-green-700 text-white" onClick={()=>dispatch(addItemToCart(item))}><FontAwesomeIcon icon={faShoppingCart}/></button>
        </div>
      </div>

   
    ))}
     </div>
  )
}

export default Home