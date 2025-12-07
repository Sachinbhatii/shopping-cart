import React, { useEffect, useState } from 'react';
import ProductCard from '../ProductCard/ProductCard';
import { fetchProducts } from '../../api/products';
import './ProductList.css';

export default function ProductList() {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetchProducts().then((p) => {
            setProducts(p);
            setLoading(false);
        });
    }, []);

    if (loading) return <div className="product-list">Loading products…</div>;

    return (
        <div className="product-list">
            {products.map((p) => (
                <ProductCard key={p.id} product={p} />
            ))}
        </div>
    );
}
