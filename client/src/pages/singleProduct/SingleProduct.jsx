import React, { useEffect, useState } from 'react'
import Navbar from '../../component/navbar/Navbar'
import { Newsletter } from '../../component/newsletter/Newsletter'
import { Footer } from '../../component/footer/Footer'
import Announcment from '../../component/announcment/Announcment'
import './singleProduct.scss'
import { Add, Remove } from '@mui/icons-material'
import { useLocation } from 'react-router-dom'
import { publicRequest } from '../../requestMethods'
import { useDispatch } from 'react-redux'
import { addProduct } from '../../redux/cartRedux'



const SingleProduct = () => {
    const location = useLocation()
    const id = location.pathname.split("/")[2]
    const [product, setProduct] = useState({})
    const [quantity, setQuantity] = useState(1)
    const [color, setColor] = useState("")
    const [size, setSize] = useState("")
    const dispatch = useDispatch()


    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch { }
        };
        fetchProduct();
    }, [id]);

    const handleQuantity = (type) => {
        if (type === "dec") {
            quantity > 1 && setQuantity(quantity - 1);
        } else {
            setQuantity(quantity + 1);
        }
    };

    const handleClick = () => {
        dispatch(
            addProduct({ ...product, quantity, color, size })
        );
    };

    return (
        <div className='singleProduct'>
            <Navbar />
            <Announcment />
            <div className="productWrapper">
                <div className="imageContainer">
                    <img src={product.img} alt="" className="img" />
                </div>
                <div className="infoContainer">
                    <h1 className="infoTitle">{product.title}</h1>
                    <p className="infoDesc">{product.desc}</p>
                    <span className="price">ETB {product.price}</span>
                    <div className="filterContainer">
                        <div className="filter">
                            <span className="filterTitle">Color</span>
                            {console.log(product.color)}
                            {product.color?.map((c) => (
                                <div onClick={() => setColor(c)} className="filterColor" key={c} style={{ backgroundColor: c }}></div>
                            ))}
                        </div>
                        <div className="filter">
                            <span className="filterTitle">Size</span>
                            <select onChange={(e) => setSize(e.target.value)} className="filterSize">Size
                                <option className="filterSize">XS</option>
                                {product.size?.map((s) => (
                                    <option className="filterSize" key={s}> {s}</option>
                                ))}
                            </select>
                        </div>

                    </div>
                    <div className="addContainer">
                        <div className="amountContainer">
                            <Remove className='amountButton' onClick={() => handleQuantity("dec")} />
                            <span className="amount">{quantity}</span>
                            <Add className='amountButton' onClick={() => handleQuantity("inc")} />
                        </div>
                        <button className="addButton" onClick={handleClick}>ADD TO CART</button>
                    </div>
                </div>
            </div>
            <Newsletter />
            <Footer />


        </div>
    )
}

export default SingleProduct