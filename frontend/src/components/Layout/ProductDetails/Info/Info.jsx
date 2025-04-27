import { useState } from "react";
import "./Info.css";

const Info = () => {
  const [activeClass, setActiveClass] = useState(0);
  const [sizeClass, setSizeClass] = useState(0);
  return (
    <div className="product-info">
      <h1 className="product-title">Analogue Resin Strap</h1>
      <div className="product-review">
        <ul className="product-star">
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-fill"></i>
          </li>
          <li>
            <i className="bi bi-star-half"></i>
          </li>
        </ul>
        <span>2 reviews</span>
      </div>
      <div className="product-price">
        <s className="old-price">165.00 TL</s>
        <strong className="new-price">100.00 TL</strong>
      </div>
      <p className="product-desc">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <form className="variations-form">
        <div className="variations">
          <div className="colors">
            <div className="colors-label">
              <span>Color</span>
            </div>
            <div className="colors-wrapper">
              <div
                className={`color-wrapper ${activeClass === 0 && "active"}`}
                onClick={() => setActiveClass(0)}
              >
                <label className="blue-color">
                  <input type="radio" name="product-color"></input>
                </label>
              </div>
              <div
                className={`color-wrapper ${activeClass === 1 && "active"}`}
                onClick={() => setActiveClass(1)}
              >
                <label className="red-color">
                  <input type="radio" name="product-color"></input>
                </label>
              </div>
              <div
                className={`color-wrapper ${activeClass === 2 && "active"}`}
                onClick={() => setActiveClass(2)}
              >
                <label className="green-color">
                  <input type="radio" name="product-color"></input>
                </label>
              </div>
              <div
                className={`color-wrapper ${activeClass === 3 && "active"}`}
                onClick={() => setActiveClass(3)}
              >
                <label className="purple-color">
                  <input type="radio" name="product-color"></input>
                </label>
              </div>
            </div>
          </div>
          <div className="values">
            <div className="values-label">
              <span>Size</span>
            </div>
            <div className="values-list">
              <span
                className={`${sizeClass === 0 && "active"}`}
                onClick={() => setSizeClass(0)}
              >
                XS
              </span>
              <span
                className={`${sizeClass === 1 && "active"}`}
                onClick={() => setSizeClass(1)}
              >
                S
              </span>
              <span
                className={`${sizeClass === 2 && "active"}`}
                onClick={() => setSizeClass(2)}
              >
                M
              </span>
              <span
                className={`${sizeClass === 3 && "active"}`}
                onClick={() => setSizeClass(3)}
              >
                L
              </span>
              <span
                className={`${sizeClass === 4 && "active"}`}
                onClick={() => setSizeClass(4)}
              >
                XL
              </span>
            </div>
          </div>
          <div className="cart-button">
            <input type="number" defaultValue="1" min="1" id="quantity" />
            <button
              className="btn btn-lg btn-primary"
              id="add-to-cart"
              type="button"
            >
              Add to Card
            </button>
          </div>
          <div className="product-extra-buttons">
            <a href="#">
              <i className="bi bi-globe"></i>
              <span>Size Guide</span>
            </a>
            <a href="#">
              <i className="bi bi-heart"></i>
              <span>Add to Wislist</span>
            </a>
            <a href="#">
              <i className="bi bi-share"></i>
              <span>Share This Product</span>
            </a>
          </div>
        </div>
      </form>
      <div className="divider"> </div>
      <div className="product-meta">
        <div className="product-sku">
          <span>SKU : </span>
          <strong> BE45VGRT</strong>
        </div>
        <div className="product-categories">
          <span>Categories: </span>
          <strong> Pants , Women</strong>
        </div>
        <div className="product-tags">
          <span>Tags : </span>
          <a href="#"> Black</a> ,<a href="#">White</a>
        </div>
      </div>
    </div>
  );
};

export default Info;
