import PropTypes from "prop-types";
import BreadCrumb from "./BreadCrumb/BreadCrumb";
import Gallery from "./Gallery/Gallery";
import Info from "./Info/Info";
import "./ProductDetails.css";
import Tabs from "./Tabs/Tabs";

const ProductDetails = ({ singleProduct, setSingleProduct }) => {
  if (!singleProduct) {
    return <p>Ürün bilgileri yükleniyor...</p>; // Veriler gelene kadar bir yükleniyor mesajı gösterebiliriz
  }

  return (
    <section className="single-product">
      <div className="conteiner">
        <div className="single-product-wrapper">
          <BreadCrumb />

          <div className="single-content">
            <main className="site-main">
              <Gallery singleProduct={singleProduct} />
              <Info singleProduct={singleProduct} />
            </main>
          </div>

          <Tabs
            singleProduct={singleProduct}
            setSingleProduct={setSingleProduct}
          />
        </div>
      </div>
    </section>
  );
};

ProductDetails.propTypes = {
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};

export default ProductDetails;
