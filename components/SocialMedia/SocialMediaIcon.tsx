import FacebookIcon from "../SvgIcons/FacebookIcon";
import TwitterIcon from "../SvgIcons/TwitterIcon";

interface SocialMediaIconProps {
  name: string;
  url: string;
  fill?: string;
}

const SocialMediaIcon = ({
  name,
  url,
  fill = "#000",
}: SocialMediaIconProps) => {
  const renderIcon = () => {
    switch (name.toLowerCase()) {
      case "facebook":
        return <FacebookIcon fill={fill} />;
      case "twitter":
        return <TwitterIcon fill={fill} />;
      default:
        return null;
    }
  };

  return (
    <a href={url} target="_blank" rel="noopener noreferrer">
      {renderIcon()}
    </a>
  );
};

export default SocialMediaIcon;
