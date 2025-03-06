import styles from './image.module.css';

export default function Image() {
    return (
        <div className={styles.container}>
            <img 
                src="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg" 
                srcSet="https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_large.jpg 2000w, 
                        https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_medium.jpg 1279w, 
                        https://assets.nflxext.com/ffe/siteui/vlv3/04ef06cc-5f81-4a8e-8db0-6430ba4af286/web/IN-en-20250224-TRIFECTA-perspective_3a9c67b5-1d1d-49be-8499-d179f6389935_small.jpg 959w" 
                alt="" 
                className={styles.image}
            />

            <div className={styles.textOverlay}>
                <h1>Unlimited movies, TV shows and more</h1>
                <h2>Starts at ₹149. Cancel at any time.</h2>
                <p>Ready to watch? Enter your email to create or restart your membership.</p>
                <input type="email" placeholder="Enter your email" className={styles.input} />
                <button className={styles.button}>Get Started</button>
            </div>
        </div>
    );
}
