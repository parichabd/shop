import { TbListDetails } from "react-icons/tb";
import { TbShoppingBag } from "react-icons/tb";
import { Link } from "react-router-dom";
import { shortText } from "../Helper/helper";

import styles from "./Card.module.css";
import { useCart } from "../Context/CartContext";
function Card({ data }) {
  const { id, title, image, price } = data;
  const [state, dispatch] = useCart();
  console.log(state);
  const clickHandlere = () => {
    dispatch({ type: "REMOVE_ITEM", payload: data });
  };
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
          <button onClick={clickHandlere}>
            <TbShoppingBag />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
