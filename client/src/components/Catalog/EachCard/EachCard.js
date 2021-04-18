import {Link} from 'react-router-dom'
import styles from './EachCard.module.css'

const EachCard = ({
    id,
    make,
    model,
    year,
    imageUrl
}) => {

    // console.log(id);
        return <div className={styles.each_card}>
        <article className={styles.catalog_article}>
            <img className={styles.catalog_img} src={imageUrl} alt="as" />
            <h3>Make: <span>{make}</span></h3>
            <h3>Model: <span>{model}</span></h3>
            <p>Production Year: <span>{year}</span></p>
        <Link to={`/cars/details/${id}`}><button className={styles.order_btn}>Order</button></Link>
        </article>
    </div>
}

export default EachCard;
