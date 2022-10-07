import Image from "next/image";
import { useState } from "react";
import styles from "./card.module.css";

const Card = ({ imgUrl, size }) => {
  const classMap = {
    large: styles.lgItem,
    medium: styles.mdItem,
    small: styles.smItem,
  };

  const [imgSrc, setImgSrc] = useState(imgUrl);

  const handleError = () => {
    console.log("Hii Error");
    setImgSrc(
      "https://images.unsplash.com/photo-1485846234645-a62644f84728?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1459&q=80"
    );
  };

  return (
    <div className={styles.container}>
      <div className={classMap[size]}>
        <Image
          src={imgUrl}
          alt="image"
          layout="fill"
          onError={handleError}
          className={styles.cardImg}
        />
      </div>
    </div>
  );
};

export default Card;
