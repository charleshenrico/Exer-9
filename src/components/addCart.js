import React from 'react';

const AddToCartButton = ({ itemName, onAddToCart }) => {
  const handleClick = () => {
    console.log(`Added ${itemName} to Cart`);
    onAddToCart(itemName); 
  };

  return (
    <button type="submit" className="submit1" onClick={handleClick}>
      Add To Cart
    </button>
  );
};

export default AddToCartButton;
