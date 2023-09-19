import styles from "./Hero.module.css";
import Image from "next/image";

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heading}>A Simple Bookmark Manager</h1>
          <p className={styles.heroBody}>
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instantly. Try it for
            free.
          </p>
          <div className={styles.ctas}>
            <button className={styles.darkBtn}>Get it on Chrome</button>
            <button className={styles.lightBtn}>Get it on Firefox</button>
          </div>
        </div>
        <div className={styles.heroImages}>
          <div className={styles.heroImage}>
            <Image
              src="/illustration-hero.svg"
              alt="Bookermark Illustration Hero"
              height={500}
              width={700}
              layout="responsive"
              priority
            />
          </div>
        </div>
      </div>
      <div className={styles.heroBg}></div>
    </div>
  );
};

export default Hero;
