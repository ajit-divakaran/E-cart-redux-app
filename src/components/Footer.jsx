import {
  faFacebook,
  faLinkedin,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons/faInstagram";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons/faWhatsapp";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="min-h-80 bg-violet-900 p-10 w-100 md:grid md:grid-cols-[2fr_repeat(2,1fr)_2fr] mt-2">
      <div className="p-2">
        <div className="flex gap-x-2 items-center text-white mb-4">
          <FontAwesomeIcon icon={faCartShopping} />
          <span className="text-3xl">E-cart</span>
        </div>
        <p className="text-white">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, nemo
          cum esse aliquam quos quod ab et, obcaecati impedit quas sint
          consectetur perferendis iure dicta ducimus autem, beatae veritatis
          reprehenderit corporis! Id autem, repellendus laudantium modi iusto
          asperiores vel
        </p>
      </div>
      <div className="p-2 px-6 text-white">
        <h3 className="text-3xl mb-4">Links</h3>
        <ul>
          <Link to={'/'}><li className="mt-3">Home</li></Link>
          <Link to={'/wishlist'}><li className="mt-3">Watchlist</li></Link>
          <Link to={'/cart'}><li className="mt-3">Cart</li></Link>
        </ul>
      </div>
      <div className="p-2 text-white px-6 ">
        <h3 className="text-3xl mb-4">Guides</h3>
        <ul>
          <li className="mt-3">React</li>
          <li className="mt-3">React Bootstrap</li>
          <li className="mt-3">Bootswatch</li>
        </ul>
      </div>
      <div className="p-2">
        <h4 className="ml-6 text-3xl text-white">Contact Us</h4>
        <div className="flex mt-4 ml-6">
          <input
            type="text"
            placeholder="Email ID"
            className="form-comtrol rounded"
          />
          <button className="bg-orange-500 hover:bg-orange-700 text-white font-bold ml-2 py-2 px-2 rounded">
            Subscribe
          </button>
        </div>
        <div className="flex justify-around mt-4 text-white">
          <FontAwesomeIcon icon={faInstagram} />
          <FontAwesomeIcon icon={faFacebook} />
          <FontAwesomeIcon icon={faTwitter} />
          <FontAwesomeIcon icon={faLinkedin} />
          <FontAwesomeIcon icon={faWhatsapp} />
        </div>
      </div>
    </div>
  );
};

export default Footer;
