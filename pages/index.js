import Head from "next/head";
import Banner from "../components/Banner/Banner";
import SectionCard from "../components/Card/SectionCard/SectionCard";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";
import { getPopularVideos, getVideos } from "../lib/videos";

export async function getServerSideProps(context) {
  const disneyVideos = await getVideos("disney trailer");
  const productivityVideos = await getVideos("Productivity");

  const travelVideos = await getVideos("indie music");

  const popularVideos = await getPopularVideos();

  return {
    props: { disneyVideos, travelVideos, productivityVideos, popularVideos },
  };
}

export default function Home({
  disneyVideos,
  travelVideos,
  productivityVideos,
  popularVideos,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.main}>
        <Navbar />
        <Banner
          videoId="4zH5iYM4wJo"
          title="Clifford the red dog"
          subTitle="a very cute dog"
          imgUrl="/static/clifford.webp"
        />

        <div className={styles.sectionWrapper}>
          <SectionCard title="Disney" videos={disneyVideos} size="large" />
          <SectionCard title="Travel" videos={travelVideos} size="small" />
          <SectionCard
            title="Productivity"
            videos={productivityVideos}
            size="medium"
          />
          <SectionCard title="Popular" videos={popularVideos} size="small" />
        </div>
      </div>
    </div>
  );
}
