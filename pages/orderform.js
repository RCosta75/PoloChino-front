import React from 'react'
import OrderForm from '../components/order/orderForm'
import Header from '../components/header/Header';
import { useState } from 'react';

export default function orderform() {

    const [searchTerm, setSearchTerm] = useState('');
    const [reset, setReset] = useState(false);
    const handleReset = () => { 
        setSearchTerm('');
        setReset(!reset);}
         // Passage de handleReset au composant Header dans like.js :
         // Le composant Header a maintenant accès à la fonction handleReset.

  return (
    <>
    <Header setSearchTerm={setSearchTerm} handleReset={handleReset}/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
    <OrderForm  className="w-full h-full "/>
    </div>
  </>
  )
}
