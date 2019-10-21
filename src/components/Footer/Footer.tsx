import React from "react";
import style from "./Footer.module.css";

const Footer: React.FC<{}> = () => {
  return (
    <div className={style.footer}>
      <p className={style.textLeft}>United States | English(US) | $(USD)</p>
      <p className={style.textRight}>
        © 2019 forgEtsy, Inc{" "}
        <span className={style.fakeLink}>Terms of Use</span>{" "}
        <span className={style.fakeLink}>Privacy</span>
        <span className={style.fakeLink}>interest-based-ads</span>
      </p>
    </div>
  );
};

export default Footer;
