import { Add, Remove } from '@mui/icons-material'
import Announcment from '../../component/announcment/Announcment'
import { Footer } from '../../component/footer/Footer'
import Navbar from '../../component/navbar/Navbar'
import './cart.scss'
import { useSelector } from 'react-redux'

const Cart = () => {
    const cart = useSelector(state => state.cart)

    console.log("cart",cart)

    return (
        <div className='cartContainer'>
            <Navbar />
            <Announcment />
            <div className="cartWrapper">
                <h1 className="cartTitle">YOUR BAG</h1>
                <div className="cartTop">
                    <button className="topButton" style={{ background: "transparent", color: "black" }} >CONTINUE SHOPPING</button>
                    <div className="topTexts">
                        <span className="topText" >Shopping Bag (2)</span>
                        <span className="topText">Your WishList (0)</span>
                    </div>
                    <button className="topButton" style={{ border: "none", background: "black", color: "white" }}>CHECKOUT NOW</button>
                </div>
                <div className="cartBottom">
                    <div className="bottomInfo">

                        {
                            cart.products.map(product => (
                                <div className="product" >
                                    <div className="productDetails">
                                        <img src={product.img} className='productImage' alt="" />
                                        <div className="details">
                                            <span className="productName"><b>Product:</b>{product.title}</span>
                                            <span className="productId"><b>ID:</b> {product._id}</span>
                                            <div className="productColor" style={{ background: product.color }}></div>
                                            <span className="productSize"><b>Size:</b> {product.size}</span>
                                        </div>
                                    </div>
                                    <div className="priceDetails">
                                        <div className="productAmountContainer">
                                            <Add />
                                            <div className="productAmount">{product.quantity}</div>
                                            <Remove />
                                        </div>
                                        <div className="productPrice">ETB {product.price*product.quantity}</div>

                                    </div>
                                </div>
                            ))
                        }


                        <hr style={{ background: "#eee", border: "none", height: '2px' }} />



                    </div>
                    <div className="bottomSummary">
                        <h1 className="summaryTitle">ORDER SUMMARY</h1>
                        <div className="summaryItem">
                            <span className="summaryItemText">Subtotal</span>
                            <span className="summaryItemPrice">ETB {cart.total}</span>
                        </div>
                        <div className="summaryItem">
                            <span className="summaryItemText">Estimated Shipping</span>
                            <span className="summaryItemPrice">ETB 5.90</span>
                        </div>
                        <div className="summaryItem">
                            <span className="summaryItemText">Shipping Discount</span>
                            <span className="summaryItemPrice">ETB -5.90</span>
                        </div>
                        <div className="summaryItem" style={{ fontWeight: "500", fontSize: "2.4rem" }}>
                            <span className="summaryItemText" >Total</span>
                            <span className="summaryItemPrice">ETB {cart.total}</span>
                        </div>
                        <button className="checkoutButton">CHECKOUT</button>
                    </div>
                </div>
                <div className="cartBottom" ></div>
            </div>
            <Footer />

        </div>
    )
}

export default Cart