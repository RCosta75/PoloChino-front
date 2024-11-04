import React from 'react'
import { useState } from "react";
import LikeContainer from '../components/LikeContainer';
import Footer from '../components/Footer';
import Header from '../components/header/Header';




export default function likes() {

  const [searchTerm, setSearchTerm] = useState('');
  const [reset, setReset] = useState(false);
  const handleReset = () => { 
      setSearchTerm('');
      setReset(!reset);
    }
       // Passage de handleReset au composant Header dans like.js :
       // Le composant Header a maintenant accès à la fonction handleReset.
       const handleResetFilters = () => { 
        setReset(!reset); }; 
  return (
    <div>
        <Header setSearchTerm={setSearchTerm} handleReset={handleReset} handleResetFilters={handleResetFilters}/>
        <LikeContainer/>
        <Footer/>
    </div>
  )
}
