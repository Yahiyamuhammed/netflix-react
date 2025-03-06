import React from "react";
import styles from "./moreReasonsCard.module.css";
import tvIcon from "../../assets/monitor.svg";
import every from "../../assets/every.svg";
import dwnload from "../../assets/dwnload.svg";
import profile from "../../assets/profile.svg";

const MoreReasonsCard = () => {
  return (
    <div className={styles.div}>
      <h2 className={styles.heading}>More reasons to join</h2>
      <div className={styles.cardContainer}>
        <div className={styles.card}>
          <h3>Enjoy on your TV</h3>
          <p>
            Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray
            players and more.
          </p>
          <img src={tvIcon} alt="TV Icon" className={styles.icon} />
        </div>

        <div className={styles.card}>
          <h3>Download your shows</h3>
          <p>Save your favorites easily and always have something to watch.</p>
          <img src={dwnload} alt="Download Icon" className={styles.icon} />
        </div>

        <div className={styles.card}>
          <h3>Watch everywhere</h3>
          <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
          <img src={every} alt="Devices Icon" className={styles.icon} />
        </div>

        <div className={styles.card}>
          <h3>Create profiles for kids</h3>
          <p>Send kids on adventures with their favorite characters in a space made just for them.</p>
          <img src={profile} alt="Kids Icon" className={styles.icon} />
        </div>
      </div>
    </div>
  );
};

export default MoreReasonsCard;