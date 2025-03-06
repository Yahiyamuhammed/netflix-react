import React from "react";
import styles from "./trendingCard.module.css";

const TrendingCard = ({ image, rank }) => {
  return (
    <div className={styles.card}>
      <img src={image} alt="Trending Movie" className={styles.movieImage} />
      <span className={styles.rank}>{rank}</span>
    </div>
  );
};

export default TrendingCard;
