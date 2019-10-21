import React from "react";
import style from "./AboveFooterSection.module.css";

const AboveFooterSection: React.FC<{}> = () => {
  return (
    <div className={style.aboveFooterSection}>
      <div className={style.shopColumn}>
        <h4 className={style.shopColumn1}>Shop</h4>
        <div className={style.shopColumn2}>Gift Cards</div>
        <div className={style.shopColumn3}>forgEtsy Blog</div>
      </div>
      <div className={style.sellColumn}>
        <h4 className={style.sellColumn1}>Sell</h4>
        <div className={style.sellColumn2}>Sell on forgEtsy</div>
        <div className={style.sellColumn3}>Teams</div>
        <div className={style.sellColumn4}>Forums</div>
        <div className={style.sellColumn5}>Affiliates</div>
      </div>
      <div className={style.aboutColumn}>
        <h4 className={style.aboutColumn1}>About</h4>
        <div className={style.aboutColumn2}>forgEtsy, Inc</div>
        <div className={style.aboutColumn3}>Policies</div>
        <div className={style.aboutColumn4}>Investors</div>
        <div className={style.aboutColumn5}>Careers</div>
        <div className={style.aboutColumn6}>Press</div>
        <div className={style.aboutColumn7}>Impact</div>
      </div>
      <div className={style.helpColumn}>
        <h4 className={style.helpColumn1}>Help</h4>
        <div className={style.helpColumn2}>Help Center</div>
        <div
          style={{ padding: "3px 10px", textDecoration: "none" }}
          className={style.helpColumn3}
        >
          Download the forgEtsy App
        </div>
        <div style={{ textDecoration: "none" }} className={style.helpColumn4}>
          <i className="fa fa-instagram fa-2x" aria-hidden="true"></i>{" "}
          <i className="fa fa-facebook-official fa-2x" aria-hidden="true"></i>{" "}
          <i className="fa fa-pinterest fa-2x" aria-hidden="true"></i>{" "}
          <i className="fa fa-twitter fa-2x" aria-hidden="true"></i>{" "}
          <i className="fa fa-youtube-play fa-2x" aria-hidden="true"></i>
        </div>
      </div>
    </div>
  );
};

export default AboveFooterSection;
