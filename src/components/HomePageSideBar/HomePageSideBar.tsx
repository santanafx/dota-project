import styles from './HomePageSideBar.module.css';

export default function HomePageSideBar() {
  return (
        <div className={styles.homePageSideBar}>
            <nav className={styles.homePageSideBar__nav}>
                <li
                    className={`${styles.homePageSideBar__item} ${styles.homePageSideBar__firstItem}`}
                >
                    Table of heroes
                </li>
                <li className={styles.homePageSideBar__item}>Pro games</li>
                <li className={styles.homePageSideBar__item}>Pro players</li>
                <li className={styles.homePageSideBar__item}>Replays</li>
            </nav>
        </div>
  );
}
