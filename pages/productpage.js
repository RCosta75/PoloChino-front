import { useRouter } from 'next/router';
 import ProductPage from '../components/ProductPage'
 import Header from '../components/Header'

  export default function ProductPageWrapper(){
     const router = useRouter();
     const product = JSON.parse(router.query.product || '{}');
     //Parse les données du produit de l'URL et les passées au composant ProductPage.

 return (
    <>
 <Header/>
 <ProductPage product={product} />; 
 </>
)
}