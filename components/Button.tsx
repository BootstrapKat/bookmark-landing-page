import styles from "./Button.module.css";

interface ButtonProps {
  variant: "dark" | "light" | "special";
  link?: string;
  isExternal?: boolean;
  text: string;
  onClick?: () => void;
}

const Button = ({
  variant,
  link,
  isExternal = false,
  text,
  onClick,
}: ButtonProps) => {
  const handleButtonClick = () => {
    if (link) {
      if (isExternal) {
        window.open(link, "_blank", "noopener,noreferr");
      } else {
        window.location.href = link;
      }
    }
    if (onClick) {
      onClick();
    }
  };

  const className = `${styles["button"]} ${styles[variant]}`;

  const externalProps = isExternal
    ? {
        target: "_blank",
        rel: "noopener noreferrer",
      }
    : {};

  return link ? (
    <a href={link} className={className} {...externalProps}>
      {text}
    </a>
  ) : (
    <button type="button" className={className} onClick={handleButtonClick}>
      {text}
    </button>
  );
};

export default Button;
