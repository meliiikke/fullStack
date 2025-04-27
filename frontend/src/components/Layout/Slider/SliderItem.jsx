import PropTypes from "prop-types";

const SliderItem = ({ imageSrc }) => {
  return (
    <div className="slider-item fade">
      <div className="slider-image">
        <img src={imageSrc} className="img-fluid" alt="" />
      </div>
      <div className="conteiner">
        <p className="slider-title">SUMMMER 2025</p>
        <h2 className="slider-heading">Save up to %70</h2>
        <a href="#" className="btn btn-primary btn-lg">
          Explore Now
        </a>
      </div>
    </div>
  );
};

export default SliderItem;

SliderItem.protoTypes = {
  imageSrc: PropTypes.string,
};
