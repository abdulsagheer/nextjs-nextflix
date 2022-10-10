import Card from "../Card";
import styles from "./section-cards.module.css";
import Link from "next/link";

const SectionCard = (props) => {
  const { title, videos = [], size } = props;
  console.log({ videos });
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.cardWrapper}>
        {videos.map((video, idx) => {
          console.log({ video });
          return (
            <Link key={idx} href={`/video/${video.id}`}>
              <a>
                <Card key={idx} id={idx} imgUrl={video.imgUrl} size={size} />
              </a>
            </Link>
          );
        })}
      </div>
    </section>
  );
};

export default SectionCard;
