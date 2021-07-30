import React from "react";
import classes from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={classes.Footer}>
      <h5>
        &copy; {new Date().getFullYear()}
        <span>ComfySloth</span>
      </h5>
      <h5>
        Developed by <span> Mohamed_Diab</span>
      </h5>
    </div>
  );
};

export default Footer;
