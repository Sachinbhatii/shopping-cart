import React from 'react';
import './CartDialog.css';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from '../CartItem/CartItem';
import { clearCart } from '../../store/actions/cartActions';

export default function CartDialog({ open, onClose }) {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();

    const itemsArr = Object.values(cart.items || []);
    const total = itemsArr.reduce((acc, it) => acc + it.lineTotal, 0);

    if (!open) return null;

    return (
        <div className="cart-overlay" onClick={onClose}>
            <div className="cart-dialog" onClick={(e) => e.stopPropagation()}>
                <div className="cart-header">
                    <h2>Your Cart</h2>
                    <button className="close-btn" onClick={onClose}>×</button>
                </div>

                <div className="cart-content">
                    {itemsArr.length === 0 ? (
                        <div className="empty">Your cart is empty.</div>
                    ) : (
                        itemsArr.map((it) => (
                            <CartItem key={it.product.id} item={it} />
                        ))
                    )}
                </div>

                <div className="cart-footer">
                    <div className="total">
                        <span>Total</span>
                        <span className="amount">${total.toFixed(2)}</span>
                    </div>

                    <div className="footer-actions">
                        <button className="clear" onClick={() => dispatch(clearCart())}>Clear</button>
                        <button className="checkout" onClick={() => alert('Checkout demo only')}>Checkout</button>
                    </div>
                </div>
            </div>
        </div>
    );
}
