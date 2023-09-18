import SocialMediaIcon from "./SocialMediaIcon";
import styles from "./SocialMediaShare.module.css";

interface SocialMedia {
  name: string;
  url: string;
  fill?: string;
}

interface SocialMediaShareProps {
  mediaList: SocialMedia[];
}

const SocialMediaShare = ({ mediaList }: SocialMediaShareProps) => {
  return (
    <div className={styles.socialMediaShare}>
      {mediaList.map((media, index) => (
        <SocialMediaIcon
          key={index}
          name={media.name}
          url={media.url}
          fill={media.fill}
        />
      ))}
    </div>
  );
};

export default SocialMediaShare;
