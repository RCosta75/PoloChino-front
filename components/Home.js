
import Header from './Header';
import Head from 'next/head';
import ProductContainer from './productContainer/ProductContainer';
import ProductHeader from './ProductHeader';
import { useState } from 'react';




function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  //Etat pour gérer la recherche dans le composant parent.
  //Utilisation d'un état pour stocker 
  //le terme de recherche et le passer comme prop au composant Header.
  
  return (
    <div>
       <Head>
        <title>POL-HO - Home</title>
      </Head>
      <Header setSearchTerm={setSearchTerm} />
      <ProductHeader/>
      <h1 className="text-3xl pt-10 text-center">ALL PRODUCTS</h1>
      <ProductContainer searchTerm={searchTerm}/>
     
      </div>
  
  );
}

export default Home;
