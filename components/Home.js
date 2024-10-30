
import Header from './Header';
import Head from 'next/head';
import ProductContainer from './productContainer/ProductContainer';
import ProductHeader from './ProductHeader';
import { useState } from 'react';
import Footer from './Footer';
import styles from "../styles/Home.module.css";




function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  //Etat pour gérer la recherche dans le composant parent.
  //Utilisation d'un état pour stocker 
  //le terme de recherche et le passer comme prop au composant Header.
const [reset, setReset] = useState(false);
 const handleReset = () => { setSearchTerm('');
   setReset(!reset);} 
   // initialise un état reset avec une valeur initiale de false.
   // setReset pour mettre à jour cet état.
   //handleReset réinitialise searchTerm et inverse l'état reset.
  
  return (
    <div className={styles.home}>
       <Head>
        <title>POL-HO - Home</title>
      </Head>
      <Header setSearchTerm={setSearchTerm} handleReset={handleReset} />
      {!searchTerm && (
        <div className={styles.main}>
      <ProductHeader/>
      </div>
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
