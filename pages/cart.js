import Header from "../components/Header";
import CartContainer from "../components/Cart/CartContainer";
import CartResume from "../components/Cart/CartResume";

function Cart() {
  return (
    <>
      <Header />
      <div className="w-full h-screen flex  ">
        <CartContainer/>
        <CartResume />
      </div>
    </>
  );
}

export default Cart;
