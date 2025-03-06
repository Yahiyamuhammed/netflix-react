import React from "react";
import styles from "./faq.module.css";

const faqs = [
  "What is Netflix?",
  "How much does Netflix cost?",
  "Where can I watch?",
  "How do I cancel?",
  "What can I watch on Netflix?",
  "Is Netflix good for kids?"
];

const FAQ = () => {
  return (
    <div className={styles.faqContainer}>
      <h2 className={styles.heading}>Frequently Asked Questions</h2>
      <div className={styles.faqList}>
        {faqs.map((question, index) => (
          <div key={index} className={styles.faqItem}>
            <span className={styles.span}>{question}</span>
            <span className={styles.plus}>+</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
