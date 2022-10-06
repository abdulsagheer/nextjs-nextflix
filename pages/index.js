import Banner from "../components/Banner/Banner";
import Card from "../components/Card/Card";
import Navbar from "../components/Navbar/Navbar";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>Netflix App</h1>
      <Navbar />
      <Banner />
      <Card />
    </div>
  );
}
