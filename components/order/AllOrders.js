import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export default function AllOrders() {
  const userToken = useSelector((state) => state.user.value.token);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (userToken) {
      fetch(`https://polo-chino-back.vercel.app/orders/token/${userToken}`) // On recherche les commandes via le token
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          if (data.result) {
            setOrders(data.orders);
          }
        })
        .catch((error) => console.error("Error fetching orders:", error));
    }
  }, [userToken]);

  console.log(orders);

  return (
    <div className="container mx-auto mt-20">
      <h2 className="text-2xl font-bold mb-4">Mes Commandes</h2>
      {/* ternaire car si on a pas de commandes, il faut une phrase pour l'expliquer */}
      {orders.length > 0 ? (
        <ul>
          {orders.map((order) => (
            <li key={order._id} className="mb-4 p-4 bg-white shadow rounded-lg">
              <p>
                <strong>ID:</strong> {order._id}
              </p>
              <p>
                <strong>Status:</strong> {order.Status}
              </p>
              <p>
                <strong>Polos:</strong>
              </p>
              <ul>
                {/* order.polo est un tableau donc on map */}
                {order.Polo.map((polo) => (
                  <li key={polo._id}>
                    <p>Name: {polo.name}</p>
                  </li>
                ))}
              </ul>
              <p>
                <strong>Total:</strong> {order.Total} €
              </p>
              <p>
                <strong>Fees:</strong> {order.Fees} €
              </p>
              <p>
                <strong>Date:</strong>{" "}
                {new Date(order.Date).toLocaleDateString()}
              </p>
            </li>
          ))}
        </ul>
      ) : (
        <p>Aucune commande trouvée.</p>
      )}
    </div>
  );
}
