import styles from "./Hero.module.css";
import Image from "next/image";
import Button from "./Button";
import Shape from "./Shape";

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
      <div className="heroBg">
        <Shape
          position="right"
          borderTopLeftRadius="50% 200px"
          borderBottomLeftRadius="50% 300px"
          color="hsl(231, 69%, 60%)"
          desktopWidth="35vw"
          desktopHeight="24vw"
          mobileWidth="70vw"
          mobileHeight="50vw"
          desktopTop="155px"
          mobileTop="20vw"
        />
      </div>
      {/* <div className={styles.heroBg}></div> */}
    </div>
  );
};

export default Hero;
