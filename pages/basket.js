import LeftBasket from "../components/Basket/LeftBasket";
import RightBasket from "../components/Basket/RightBasket";
import Header from "../components/Header";


export default function basket() {
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
