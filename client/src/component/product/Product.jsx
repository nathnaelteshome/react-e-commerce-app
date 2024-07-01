import React, { useEffect, useState } from 'react'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import './product.scss'
import { Link } from 'react-router-dom';

export const Product = ({ item }) => {


  return (
    <div className='productContainer'>
      <div className="productCircle"></div>
      <img src={item.img} className='productImg' alt="" />
      <div className="productInfo">
        <div className="productIcon"><ShoppingCartOutlinedIcon fontSize="large" /> </div>
        <div className="productIcon">
          <Link to={`/product/${item._id}`}>
            <SearchIcon fontSize="large" />
          </Link>
        </div>
        <div className="productIcon"><FavoriteBorderOutlinedIcon fontSize="large" /> </div>
      </div>
    </div>
  )
}
