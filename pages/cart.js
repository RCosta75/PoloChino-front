import Header from "../components/Header";
import styles from "../styles/Cart.module.css";

import CartContainer from "../components/Cart/CartContainer";
import CartResume from "../components/Cart/CartResume";

function Cart() {
  return (
    <>
      <Header />
      <div className={styles.box}>
        <CartContainer className={styles.container} />
        <CartResume />
      </div>
    </>
  );
}

export default Cart;
