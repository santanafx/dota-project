import HeroesTable from '../../components/HeroesTable/HeroesTable.tsx';
import HomePageNavBar from '../../components/HomePageNavBar/HomePageNavBar.tsx';
import HomePageSideBar from '../../components/HomePageSideBar/HomePageSideBar.tsx';
import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <div className={styles.homePage}>
      <HomePageNavBar />
      <div className={styles.homePage__homePageSideBar}>
        <HomePageSideBar />
      </div>
      <div className={styles.homePage__heroesTable}>
        <HeroesTable />
      </div>
    </div>
  );
}
