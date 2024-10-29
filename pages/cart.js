import Header from "../components/Header";
import styles from "../styles/Cart.module.css";

import CartContainer from "../components/CartContainer";
import CartResume from "../components/CartResume";

function Cart() {
  return (
    <>
      <Header />
      <div className={styles.box}>
      <CartContainer className={styles.container}/>
      <CartResume />
      </div>
    </>
  );
}

export default Cart;
