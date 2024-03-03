import CardList from "../components/cardList/CardList";
import styles from "./traseePage.module.css";
import Menu from "../components/Menu/Menu.jsx";

const BikeTrailsPage = ({ searchParams }) => {
  const page = parseInt(searchParams.page) || 1;
  const { cat } = searchParams;

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Trasee | {cat}</h1>
      <div className={styles.content}>
        <CardList page={page} cat={cat} />
        <Menu />
      </div>
    </div>
  );
};

export default BikeTrailsPage;
