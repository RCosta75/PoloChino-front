import React from 'react'
import Informations from '../components/Informations'
import Header from '../components/header/Header'
import { useState } from 'react';

export default function informations() {
    const [searchTerm, setSearchTerm] = useState('');
    const [reset, setReset] = useState(false);
    const handleReset = () => { 
        setSearchTerm('');
        setReset(!reset);}
         // Passage de handleReset au composant Header dans informations.js :
         // Le composant Header a maintenant accès à la fonction handleReset.


  return (
    <div>
      <Header setSearchTerm={setSearchTerm} handleReset={handleReset}/>
      <Informations />
    
    </div>
  )
}
