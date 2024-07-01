import React from 'react'
import './catagoriesItem.scss'
import { Link } from 'react-router-dom'

export const CatagoriesItem = ({ item }) => {
  return (
    <div className='catagoriesItemContainer'>
      <Link to={`/products/${item.cat}`}>

        <img src={item.img} alt="" className="itemImage" />
        <div className="itemInfo">
          <h1 className="itemTitle">{item.title}</h1>
          <button className='itemButton'>SHOP NOW</button>
        </div>
      </Link>
    </div>
  )
}
