import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

export default function AllOrders() {
  const user = useSelector((state) => state.user.value);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/orders/${user._id}`)
      .then(response => response.json())
      .then(data => {
        if (data.result) {
          setOrders(data.orders);
        }
      })
      .catch(error => console.error('Error fetching orders:', error));
  }, [user._id]);
  


  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Mes Commandes</h2>
      {orders.length > 0 ? (
        <ul>
          {orders.map(order => (
            <li key={order._id} className="mb-4 p-4 bg-white shadow rounded-lg">
              <p><strong>ID:</strong> {order._id}</p>
              <p><strong>Status:</strong> {order.Status}</p>
              <p><strong>Polo:</strong> {order.polo}</p>
              <p><strong>Total:</strong> {order.Total} €</p>
              <p><strong>Date:</strong> {new Date(order.Date).toLocaleDateString()}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune commande trouvée.</p>
      )}
    </div>
  );
}
