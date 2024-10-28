
import Header from './Header';
import Head from 'next/head';
import ProductContainer from './productContainer/ProductContainer';
import ProductHeader from './ProductHeader';




function Home() {
  
  return (
    <div>
       <Head>
        <title>POL-HO - Home</title>
      </Head>
      <Header />
      <ProductHeader/>
      <h1 className="text-3xl pt-10 text-center">ALL PRODUCTS</h1>
      <ProductContainer/>
     
      </div>
  
  );
}

export default Home;
