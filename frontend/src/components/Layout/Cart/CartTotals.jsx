const CartTotals = () => {
  return (
    <div className="cart-totals">
      <h2>Cart Totals</h2>
      <table>
        <tbody>
          <tr className="cart-subtotal">
            <th>Subtotal</th>
            <td>
              <span id="subtotal">316.00 TL</span>
            </td>
          </tr>
          <tr>
            <th>Shipping</th>
            <td>
              <ul>
                <li>
                  <label>
                    Fast Cargo : 15 TL
                    <input type="checkbox" id="fast-cargo" />
                  </label>
                </li>
                <li>
                  <a href="#">Change Adress</a>
                </li>
              </ul>
            </td>
          </tr>
          <tr>
            <th>Total</th>
            <td>
              <strong id="cart-total">316.00 TL</strong>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="checkout">
        <button className="btn btn-lg">Procced to checkout</button>
      </div>
    </div>
  );
};

export default CartTotals;
