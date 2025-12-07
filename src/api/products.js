// simple products list (id, name, price, image)
const products = [
    {
        id: 'p1',
        name: 'Blue T-Shirt',
        price: 19.99,
        image: 'https://via.placeholder.com/240x180?text=Blue+T-Shirt',
        description: 'Comfortable cotton t-shirt'
    },
    {
        id: 'p2',
        name: 'Sneakers',
        price: 59.99,
        image: 'https://via.placeholder.com/240x180?text=Sneakers',
        description: 'Lightweight running sneakers'
    },
    {
        id: 'p3',
        name: 'Leather Wallet',
        price: 29.0,
        image: 'https://via.placeholder.com/240x180?text=Wallet',
        description: 'Genuine leather wallet'
    },
    {
        id: 'p4',
        name: 'Sunglasses',
        price: 15.5,
        image: 'https://via.placeholder.com/240x180?text=Sunglasses',
        description: 'Stylish sunglasses'
    }
];

export function fetchProducts() {
    // simulate async API
    return new Promise((resolve) => {
        setTimeout(() => resolve(products), 300);
    });
}
