import React from 'react'
import styles from './CheckoutProduct.module.css'

function CheckoutProduct({ id, image, title, price, rating }) {

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
                <button>Remove from basket</button>
            </div>
        </div>
    )
}

export default CheckoutProduct
