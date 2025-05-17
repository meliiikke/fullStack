import PropTypes from "prop-types";
import ReviewForm from "./ReviewForm";
import ReviewItem from "./ReviewItem";
import "./Reviews.css";
import { useEffect, useState } from "react";
import { message } from "antd";
const Reviews = ({ active, singleProduct, setSingleProduct }) => {
  const apiUrl = import.meta.env.VITE_API_BASE_URL;
  const thisReview = [];

  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch(`${apiUrl}/api/users`);

        if (response.ok) {
          const data = await response.json();
          setUsers(data);
        } else {
          message.error("Veri Getirme Başarısız");
        }
      } catch (error) {
        console.log("Veri Hatası:", error);
      }
    };
    fetchUsers();
  }, [apiUrl]);

  singleProduct &&
    singleProduct.reviews.forEach((review) => {
      const matchingUsers = users?.filter((user) => user._id === review.user);

      matchingUsers.forEach((matchingUser) => {
        thisReview.push({
          review: review,
          user: matchingUser,
        });
      });
    });
  return (
    <div className={`tab-panel-reviews ${active}`}>
      {singleProduct && singleProduct.reviews.length > 0 ? (
        <>
          <h3>{thisReview.length} Yorum</h3>
          <div className="comments">
            <ol className="comment-list">
              {thisReview.map((item, index) => (
                <ReviewItem key={index} item={item} reviewItem={item} />
              ))}
            </ol>
          </div>
        </>
      ) : (
        <h3>Yorum yok</h3>
      )}

      <div className="review-form-wrapper">
        <h2>Add a Review</h2>
        <ReviewForm
          singleProduct={singleProduct}
          setSingleProduct={setSingleProduct}
        />
      </div>
    </div>
  );
};

export default Reviews;

Reviews.propTypes = {
  active: PropTypes.string,
  singleProduct: PropTypes.object,
  setSingleProduct: PropTypes.func,
};
