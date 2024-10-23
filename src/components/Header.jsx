import { faBars, faHeart } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons/faCartShopping'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Header = () => {
  const [showNav,setShowNav] = useState('hidden')
  const wishlistItems = useSelector((state)=>state.wishlist)
  const cartItems = useSelector((state)=>state.cart)
  const handleShowNav = () =>{
    if(showNav==='hidden'){
      setShowNav('block')
    }
    else{
      setShowNav('hidden')
    }
    // window.addEventListener('resize',()=>{
    //   setShowNav()
    // })
  }
  return (
<>
      <div className='fixed w-100 min-h-20 bg-violet-900 p-2 text-white block md:flex md:items-center w-full'>
<div className='block w-full '>
    <Link to={'/'}>
            <div className='flex w-full justify-between'>
              <h1 className='text-3xl ml-4'><FontAwesomeIcon icon={faCartShopping} className='me-3'/>E-CART</h1>
              <button className="border border-white px-4 rounded md:hidden mr-4" onClick={handleShowNav}><FontAwesomeIcon icon={faBars}/></button>
            </div>
    </Link>
</div>

        <div className={`${showNav} md:flex ms-auto gap-x-4 mt-6 md:mt-0`}>
  <Link to={'/wishlist'}>
            <button className="px-4 mb-4 md:m-0 py-3 border border-white rounded me-4 hover:bg-white hover:text-violet-900 flex items-center" style={{width:'fit-content'}}>
              <FontAwesomeIcon icon={faHeart} className='me-2'style={{color:'red'}}/>Wishlist<span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{wishlistItems.length}</span>
            </button>
  </Link>
<Link to ={'/cart'}>
            <button className="px-4 py-3 mb-4 md:m-0 border border-white rounded me-4 hover:bg-white hover:text-violet-900 flex items-center">
              <FontAwesomeIcon icon={faHeart} className='me-2'style={{color:'red'}}/>Cart<span className='px-2 border-slate-500 bg-slate-400 rounded ms-2'>{cartItems?.length}</span>
            </button>
</Link>
        
        </div>
      </div>
  
</>  )
}

export default Header