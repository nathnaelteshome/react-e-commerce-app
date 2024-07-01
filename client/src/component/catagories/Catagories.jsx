import React from 'react'
import './catagories.scss'
import {categories} from "../../dummyData"
import { CatagoriesItem } from '../catagoryItem/CatagoriesItem'

// console.log(categories)

function Catagories() {
  return (
    <div className='catagoriesContainer'>
        {categories.map((item)=>(
            <CatagoriesItem key={item.id} item={item}/>
        ))}
    </div>
  )
}

export default Catagories