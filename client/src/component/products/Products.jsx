import React, { useEffect, useState } from 'react'
import { popularProducts } from "../../dummyData"
import { Product } from '../product/Product'
import './products.scss'
import axios from 'axios'

export default function Products({ cat, filters, sort }) {

  const [products, setProducts] = useState([])
  const [filteredproducts, setFilteredProducts] = useState([])


  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          cat
            ? `http://localhost:5000/api/products?category=${cat}`
            : "http://localhost:5000/api/products"
        );
        setProducts(res.data);
      } catch (err) { }
    };
    fetchProducts();
  }, [cat]);

  useEffect(() => {
    cat &&
      setFilteredProducts(
        products.filter((item) =>
          Object.entries(filters).every(([key, value]) =>
            item[key].includes(value)
          )
        )
      );
  }, [products, cat, filters]);

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort])

  console.log("product", products)
  console.log("Filproduct", filteredproducts)

  return (
    <div className='productsContainer'>
      {cat 
      ? filteredproducts.map((item) => (<Product key={item._id} item={item} />)) 
      :products.slice(0,8).map((item) => (<Product key={item._id} item={item} />))}
    </div>
  )
}
