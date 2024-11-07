import React from 'react'
import UpdateInformation from '../components/UpdateInformation'
import Header from '../components/header/Header'
import { useState } from 'react';

export default function informations() {
    const [searchTerm, setSearchTerm] = useState('');
    const [reset, setReset] = useState(false);
    const handleReset = () => { 
        setSearchTerm('');
        setReset(!reset);}
         // Passage de handleReset au composant Header dans updateinformations.js :
         // Le composant Header a maintenant accès à la fonction handleReset.


  return (
    <div>
      <Header setSearchTerm={setSearchTerm} handleReset={handleReset}/>
      <UpdateInformation />
    
    </div>
  )
}