import React from 'react'
import styles from './Checkout.module.css'
import CheckoutProduct from '../../Components/CheckoutProduct'
import Subtotal from '../../Components/Subtotal'
import { useStateValue } from '../../Redux/StateProvider'
//import { useStateValue } from './StateProvider'
//import Subtotal from './Subtotal'

function Checkout() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className={styles.checkout}>
            <div className={styles.checkout__left}>
                <img className={styles.checkout__ad} src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
                <div>
                    <h2 className={styles.checkout__title}>Your shopping Basket</h2>
                    {basket.map((item => (<CheckoutProduct id={item.id} title={item.title} price={item.price} image={item.image} rating={item.rating} />)))}
                </div>
            </div>
            <div className={styles.checkout__right}>
                <Subtotal />
            </div>
        </div>
    )
}

export default Checkout;
