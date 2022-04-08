import React from "react";

import {FaHandHoldingHeart} from "react-icons/fa";

import styles from "./Footer.module.css";

function Footer() {
  return (
    <div className={styles.footer}>
      
      
      <p className={styles.heading}>
         <span>BK </span> <span className={styles.footericon}><FaHandHoldingHeart /></span>
        </p>
   
     </div>
  );
  // return(true);
}

export default Footer;
