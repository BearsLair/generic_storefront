import Image from "../images/pexels-goumbik-292999.jpg";
import "../css/ProductCard.css";

function ProductCard() {
  return (
    <div className="card-div">
      <p className="card-title">A Shoe...</p>
      <img src={Image} className="card-img" />
      <p className="card-price">Price: $5.95</p>
      <button className="card-btn">Add to Cart</button>
    </div>
  );
}

export default ProductCard;
