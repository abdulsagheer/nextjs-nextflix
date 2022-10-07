import Head from "next/head";
import Banner from "../components/Banner/Banner";
import SectionCard from "../components/Card/SectionCard/SectionCard";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  const disneyVideos = [
    {
      imgUrl: "/static/clifford.webp",
    },
    {
      imgUrl: "/static/clifford.webp",
    },
    {
      imgUrl: "/static/clifford.webp",
    },
  ];
  return (
    <div className={styles.container}>
      <Head>
        <title>Netflix</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar username="abdulsagheeras29@gmail.com" />
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />

      <div className={styles.sectionWrapper}>
        <SectionCard title="Disney" videos={disneyVideos} size="large" />
        <SectionCard title="Disney" videos={disneyVideos} size="medium" />
      </div>
    </div>
  );
}
