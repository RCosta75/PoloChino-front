import React from 'react'
import Header from '../components/header/Header';
import { useState } from 'react';
import AllOrders from '../components/order/AllOrders';

export default function orderform() {

    const [searchTerm, setSearchTerm] = useState('');
    const [reset, setReset] = useState(false);
    const handleReset = () => { 
        setSearchTerm('');
        setReset(!reset);}
         // Passage de handleReset au composant Header dans allorder.js :
         // Le composant Header a maintenant accès à la fonction handleReset.

  return (
    <>
    <Header setSearchTerm={setSearchTerm} handleReset={handleReset}/>
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
     <AllOrders />
    </div>
  </>
  )
}
