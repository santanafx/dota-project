import logo from "../../assets/images/logo.jpeg";
import styles from "./HomePageNavBar.module.css";

export default function HomePageNavBar() {
    return (
        <div className={styles.homePageNavbar}>
            <nav className={styles.homePageNavbar__nav}>
                <img
                    className={styles.homePageNavbar__img}
                    src={logo}
                    alt="Website logo."
                />
                <input
                    className={`${styles.homePageNavbar__search} input`}
                    type="text"
                    placeholder="search for info"
                />
            </nav>
        </div>
    );
}
