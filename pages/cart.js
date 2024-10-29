import Header from '../components/Header';
import Card from '../components/productContainer/Card';
import { useSelector } from 'react-redux';

function Cart() {

    const cart =  useSelector(state => state.cart.value);
    if (!cart || cart.length === 0) { 
      return ( <> 
      <Header /> 
      <div> 
        <h2>Your cart is empty!</h2>
         <p>Add some items to your cart to see them here.</p>
          
         </div> 
         </> ); }

    console.log(cart)

    const vide = <span>Your Cart is empty, fill it with POLOS</span>

    const poloProduct = cart?.map((polo, i) => {
        return (
          <div className="w-full h-full">
            <div className=" pt-20 px-11 grid grid-cols-4 gap-8">
              <Card key={i} polo={polo} />
            </div>
          </div>
        );
      });


  return (
    <>
  <Header />
    {poloProduct ? poloProduct : vide}
    </>
);
}

export default Cart;
