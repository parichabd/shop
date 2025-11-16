import { TbListDetails } from "react-icons/tb";
import { TbShoppingBag } from "react-icons/tb";
import { Link } from "react-router-dom";
import { shortText } from "../Helper/helper";

import styles from "./Card.module.css";
function Card({ data }) {
  const { id, title, image, price } = data;
  return (
    <div className={styles.card}>
      <img src={image} alt="#" />
      <h3>{shortText(title)}</h3>
      <p>{price} $</p>
      <div className={styles.actions}>
        <Link to={`/products/${id}`}>
          <TbListDetails />
        </Link>
        <div>
          <button>
            <TbShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;

