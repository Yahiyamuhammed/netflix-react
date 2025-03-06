import styles from "./curveBackground.module.css";

export default function CurveBackground() {
    return (
        <div className={styles.curveContainer}>
            <div className={styles.curve}></div>
        </div>
    );
}
