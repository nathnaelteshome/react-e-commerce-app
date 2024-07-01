import React from 'react'
import Announcment from '../component/announcment/Announcment'
import Navbar from '../component/navbar/Navbar'
import Slider from '../component/slider/Slider'
import Catagories from '../component/catagories/Catagories'
import Products from '../component/products/Products'
import { Newsletter } from '../component/newsletter/Newsletter'
import { Footer } from '../component/footer/Footer'

export default function Home() {
    return (
        <div>
            <Announcment/>
            <Navbar />
            <Slider/>
            <Catagories/>
            <Products/>
            <Newsletter/>
            <Footer/>
        </div>
    )
}
