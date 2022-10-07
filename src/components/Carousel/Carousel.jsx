import * as React from "react";
import classNames from "classnames";

import styles from "./Carousel.module.scss";

const hella = 3;

export default function Carousel({ reverse, items }) {
  return (
    <div
      className={classNames(
        styles.carousel,
        "font-monument text-white text-3xl leading-none"
      )}
    >
      {" "}
      {Array.from({ length: 2 }, (_, idx) => (
        <p
          className={classNames(styles.marquee, {
            [styles.marquee2]: idx,
          })}
          key={idx}
        >
          <span>
            {" "}
            {Array.from({ length: hella }, (_, j) => (
              <React.Fragment key={j}>
                {" "}
                {items.map((item, k) => (
                  <span className={styles.marqueeTextItem} key={k}>
                    {" "}
                    {item}{" "}
                  </span>
                ))}{" "}
              </React.Fragment>
            ))}{" "}
          </span>{" "}
        </p>
      ))}{" "}
    </div>
  );
}
