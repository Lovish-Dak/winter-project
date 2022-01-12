import React from 'react'
import styles from './Subtotal.module.css'
import CurrencyFormat from "react-currency-format"
import { useStateValue } from "./StateProvider";
import { getBasketTotal } from "./reducer";

function Subtotal() {
    const [{ basket }, dispatch] = useStateValue();
    return (
        <div className={styles.subtotal}>
            <CurrencyFormat renderText={(value) => (
                <>
                    <p>
                        Subtotal ({basket?.length} items): <strong>{value}</strong>
                    </p>
                    <small className={styles.subtotal_gift}>
                        <input type={styles.checkbox} />This order contains a gift
                    </small>
                </>
            )}

                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
            />
            {/* <CurrencyFormat
                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
                renderText={(value) => {
                    <>
                        <p>
                            Subtotal (0 items): <strong>0</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox" />This order contains a gift.
                        </small>
                    </>
                }}
            /> */}
            <button>Proceed to checkout</button>
        </div>
    );
}

export default Subtotal
