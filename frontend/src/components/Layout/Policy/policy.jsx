import "./policy.css";

const Policy = () => {
  return (
    <section className="policy">
      <div className="conteiner">
        <ul className="policy-list">
          <li className="policy-item">
            <i className="bi bi-truck"></i>
            <div className="policy-text">
              <strong>FREE DELIVERY</strong>
              <span>From 49.99 TL</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-headset"></i>
            <div className="policy-text">
              <strong>SUPPORT 24/7</strong>
              <span>Online 24 hours</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-arrow-clockwise"></i>
            <div className="policy-text">
              <strong>30 DAYS RETURN</strong>
              <span>Simply return it within 30 days</span>
            </div>
          </li>
          <li className="policy-item">
            <i className="bi bi-credit-card"></i>
            <div className="policy-text">
              <strong>PAYMENT METHOD</strong>
              <span>Secure Payment</span>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Policy;
