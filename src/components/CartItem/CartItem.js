import React from 'react';
import './CartItem.css';
import { useDispatch } from 'react-redux';
import { updateQuantity, removeFromCart } from '../../store/actions/cartActions';

export default function CartItem({ item }) {
    const { product, qty } = item;
    const dispatch = useDispatch();

    const changeQty = (newQty) => {
        dispatch(updateQuantity(product.id, newQty));
    };

    return (
        <div className="cart-item">
            <img src={product.image} className="cart-item-image" alt={product.name} />
            <div className="cart-item-body">
                <div className="cart-item-name">{product.name}</div>
                <div className="cart-item-price">${product.price.toFixed(2)}</div>
                <div className="cart-item-controls">
                    <button onClick={() => changeQty(qty - 1)}>-</button>
                    <input
                        type="number"
                        value={qty}
                        min={1}
                        onChange={(e) => {
                            const val = parseInt(e.target.value || '0', 10);
                            if (isNaN(val)) return;
                            changeQty(val);
                        }}
                    />
                    <button onClick={() => changeQty(qty + 1)}>+</button>
                    <button className="remove" onClick={() => dispatch(removeFromCart(product.id))}>Remove</button>
                </div>
            </div>
            <div className="cart-item-total">${(product.price * qty).toFixed(2)}</div>
        </div>
    );
}
