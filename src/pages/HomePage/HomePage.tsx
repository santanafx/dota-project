import HeroesTable from "../../components/HeroesTable/HeroesTable";
import HomePageNavBar from "../../components/HomePageNavBar/HomePageNavBar";
import HomePageSideBar from "../../components/HomePageSideBar/HomePageSideBar";
import styles from "./HomePage.module.css";

export default function HomePage() {
    return (
        <div className={styles.homePage}>
            <HomePageNavBar />
            <div className={styles.homePage__HomePageSideBar}>
                <HomePageSideBar />
            </div>
            <div className={styles.homePage__HeroesTable}>
                <HeroesTable />
            </div>
        </div>
    );
}
