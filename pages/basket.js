import LeftBasket from "../components/Basket/LeftBasket";
import RightBasket from "../components/Basket/RightBasket";
import Header from "../components/Header";


function Basket() {
  return (
    <>
    <Header />
    <div className="w-full h-screen flex  ">
      <LeftBasket/>
      <RightBasket/>
    </div>
  </>
    );
}
export default Basket;
