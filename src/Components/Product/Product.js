import React from 'react'
import styles from './Product.module.css'
import { useStateValue } from '../../Redux/StateProvider'

function Product({ id, title, price, rating, image }) {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket);
    const addToBasket = () => {
        //Dispatch the item into the data layer.
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
            },
        })
    }
    return (
        <div className={styles.product}>
            <div className={styles.product__info}>
                <p>{title}</p>
                <p className={styles.product__price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={styles.product__rating}>
                    {Array(rating).fill().map((_, i) => (
                        <p>&#11088;</p>
                    ))}
                </div>
            </div>
            <img src={image} alt="" />
            <button onClick={addToBasket}>Add to basket</button>
        </div>
    )
}

export default Product
