import { useContext } from "react";
import "./Cart.css";
import CartCupon from "./CartCupon";
import CartProgress from "./CartProgress";
import CartTable from "./CartTable";
import CartTotals from "./CartTotals";
import { CartContext } from "../../../context/CartProvider";

const Cart = () => {
  const { cartItems } = useContext(CartContext);
  return (
    <section className="cart-page">
      <div className="conteiner">
        {cartItems.length > 0 ? (
          <div className="cart-page-wrapper">
            <form className="cart-form">
              <CartProgress />
              <div className="shop-table-wrapper">
                <CartTable />
                <CartCupon />
              </div>
            </form>
            <div className="cart-collaterals">
              <CartTotals />
            </div>
          </div>
        ) : (
          <h2>Sepette hiç ürün yok </h2>
        )}
      </div>
    </section>
  );
};

export default Cart;
