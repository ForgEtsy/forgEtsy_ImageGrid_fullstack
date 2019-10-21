import faker from "faker";
import React from "react";
import style from "./MoreOptions.module.css";

const MoreOptions: React.FC<{}> = () => {
  const randomWords = [];
  const maxRandomQty = 20;
  const minRandomQty = 9;
  const thirds = 3;
  const randomCount =
    Math.floor(Math.random() * (maxRandomQty - minRandomQty)) + minRandomQty;
  const maxRandomFavorites = 15000;

  let date = faker.date.recent(randomCount).toDateString();
  const endOfDayInFakerDate = 4;
  date = date.slice(endOfDayInFakerDate);
  for (let i = 0; i < randomCount; i++) {
    if (i % thirds === 0) {
      randomWords.push(
        <div key={i} className={style.randomProductName}>
          {faker.company.bsAdjective()} & {faker.commerce.product()}
        </div>
      );
    } else {
      randomWords.push(
        <div key={i} className={style.randomProductName}>
          {faker.commerce.product()}
        </div>
      );
    }
  }
  return (
    <>
      <h4 className={style.moreOptionsTitle}>Explore more options</h4>
      <div className={style.moreOptionsContainer}>{randomWords}</div>
      <div className={style.additionalInformationContainer}>
        <p className={style.additionalInformationDate}>
          Listed on {date}{" "}
          <span className={style.fakeLink}>
            {faker.random.number(maxRandomFavorites)} favorites
          </span>{" "}
        </p>
        <p className={style.additionalInformationDate}>
          <span className={style.fakeReport}>Report this item to forgEtsy</span>
        </p>
      </div>
      <div className={style.getFresh}>
        Get fresh forgEtsy trends and unique gift ideas delivered right to your
        inbox.
        <div className={style.fieldDiv}>
          <div className={style.inputDiv}>
            <input
              type="text"
              className={style.input}
              id="email-text"
              placeholder="Enter your email"
              name="email_address"
            ></input>
          </div>
          <div className={style.buttonDiv}>
            <button type="submit" className={style.inputButton}>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MoreOptions;
