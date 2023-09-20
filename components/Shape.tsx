import styles from "./Shape.module.css";
import { useWindowSize } from "../hooks/useWindowSize";

interface ShapeProps {
  position: "left" | "right";
  borderTopLeftRadius?: string;
  borderBottomLeftRadius?: string;
  borderTopRightRadius?: string;
  borderBottomRightRadius?: string;
  color: string;
  desktopWidth: string;
  desktopHeight: string;
  mobileWidth?: string;
  mobileHeight?: string;
  desktopTop?: string;
  mobileTop?: string;
}

const Shape = ({
  position,
  borderTopLeftRadius,
  borderBottomLeftRadius,
  borderTopRightRadius,
  borderBottomRightRadius,
  color,
  desktopWidth,
  desktopHeight,
  mobileWidth,
  mobileHeight,
  desktopTop,
  mobileTop,
}: ShapeProps) => {
  const windowSize = useWindowSize();

  let shapeWidth: string | undefined = desktopWidth;
  let shapeHeight: string | undefined = desktopHeight;
  let shapeTop: string | undefined = desktopTop;

  if (windowSize) {
    const { width } = windowSize;
    console.log(width);
    if (width <= 768) {
      shapeWidth = mobileWidth;
      shapeHeight = mobileHeight;
      shapeTop = mobileTop;
    }
  }

  console.log(desktopWidth);

  const customStyle: React.CSSProperties = {
    width: shapeWidth,
    height: shapeHeight,
    backgroundColor: color,
    right: position === "right" ? 0 : "auto",
    left: position === "left" ? 0 : "auto",
    top: shapeTop,
    borderTopLeftRadius: borderTopLeftRadius,
    borderBottomLeftRadius: borderBottomLeftRadius,
    borderTopRightRadius: borderTopRightRadius,
    borderBottomRightRadius: borderBottomRightRadius,
  };

  return <div className={styles.shape} style={customStyle}></div>;
};

export default Shape;
