import React, { useState } from "react";


export default function OrderForm() {
  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    cardNumber: '',
    cardName: '',
    cvc: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
  };
  console.log(formData.lastName)

  return (
    <div className="max-w-md mx-auto p-4">
      <h2 className="text-xl mb-4">Formulaire de Commande</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email :</label>
          <input
            type="email"
            name="email"
            id="email"
            value={formData.email}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="firstName" className="block text-sm font-medium mb-1">Prénom :</label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            value={formData.firstName}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="lastName" className="block text-sm font-medium mb-1">Nom :</label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            value={formData.lastName}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
          
        </div>
        <div className="mb-4">
          <label htmlFor="address" className="block text-sm font-medium mb-1">Adresse :</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="city" className="block text-sm font-medium mb-1">Ville :</label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="postalCode" className="block text-sm font-medium mb-1">Code Postal :</label>
          <input
            type="text"
            name="postalCode"
            id="postalCode"
            value={formData.postalCode}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="phoneNumber" className="block text-sm font-medium mb-1">Numéro de Téléphone :</label>
          <input
            type="text"
            name="phoneNumber"
            id="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Numéro de Carte :</label>
          <input
            type="text"
            name="cardNumber"
            id="cardNumber"
            value={formData.cardNumber}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cardName" className="block text-sm font-medium mb-1">Nom sur la Carte :</label>
          <input
            type="text"
            name="cardName"
            id="cardName"
            value={formData.cardName}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="cvc" className="block text-sm font-medium mb-1">CVC :</label>
          <input
            type="text"
            name="cvc"
            id="cvc"
            value={formData.cvc}
            onChange={handleChange}
            className="border p-2 w-full"
            required
          />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Valider la Commande
        </button>
      </form>
    </div>
  );
}
