import React from 'react';
import './Product.css'


const product = (props) => {
    // console.log(props);

    const { name, price, img, stock, seller } = props.product;

    return (
        <div className="product">


            <div> <img src={img} />
            </div>


            <div className="resize-product-dtl" >
                <h4 className="product-color">{name}</h4>
                <h2><small>by  : {seller}</small></h2>
                <p>Price : {price}$</p>
                <p><small>only {stock} left in stock - order soon</small></p>
                <br />
                <button
                    onClick={() => props.handelAddToCart(props.product)}
                    className="cart-btn"
                >Add To Cart</button>
                <br /> <br />

            </div>

        </div >
    );
};

export default product;