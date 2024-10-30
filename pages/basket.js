
import LeftBasket from "../components/basket/LeftBasket";
import RightBasket from "../components/basket/RightBasket";

import Header from "../components/header/Header";

function Basket() {
  return (
    <>
    <Header />
    <div className="w-full h-screen flex  ">
      <LeftBasket/>
      <RightBasket />
    </div>
  </>
    );
}
export default Basket;
