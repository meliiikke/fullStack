import { message } from "antd";
import { useContext, useState } from "react";
import { CartContext } from "../../../context/CartProvider";

const CartCupon = () => {
  const [couponCode, setCouponCode] = useState("");
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const { cartItems, setCartItems } = useContext(CartContext);
  const applyCoupon = async () => {
    if (couponCode.trim().length === 0) {
      return message.warning("Boş değer girilemez");
    }
    try {
      const res = await fetch(`${apiUrl}/api/coupons/code/${couponCode}`);

      if (!res.ok) {
        return message.warning("Girdiğiniz kupon kodu geçersiz.");
      }
      const data = await res.json();
      const discountPercent = data.discountPercent;

      const updatedCartItems = cartItems.map((item) => {
        const updatePrice = item.price * (1 - discountPercent / 100);
        return { ...item, price: updatePrice };
      });
      setCartItems(updatedCartItems);

      message.success(`${couponCode} kupon kodu başarıyla uygulandı.`);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="actions-wrapper">
      <div className="coupon">
        <input
          type="text"
          className="input-text"
          placeholder="Coupon Code"
          onChange={(e) => setCouponCode(e.target.value)}
          value={couponCode}
        />
        <button className="btn" type="button" onClick={applyCoupon}>
          Apply Coupon
        </button>
      </div>
      <div className="update-cart">
        <button className="btn">Update Cart</button>
      </div>
    </div>
  );
};

export default CartCupon;
