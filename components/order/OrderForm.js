import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";
import { totalBasket } from "../../reducers/cart";

export default function OrderForm() {
  const userToken = useSelector((state) => state.user.value.token);
  const carto = useSelector((state) => state.cart.value);
  const totalPrice = useSelector(totalBasket);
  const router = useRouter();

  const [formData, setFormData] = useState({
    email: '',
    firstName: '',
    lastName: '',
    address: '',
    city: '',
    postalCode: '',
    phoneNumber: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',

  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateCreditCard = (number) => {
    const visaRegex = /^4[0-9]{12}(?:[0-9]{3})?$/;
     return visaRegex.test(number);
 }
 const validateExpiryDate = (date) => {
   const expiryRegex = /^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/;  // MM/YY or MM/YYYY
   return expiryRegex.test(date);
 }


 const validateCVV = (cvv) => {   // 3 or 4 digit CVV
   const cvvRegex = /^[0-9]{3,4}$/; ;
   return cvvRegex.test(cvv); 
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);

    if (!validateCreditCard(formData.cardNumber)) {
       alert("Veuillez entrer un numéro de carte Visa valide.");
        return; }

     if (!validateExpiryDate(formData.expiryDate)) {
           alert("Veuillez entrer une date d'expiration valide (MM/YY ou MM/YYYY)."); 
           return;
           }
 
     if (!validateCVV(formData.cvv)) {
             alert("Veuillez entrer un CVV valide (3 ou 4 chiffres)."); 
             return; 
            }


    const orderData = { 
      token: userToken, //pas sur de moi
      polo: carto.map(item => item._id), 
      date: new Date().toISOString(),
      status: 'Pending',
      fees: 0,
      total: totalPrice,
       ...formData // on ajoute les infos du formulaire pas sur
    };

    console.log('Order data being sent:', orderData); // On envoie la commande sur mongoose
  
    fetch('http://localhost:3000/orders', {
      method: 'POST', 
      headers: {
        'Content-Type': 'application/json'
      }, 
      body: JSON.stringify(orderData), 
    })
      .then(response => response.json())
      .then(data => { 
        if(data.result) {
          console.log(data)
          router.push('/allorders');
          alert('Votre commande est validée')
        } else {
          console.error('Order not created:');
        }
      })
      .catch((error) => { 
        console.error('Error:', error);
      }); 
  };

  return (
    <div className="w-2/3 max-w-lg bg-white shadow-md rounded-lg p-8 mx-auto mt-20">
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
           <label htmlFor="cardNumber" className="block text-sm font-medium mb-1">Numéro de carte :</label>
           <input
            type="text"
            name="cardNumber"
            id="cardNumber" 
            value={formData.cardNumber} 
            onChange={handleChange}
             className="border p-2 w-full" required />
            </div>
            <div className="mb-4">
             <label htmlFor="expiryDate" className="block text-sm font-medium mb-1"> Date d'expiration :</label>
             <input type="text" 
                    name="expiryDate" 
                    id="expiryDate" 
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="border p-2 w-full" required /> 
              </div>
              <div className="mb-4">
                 <label htmlFor="cvv" className="block text-sm font-medium mb-1">CVV :</label>
                 <input 
                 type="text" 
                 name="cvv"
                 id="cvv" 
                 value={formData.cvv}
                 onChange={handleChange}
                 className="border p-2 w-full" required />
                  </div>




        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded">
          Valider la Commande
        </button>
      </form>
    </div>
  );
}
