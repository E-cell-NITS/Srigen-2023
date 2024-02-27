import React from "react";
import styles from "./Sponsors.module.scss";
import PreviousSponsors from "./PreviousSponsors";

const Sponsors = ({ bgColor }) => {
  const sectionBg = {
    background: bgColor.startsWith("linear-gradient") ? bgColor : bgColor,
  };

  const spanColor = "white";

  return (
    <div className={styles.sponsorsMain} style={sectionBg}>
      <div className={styles.sponsorsHeader}>
        <p className={styles.mainHeader}>Our Sponsors</p>
        <p className={styles.headerSubtext}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisi, augue mattis
          condimentum gravida ultrices nunc sagittis, faucibus lacus. Ornare urna nibh
          pellentesque odio senectus habitasse eu enim sit. Urna enim egestas diam nulla
          sit.
        </p>
      </div>
      <div className={styles.currSponsors}>
        <p className={styles.currSponsorsheader}>Current Sponsors</p>
        <div className={styles.brandItem1}>
          <p className={styles.brandText}>powered by</p>
          <img
            alt="text"
            className={`${styles.brandLogo1} ${styles.brandLogo}`}
            src="/logos/devfolio.png"
          />
        </div>
        <div className={styles.brandGrid}>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo2} ${styles.brandLogo}`}
              src="/logos/polygon.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo3} ${styles.brandLogo}`}
              src="/logos/mlh.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo4} ${styles.brandLogo}`}
              src="/logos/wolf.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo2} ${styles.brandLogo}`}
              src="/logos/polygon.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo3} ${styles.brandLogo}`}
              src="/logos/mlh.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo4} ${styles.brandLogo}`}
              src="/logos/wolf.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo2} ${styles.brandLogo}`}
              src="/logos/polygon.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo3} ${styles.brandLogo}`}
              src="/logos/mlh.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo4} ${styles.brandLogo}`}
              src="/logos/wolf.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo2} ${styles.brandLogo}`}
              src="/logos/polygon.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo3} ${styles.brandLogo}`}
              src="/logos/mlh.png"
            />
          </div>
          <div className={styles.brandItem}>
            <p className={styles.brandText}>powered by</p>
            <img
              alt="text"
              className={`${styles.brandLogo4} ${styles.brandLogo}`}
              src="/logos/wolf.png"
            />
          </div>
        </div>
      </div>

      <PreviousSponsors spanColor={spanColor} />
    </div>
  );
};

export default Sponsors;
