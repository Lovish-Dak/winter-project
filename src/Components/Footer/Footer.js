import { dividerClasses } from '@mui/material';
import React from 'react';
import styles from "./Footer.module.css";
import { Link } from 'react-router-dom';


function Footer() {
    return (
        <div>
            <div className={styles.BackToTop}>Back To Top</div>

            <div className={styles.FooterVerticalRow}>
                <div className={styles.div_containing_all_columns}>
                    <div className={styles.column1}>
                        <div className={styles.heading}>Get to know us</div>

                        <ul>
                            <li className={styles.ListItem}>About Us</li>
                            <li className={styles.ListItem}>Careers</li>
                            <li className={styles.ListItem}>Press Releases</li>
                            <li className={styles.ListItem}>Amazon Cares</li>
                            <li className={styles.ListItem}>Gift a Smile</li>
                        </ul>
                    </div>
                    <div className={styles.column2}>
                        <div className={styles.heading}>Connect with us</div>
                        <ul>
                            <li className={styles.ListItem}>Facebook</li>
                            <li className={styles.ListItem}>Twitter</li>
                            <li className={styles.ListItem}>Instagaram</li>
                        </ul>
                    </div>
                    <div className={styles.column3}>
                        <div className={styles.heading}>Make Money With Us</div>
                        <ul>
                            <li className={styles.ListItem}>Sell on Amazon</li>
                            <li className={styles.ListItem}>Sell under Amazon Accelator</li>
                            <li className={styles.ListItem}>Amazon Global Selling</li>
                            <li className={styles.ListItem}>Become an Affiliate</li>
                            <li className={styles.ListItem}>Fulfilment by Amazon</li>
                            <li className={styles.ListItem}>Advertise Your Products</li>
                            <li className={styles.ListItem}>Amazon Pay on Merchants</li>
                        </ul>

                    </div>
                    <div className={styles.column4}>
                        <div className={styles.heading}>Let Us Help You</div>
                        <ul>
                            <li className={styles.ListItem}>COVID-19 and Amazon</li>
                            <li className={styles.ListItem}>Your Account</li>
                            <li className={styles.ListItem}>Returns Centre</li>
                            <li className={styles.ListItem}>100% Purchase Protection</li>
                            <li className={styles.ListItem}>Amazon App Download</li>
                            <li className={styles.ListItem}>Amazon Assistant Download</li>
                            <li className={styles.ListItem}>Help</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer