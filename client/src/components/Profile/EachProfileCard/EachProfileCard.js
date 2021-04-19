import { Link } from "react-router-dom";
import styles from "./EachProfileCard.module.css";

const EachProfileCard = ({ id, make, model, year, imageUrl }) => {
  const onDeleteSubmitHandler = () => {
    fetch(`http://localhost:5000/cars?id=${id}`, {
      method: "DELETE",
    }).then(() => this.setState({ status: "Delete successful" }));
  };

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
        <p>
          Production Year: <span>{year}</span>
        </p>
        <Link to={`/cars/edit/${id}`}>
          <button className={styles.order_btn}>Edit Order</button>
        </Link>
        <Link to={`/cars/delete/${id}`}>
          <button onClick={onDeleteSubmitHandler} className={styles.order_btn}>
            Cancel Order
          </button>
        </Link>
      </article>
    </div>
  );
};

export default EachProfileCard;
