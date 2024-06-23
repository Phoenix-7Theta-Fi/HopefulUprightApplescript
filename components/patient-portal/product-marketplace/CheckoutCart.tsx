import { useState } from 'react';

interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
}

const CheckoutCart = () => {
  const [cart, setCart] = useState<Product[]>([]);

  const addToCart = (product: Product) => {
    setCart([...cart, product]);
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter((product) => product.id !== productId));
  };

  const calculateTotal = () => {
    return cart.reduce((total, product) => total + product.price, 0);
  };

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.map((product) => (
          <li key={product.id}>
            <h3>{product.name}</h3>
            <p>${product.price}</p>
            <button onClick={() => removeFromCart(product.id)}>
              Remove from cart
            </button>
          </li>
        ))}
      </ul>
      <p>Total: ${calculateTotal()}</p>
      <button>Checkout</button>
    </div>
  );
};

export default CheckoutCart;
