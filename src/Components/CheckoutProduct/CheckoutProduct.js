import React from 'react'
import styles from './CheckoutProduct.module.css'
import { useStateValue } from '../../Redux/StateProvider'

function CheckoutProduct({ id, image, title, price, rating }) {
    const [{ basket }, dispatch] = useStateValue();
    const removeFromBasket = () => {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id,
        })
    }
    return (
        <div className={styles.checkoutProduct}>
            <img className={styles.checkoutProduct__image} src={image} alt="" />
            <div className={styles.checkoutProduct__info}>
                <p className={styles.checkoutProduct__title}>{title}</p>
                <p className={styles.checkoutProduct__price}>
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className={styles.checkoutProduct__rating}>
                    {Array(rating).fill().map((_, i) => (<p>&#11088;</p>))}
                </div>
                <button onClick={removeFromBasket}>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
