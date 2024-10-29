import Header from '../components/Header';
import Card from '../components/productContainer/Card';
import { useSelector } from 'react-redux';

function Cart() {

    const cart =  useSelector(state => state.cart.value);

    console.log(cart)

    const poloProduct = cart?.map((poloCart, i) => {
        return (
          <div className="w-full h-full">
            <div className=" pt-20 px-11 grid grid-cols-4 gap-8">
              <Card key={i} polo={poloCart} />
            </div>
          </div>
        );
      });


  return (
    <>
  <Header />
    {poloProduct}
    </>
);
}

export default Cart;
