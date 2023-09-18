// NavBar.tsx
import styles from "./NavBar.module.css";
import { useRouter } from "next/router";
import Image from "next/image";
import { useState } from "react";
import SocialMediaShare from "./SocialMedia/SocialMediaShare";

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState<boolean>(false);
  const router = useRouter();

  const routes: Array<{
    name: string;
    route: string;
    type?: string;
    customClass?: string;
  }> = [
    { name: "Features", route: "/" },
    { name: "Pricing", route: "/dashboard" },
    { name: "Contact", route: "/" },
    { name: "Login", route: "#", type: "modal", customClass: "navBtn" },
  ];

  const mediaList = [
    { name: "Facebook", url: "https://www.facebook.com/", fill: "#FFF" },
    { name: "Twitter", url: "https://twitter.com/", fill: "#FFF" },
  ];

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const navigateTo = (route: string) => {
    router.push(route);
  };

  const handleModalOpen = () => {
    if (menuOpen) {
      setMenuOpen(false);
    }
    // Now open the modal as needed
    console.log("Open Modal");
  };

  return (
    <div className={styles.navContainer}>
      <div className={styles.navFlex}>
        <Image
          src="/logo-bookmark.svg"
          alt="Bookmark Logo"
          width={150}
          height={24}
          priority
        />
        <div className={styles.navWrapper}>
          {routes.map((item, index) => {
            if (item.type === "modal") {
              return (
                <div
                  key={index}
                  className={`${styles.navBtn} ${
                    styles[item.customClass ?? ""]
                  }`}
                  onClick={handleModalOpen}
                >
                  {item.name}
                </div>
              );
            }
            return (
              <div
                key={index}
                className={styles.navItem}
                onClick={() => navigateTo(item.route)}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className={styles.menuToggle} onClick={toggleMenu}>
          <Image
            src="/icon-hamburger.svg"
            alt="Bookmark Logo"
            width={150}
            height={24}
            priority
          />
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={
          menuOpen ? `${styles.mobileMenu} ${styles.open}` : styles.mobileMenu
        }
      >
        <div className={styles.navList}>
          <div className={styles.topBar}>
            <Image
              src="/logo-bookmark-white.svg"
              alt="Bookmark Logo"
              width={150}
              height={24}
              priority
            />
            {/* Close icon */}
            {menuOpen && (
              <div className={styles.closeIcon} onClick={toggleMenu}>
                X
              </div>
            )}
          </div>
          {routes.map((item, index) => {
            if (item.type === "modal") {
              return (
                <div
                  key={index}
                  className={`${styles.mobileMenuItem} ${
                    styles[item.customClass ?? ""]
                  }`}
                  onClick={handleModalOpen}
                >
                  {item.name}
                </div>
              );
            }
            return (
              <div
                key={index}
                className={styles.mobileMenuItem}
                onClick={() => {
                  navigateTo(item.route);
                  setMenuOpen(false); // Close menu when an item is clicked
                }}
              >
                {item.name}
              </div>
            );
          })}
        </div>
        <div className={styles.socialMedia}>
          <SocialMediaShare mediaList={mediaList} />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
