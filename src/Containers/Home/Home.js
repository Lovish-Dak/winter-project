import React from "react";
import { useSelector } from "react-redux";
import styles from "./Home.module.css";
//import Button from "../../Components/Button";
import Product from "../../Components/Product";
//import Header from "../../Components/Header";

const Home = () => {

  //const exampleState = useSelector(state => state.example.exampleState);

  return (
    <div className={styles.container}>
      <div className={styles.home__container}>
        {/* <img src="https://i.gadgets360cdn.com/large/amazon_best_movies_apr_2021_1618911475061.jpg?downsize=910:*" className={styles.home__image} alt="" /> */}
        <div className={styles.home__row}>
          <Product id="12321341" title="The lean Startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
          <Product id="49538094" title="Kenwwod kMix Stand Mixer for baking, stylish kitchen mixr withK-beater, Dough hook and whisk, 5 litre glass bowl" price={239.0} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg" />
          <Product id="12321341" title="The lean Startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
        </div>
        <div className={styles.home__row}>
          <Product id="4903850" title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor" price={199.99} rating={3} image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg" />
          <Product id="23445930" title="Amazon Echo (3rd Generation) | Smart speaker with Alexa, Charcoal Fabric" price={98.99} rating={5} image="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex25" />
          <Product id="3254354345" title="New apple iPad pro(12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)" price={598.99} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385.jpg" />
        </div>
        <div className={styles.home__row}>
          <Product id="90829332" title="Samsung curved LED Gaming Monitor - Super Ultra Wide Dual WQHD 5120 x 1440" price={1094.98} rating={4} image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX_355_.jpg" />
          <Product id="12321341" title="The lean Startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
          <Product id="12321341" title="The lean Startup" price={29.99} image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg" rating={5} />
        </div>
      </div>
    </div>
  );
};

export default Home;
