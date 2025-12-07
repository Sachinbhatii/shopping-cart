import React from 'react';
import './ProductCard.css';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, updateQuantity } from '../../store/actions/cartActions';

export default function ProductCard({ product }) {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.items);
    const inCart = cartItems[product.id];

    const handleAdd = () => {
        dispatch(addToCart(product, 1));
    };

    const increase = () => {
        dispatch(updateQuantity(product.id, inCart.qty + 1));
    };

    const decrease = () => {
        dispatch(updateQuantity(product.id, inCart.qty - 1));
    };

    return (
        <div className="product-card">
            <img src={product.image} alt={product.name} className="product-image" />

            <div className="product-body">
                <h3 className="product-name">{product.name}</h3>
                <p className="product-desc">{product.description}</p>

                <div className="product-bottom">
                    <div className="product-price">${product.price.toFixed(2)}</div>

                    {/* If not in cart, show Add to Cart */}
                    {!inCart ? (
                        <button className="add-btn" onClick={handleAdd}>Add to Cart</button>
                    ) : (
                        // If in cart, show qty counter
                        <div className="qty-controls">
                            <button onClick={decrease} className="qty-btn">-</button>
                            <div className="qty-number">{inCart.qty}</div>
                            <button onClick={increase} className="qty-btn">+</button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
