import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Navbar username="abdulsagheeras29@gmail.com" />
      <Banner
        title="Clifford the red dog"
        subTitle="a very cute dog"
        imgUrl="/static/clifford.webp"
      />
      <Card imgUrl="/static/clifford.webp" size="large" />
      <Card imgUrl="/static/clifford.webp" size="medium" />
      <Card imgUrl="/static/clifford.webp" size="small" />
    </div>
  );
}
