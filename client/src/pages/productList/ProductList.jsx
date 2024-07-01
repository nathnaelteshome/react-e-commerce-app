import React, { useState } from 'react'
import Navbar from '../../component/navbar/Navbar'
import Announcment from '../../component/announcment/Announcment'
import Products from '../../component/products/Products'
import './productList.scss'
import { Footer } from '../../component/footer/Footer'
import { useLocation } from 'react-router-dom'



const ProductList = () => {
    const location= useLocation()
    const cat=location.pathname.split("/")[2]
    const [filters,setFilters]=useState({})
    const [sort,setSort]=useState("newest")

    const handleFilters = (e) => {
        const value = e.target.value;
    setFilters({
        ...filters,
        [e.target.name]:value,
    })
}

    return (
        <div className='productListContainer' >
            <Announcment />
            <Navbar />
            <h1 className="title">{cat}</h1>
            <div className="filterContainer">
                <div className="filter">
                    <span className="filterText"> Filter Products: </span>
                    <select className='select' name="color" id="" onChange={handleFilters}>
                        <option  className="option" disabled >Color</option>
                        <option value="white" className="option">White</option>
                        <option value="black" className="option">Black</option>
                        <option value="red" className="option">Red</option>
                        <option value="blue" className="option">Blue</option>
                        <option value="yellow" className="option">Yellow</option>
                        <option value="green" className="option">Green</option>
                    </select>
                    <select className='select' name="size"  onChange={handleFilters}>
                        <option  className="option" disabled >Size</option>
                        <option  className="option">XS</option>
                        <option  className="option">S</option>
                        <option  className="option">M</option>
                        <option  className="option">L</option>
                        <option  className="option">XL</option>
                    </select>

                </div>
                <div className="filter">
                    <span className="filterText"> Sort Products:</span>
                    <select className='select' name="" id="" onChange={e=>setSort(e.target.value)}>
                        <option value="newewst" className="option" >Newest</option>
                        <option value="asc" className="option">Price (asc)</option>
                        <option value="desc" className="option">Price (desc)</option>
                    </select>

                </div>
            </div>
            <Products cat={cat} filters={filters} sort={sort}/>
            <Footer/>
        </div>
    )
}

export default ProductList