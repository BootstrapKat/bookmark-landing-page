import styles from "./Hero.module.css";
import Image from "next/image";
import Button from "./Button";

const Hero = () => {
  const handleClick = () => {
    alert("Button clicked!");
  };

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
            <Button
              variant="dark"
              text="Get it on Chrome"
              link="https://www.google.com"
              isExternal={true}
            />
            <Button
              variant="light"
              text="Get it on Firefox"
              onClick={handleClick}
            />
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
