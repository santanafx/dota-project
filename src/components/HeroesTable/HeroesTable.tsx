import { useEffect } from "react";
import styles from "./HeroesTable.module.css";
import { useDispatch } from "react-redux";
import { fetchTable } from "./heroesTableSlice";

export default function HeroesTable() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchTable());
    }, []);

    return (
        <div className={styles.heroesTable}>
            <div className={styles.heroesTable__tableContainer}>
                <table className={styles.heroesTable__table}>
                    <thead>
                        <tr>
                            <th>HERO</th>
                            <th>Atribute</th>
                            <th>Winrate %</th>
                            <th>Pick %</th>
                            <th>XPM</th>
                            <th>GPM</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Antimage</td>
                            <td>AGI</td>
                            <td>50%</td>
                            <td>43%</td>
                            <td>750</td>
                            <td>821</td>
                        </tr>
                        <tr>
                            <td>Axe</td>
                            <td>STR</td>
                            <td>48%</td>
                            <td>43%</td>
                            <td>500</td>
                            <td>780</td>
                        </tr>
                        <tr>
                            <td>Dazzle</td>
                            <td>INT</td>
                            <td>50%</td>
                            <td>43%</td>
                            <td>750</td>
                            <td>821</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    );
}
