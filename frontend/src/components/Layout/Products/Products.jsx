import "./Products.css";
import ProductItem from "./ProductItem";
import { useEffect, useState } from "react";
import Slider from "react-slick";
import PropTypes from "prop-types";
import { message } from "antd";

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
  const [products, setProducts] = useState([]);
  const apiUrl = import.meta.env.VITE_API_BASE_URL;

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/products`);

        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          message.error("Veri Getirme Başarısız");
        }
      } catch (error) {
        console.log("Veri Hatası:", error);
      }
    };
    fetchProducts();
  }, [apiUrl]);

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
      <div className="conteiner">
        <div className="section-title">
          <h2>Featured Products</h2>
          <p>Summer Collection New Morden Design</p>
        </div>
        <div className="product-wrapper   glide product-carousel">
          <Slider {...sliderSettings}>
            {products.map((product) => (
              <ProductItem productItem={product} key={product._id} />
            ))}
          </Slider>

          <div className="glide__arrows" data-glide-el="controls"></div>
        </div>
      </div>
    </section>
  );
};

export default Products;
