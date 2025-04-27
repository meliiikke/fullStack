import BreadCrumb from "./BreadCrumb/BreadCrumb";
import Gallery from "./Gallery/Gallery";
import Info from "./Info/Info";
import "./ProductDetails.css";
import Tabs from "./Tabs/Tabs";

const ProductDetails = () => {
  return (
    <section className="single-product">
      <div className="conteiner">
        <div className="single-product-wrapper">
          <BreadCrumb />

          <div className="single-content">
            <main className="site-main">
              <Gallery />
              <Info />
            </main>
          </div>

          <Tabs />
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
