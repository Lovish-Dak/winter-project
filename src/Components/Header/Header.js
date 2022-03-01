import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./Header.module.css";
import { useStateValue } from '../../Redux/StateProvider';
import { Link } from 'react-router-dom';

function Header() {
    const [{ basket, dispatch }] = useStateValue();
    return (
        <div className={styles.header}>
            <Link to="/">
                <img className={styles.header__logo} src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="" />
            </Link>
            <div className={styles.header__search}>
                <input type="text" className={styles.header__searchInput} />
                <SearchIcon className={styles.header__searchIcon} />
            </div>
            <div className={styles.header__nav}>
                <Link to="/login" style={{ textDecoration: 'none' }}>
                    <div className={styles.header__option}>
                        <span className={styles.header__optionLineOne}>Hello Guest</span>
                        <span className={styles.header__optionLineTwo}>Sign In</span>
                    </div>
                </Link>
                <div className={styles.header__option}>
                    <span className={styles.header__optionLineOne}>Returns</span>
                    <span className={styles.header__optionLineTwo}>& Orders</span>
                </div>
                <div className={styles.header__option}>
                    <span className={styles.header__optionLineOne}>Your</span>
                    <span className={styles.header__optionLineTwo}>Prime</span>
                </div>
                <Link to="/checkout"style={{ textDecoration: 'none' }}>
                    <div className={styles.header__optionBasket}>
                        <ShoppingCartIcon />
                        <span className={styles.header__optionLineTwo.header__basketCount}>{basket?.length}</span>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default Header
//Header over
