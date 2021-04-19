import { Link } from "react-router-dom";
import styles from "./EachProfileCard.module.css";

const EachProfileCard = ({ id, make, model, year, imageUrl }) => {
  console.log(id);
  return (
    <div className={styles.each_card}>
      <article className={styles.catalog_article}>
        <img className={styles.catalog_img} src={imageUrl} alt="as" />
        <h3>
          Make: <span>{make}</span>
        </h3>
        <h3>
          Model: <span>{model}</span>
        </h3>
        <Link to={`/cars/details/${id}/edit`}>
          <button className={styles.order_btn}>Edit Order</button>
        </Link>
      </article>
    </div>
  );
};

export default EachProfileCard;
