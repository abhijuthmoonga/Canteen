import React, { useState } from 'react';

const menuItems = [
  { id: 1, name: 'Veg Sandwich', price: 40 },
  { id: 2, name: 'Paneer Roll', price: 60 },
  { id: 3, name: 'Maggie', price: 30 },
];

export default function App() {
  const [order, setOrder] = useState([]);
  const [orderPlaced, setOrderPlaced] = useState(false);

  const addToOrder = (item) => {
    setOrder([...order, item]);
  };

  const placeOrder = () => {
    setOrderPlaced(true);
  };

  const total = order.reduce((acc, item) => acc + item.price, 0);

  return (
    <div style={{ padding: 20 }}>
      <h1>Smart Canteen Preorder</h1>
      {menuItems.map((item) => (
        <div key={item.id} style={{ marginBottom: 10 }}>
          <span>{item.name} - ₹{item.price}</span>
          <button onClick={() => addToOrder(item)} style={{ marginLeft: 10 }}>Add</button>
        </div>
      ))}

      <h2>Your Order</h2>
      <ul>
        {order.map((item, index) => (
          <li key={index}>{item.name} - ₹{item.price}</li>
        ))}
      </ul>
      <p>Total: ₹{total}</p>

      {!orderPlaced ? (
        <button onClick={placeOrder}>Place Order</button>
      ) : (
        <p>Order placed! Your number is #{Math.floor(Math.random() * 1000)}</p>
      )}
    </div>
  );
}