import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from './header/product/Product'
import Cart from './header/product/carTT/cart'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])



    useEffect(() => {
        fetch('./products.JSON')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    const handelAddToCart = (product) => {

        const newcart = [...cart, product]
        setCart(newcart);

    }

    return (
        <div className="shop-conteinar">
            <div className="product-conteinar">

                <h2 className="prod" > Products : {products.length}</h2>

                {

                    products.map(product => <Product
                        key={product.key}
                        product={product}
                        handelAddToCart={handelAddToCart}
                    >

                    </Product>)

                }
            </div>
            <div className="cart-conteinar">

                <Cart></Cart>
            </div>

        </div>
    );
};

export default Shop;