import React from "react";
import classes from "./Header.module.css";
import imgOne from '../../../assets/hero-bcg.jpeg'
import imgTwo from '../../../assets/hero-bcg-2.jpeg'
const Header = () => {
  return (
    <div className={`${classes.header} container`}>
      <div className={classes.content}>
        <h2>
          Design Your <br />
          Comfort Zone
        </h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, at
          sed omnis corporis doloremque possimus velit! Repudiandae nisi odit,
          aperiam odio ducimus, obcaecati libero et quia tempora excepturi quis
          alias?
        </p>
        <button>SHOP NOW</button>
      </div>

      <div className={classes.images}>
        <img src={imgOne } alt='hero-bcg.jpeg' />
        <img  src={imgTwo} alt='hero-bcg2.jpeg'/>
      </div>
    </div>
  );
};

export default Header;
