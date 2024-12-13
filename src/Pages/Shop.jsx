import React, { useState } from 'react';
import BreadCrumps from '../components/BreadCrumps';

const Shop = () => {
    // Sample product data with category, color, and image URL.
    const initialProducts = [
        { id: 1, name: 'Banana', category: 'Fruits', color: 'yellow', price: '$1.50', imageUrl: 'assets/images/banana.jpg' },
        { id: 2, name: 'Apple', category: 'Fruits', color: 'red', price: '$2.00', imageUrl: 'assets/images/apple.jpg' },
        { id: 3, name: 'Orange', category: 'Fruits', color: 'orange', price: '$1.80', imageUrl: 'assets/images/orange.jpg' },
        { id: 4, name: 'Broccoli', category: 'Vegetables', color: 'green', price: '$2.20', imageUrl: 'assets/images/broccoli.jpg' },
        { id: 5, name: 'Carrot', category: 'Vegetables', color: 'orange', price: '$1.00', imageUrl: 'assets/images/carrot.jpg' },
        { id: 6, name: 'Strawberry', category: 'Fruits', color: 'red', price: '$2.50', imageUrl: 'assets/images/strawberry.jpg' },
        { id: 7, name: 'Lemon', category: 'Fruits', color: 'yellow', price: '$1.70', imageUrl: 'assets/images/lemon.jpg' },
        { id: 8, name: 'Onion', category: 'Vegetables', color: 'red', price: '$1.60', imageUrl: 'assets/images/onion.jpg' },
        { id: 9, name: 'Cherry', category: 'Fruits', color: 'red', price: '$3.00', imageUrl: 'assets/images/cherry.jpg' },
        { id: 10, name: 'Grapefruit', category: 'Fruits', color: 'orange', price: '$2.30', imageUrl: 'assets/images/grapefruit.jpg' },
        { id: 11, name: 'Pepper', category: 'Vegetables', color: 'red', price: '$2.00', imageUrl: 'assets/images/pepper.jpg' },
        { id: 12, name: 'Corn', category: 'Vegetables', color: 'yellow', price: '$1.50', imageUrl: 'assets/images/corn.jpg' },
        { id: 13, name: 'Kiwi', category: 'Fruits', color: 'green', price: '$1.80', imageUrl: 'assets/images/kiwi.jpg' },
        { id: 14, name: 'Peach', category: 'Fruits', color: 'orange', price: '$2.20', imageUrl: 'assets/images/peach.jpg' },
        { id: 15, name: 'Spinach', category: 'Vegetables', color: 'green', price: '$1.40', imageUrl: 'assets/images/spinach.jpg' },
        { id: 16, name: 'Mango', category: 'Fruits', color: 'yellow', price: '$2.50', imageUrl: 'assets/images/mango.jpg' },
        { id: 17, name: 'Raspberry', category: 'Fruits', color: 'red', price: '$2.60', imageUrl: 'assets/images/raspberry.jpg' },
        { id: 18, name: 'Pumpkin', category: 'Vegetables', color: 'orange', price: '$3.10', imageUrl: 'assets/images/pumpkin.jpg' },
        { id: 19, name: 'Blueberry', category: 'Fruits', color: 'blue', price: '$3.20', imageUrl: 'assets/images/blueberry.jpg' },
        { id: 20, name: 'Cucumber', category: 'Vegetables', color: 'green', price: '$1.90', imageUrl: 'assets/images/cucumber.jpg' },
        { id: 21, name: 'Pineapple', category: 'Fruits', color: 'yellow', price: '$2.80', imageUrl: 'assets/images/pineapple.jpg' },
        { id: 22, name: 'Grapes', category: 'Fruits', color: 'green', price: '$2.40', imageUrl: 'assets/images/grapes.jpg' },
        { id: 23, name: 'Pomegranate', category: 'Fruits', color: 'red', price: '$3.00', imageUrl: 'assets/images/pomegranate.jpg' },
        { id: 24, name: 'Orange Bell Pepper', category: 'Vegetables', color: 'orange', price: '$2.10', imageUrl: 'assets/images/orange_bell_pepper.jpg' },
        { id: 25, name: 'Lettuce', category: 'Vegetables', color: 'green', price: '$1.30', imageUrl: 'assets/images/lettuce.jpg' },
        { id: 26, name: 'Pineapple', category: 'Fruits', color: 'yellow', price: '$2.70', imageUrl: 'assets/images/pineapple.jpg' },
        { id: 27, name: 'Watermelon', category: 'Fruits', color: 'green', price: '$3.50', imageUrl: 'assets/images/watermelon.jpg' },
        { id: 28, name: 'Tomato', category: 'Vegetables', color: 'red', price: '$2.00', imageUrl: 'assets/images/tomato.jpg' },
        { id: 29, name: 'Yellow Squash', category: 'Vegetables', color: 'yellow', price: '$1.80', imageUrl: 'assets/images/yellow_squash.jpg' },
        { id: 30, name: 'Botato', category: 'Vegetables', color: 'yellow', price: '$2.00', imageUrl: 'assets/images/botato.jpg' }
    ];

    const [visibleProducts, setVisibleProducts] = useState(initialProducts);

    const applyColorFilter = (color) => {
        const filtered = color === 'all' 
            ? initialProducts 
            : initialProducts.filter(product => product.color === color);
        setVisibleProducts(filtered);
    };

    const applyCategoryFilter = (category) => {
        const filtered = category === 'all' 
            ? initialProducts 
            : initialProducts.filter(product => product.category === category);
        setVisibleProducts(filtered);
    };

    return (
        <div>
            <BreadCrumps title="Shop" Page="Shop" />
            <div className="container">
                <div className="row py-4" style={{ width: "100%" }}>
                    {/* Category Filters */}
                    <div className="categories">
                    <button onClick={() => applyColorFilter('all')} style={colorButtonStyle('')}>All</button>
                        <button onClick={() => applyCategoryFilter('Fruits')} style={colorButtonStyle('gray')}>Fruits</button>
                        <button onClick={() => applyCategoryFilter('Vegetables')} style={colorButtonStyle('gray')}>Vegetables</button>
                    </div>
                    {/* Color Filters */}
                    <div className="colors my-3">
                        <button onClick={() => applyColorFilter('yellow')} style={colorButtonStyle('yellow')}>Yellow</button>
                        <button onClick={() => applyColorFilter('green')} style={colorButtonStyle('green')}>Green</button>
                        <button onClick={() => applyColorFilter('orange')} style={colorButtonStyle('orange')}>Orange</button>
                        <button onClick={() => applyColorFilter('red')} style={colorButtonStyle('red')}>Red</button>
                    </div>
                </div>
                {/* Product Grid */}
                <div className="row mb-2">
                    {visibleProducts.map(product => (
                        <div key={product.id} className="col-6 col-md-4 col-lg-3">
                            <div className="product-card">
                                <img src={product.imageUrl} alt={product.name} />
                                <h5>{product.name}</h5>
                                <p>Price: {product.price}</p>
                                <p>Category: {product.category}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

// Styles for category and color buttons


const colorButtonStyle = (color) => ({
    margin: '5px',
    padding: '10px',
    borderRadius: '5px',
    backgroundColor: color || '#f0f0f0',
    color: color ? 'black' : 'black',
    border: 'none',
    cursor: 'pointer'
});

export default Shop;