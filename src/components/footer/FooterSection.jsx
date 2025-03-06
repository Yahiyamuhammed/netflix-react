import React from "react";
import styles from "./footerSection.module.css";

const FooterSection = () => {
  return (
    <div className={styles.footer}>
      <p className={styles.call}>Questions? Call 000-800-919-1743</p>

      {/* Links Grid */}
      <div className={styles.linksContainer}>
        <ul className={styles.linksList}>
          <li>FAQ</li>
          <li>Help Centre</li>
          <li>Account</li>
          <li>Media Centre</li>
          <li>Investor Relations</li>
          <li>Jobs</li>
      
          <li>Ways to Watch</li>
          <li>Terms of Use</li>
          <li>Privacy</li>
          <li>Cookie Preferences</li>
          <li>Corporate Information</li>
          <li>Contact Us</li>
      
          <li>Speed Test</li>
          <li>Legal Notices</li>
          <li>Only on Netflix</li>
        </ul>
      </div>

      {/* Language Selector */}
      <div className={styles.languageSelector}>
        <select>
          <option value="en">English</option>
          <option value="hi">हिन्दी</option>
        </select>
      </div>

      {/* Footer Text */}
      <p className={styles.footerText}>Netflix India</p>
    </div>
  );
};

export default FooterSection;
