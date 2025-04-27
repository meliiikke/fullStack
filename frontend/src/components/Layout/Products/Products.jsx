import "./Products.css";
import ProductItem from "./ProductItem";
import productsData from "../../../data.json";
import { useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";

function NextBtn({ onClick }) {
  return (
    <button
      className="glide__arrow glide__arrow--right"
      data-glide-dir=">"
      onClick={onClick}
    >
      <i className="bi bi-chevron-right"></i>
    </button>
  );
}

NextBtn.propTypes = {
  onClick: PropTypes.func,
};
function PrevBtn({ onClick }) {
  return (
    <button
      className="glide__arrow glide__arrow--left"
      data-glide-dir="<"
      onClick={onClick}
    >
      <i className="bi bi-chevron-left"></i>
    </button>
  );
}

PrevBtn.propTypes = {
  onClick: PropTypes.func,
};

const Products = () => {
  const [products] = useState(productsData);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const sliderSettings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplayeSpeed: 3000,
    autoplay: true,
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,

    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 520,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section className="products">
      Cart Sayisi :{cartItems.length}
      <div className="conteiner">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper   glide product-carousel">
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <ProductItem
                productItem={product}
                setCartItems={setCartItems}
                key={product.id}
              />
            ))}
          </Slider>

          <div className="glide__arrows" data-glide-el="controls"></div>
        </div>
      </div>
    </section>
  );
};

export default Products;
