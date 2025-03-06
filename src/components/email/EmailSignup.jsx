import React from "react";
import styles from "./emailSignup.module.css";

const EmailSignup = () => {
  return (
    <div className={styles.container}>
      <p className={styles.text}>Ready to watch? Enter your email to create or restart your membership.</p>
      <div className={styles.inputGroup}>
        <input type="email" placeholder="Enter your email" className={styles.input} />
        <button className={styles.button}>Get Started</button>
      </div>
    </div>
  );
};

export default EmailSignup;