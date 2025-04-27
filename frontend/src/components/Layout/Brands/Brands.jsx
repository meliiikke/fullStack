import BrandItem from "./BrandItem";
import "./Brands.css"
const Brands = () => {
  return (
    <section className="brands">
      <div className="conteiner">
        <ul className="brand-list">
          <BrandItem/>
          <BrandItem/>
          <BrandItem/>
          <BrandItem/>
          <BrandItem/>
          <BrandItem/>
        </ul>
      </div>
    </section>
  );
};

export default Brands;
