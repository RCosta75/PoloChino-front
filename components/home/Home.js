import Head from 'next/head';
import ProductContainer from '../productContainer/ProductContainer';
import { useState } from 'react';
import Footer from '../Footer';
import ProductHeader from './ProductHeader';
import Header from '../header/Header';



function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  //Etat pour gérer la recherche dans le composant parent.
  //Utilisation d'un état pour stocker 
  //le terme de recherche et le passer comme prop au composant Header.
  
  return (
    <div >
       <Head>
        <title>POL-HO - Home</title>
      </Head>
      <Header setSearchTerm={setSearchTerm} />
      {!searchTerm && (
      <ProductHeader/>
    )}
    {searchTerm  ? 
  <h1 className="text-3xl pt-32 text-center" >{searchTerm}</h1>
  : <h1 className="text-3xl pt-32 text-center" >All Products</h1>
}
   
      <div id='products'>
      <ProductContainer searchTerm={searchTerm}/>
      </div>
      <Footer/>
      </div>
  
  );
}






export default Home;
