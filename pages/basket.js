import Header from "../components/Header";
import CartContainer from "../components/Cart/CartContainer";
import CartResume from "../components/Cart/CartResume";

export default function basket() {
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
