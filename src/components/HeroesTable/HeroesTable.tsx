import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styles from './HeroesTable.module.css';
import { RootReducer } from '../../store/store.ts';
import { fetchTable } from './heroesTableSlice.ts';

export default function HeroesTable() {
  const dispatch = useDispatch();
  const heroesTable = useSelector(
    (store: RootReducer) => store.heroesTable.data.heroes,
  );

  // console.log(heroesTable);
  // console.log(heroesTable.heroes.length);

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
          {heroesTable
            ? heroesTable.map((e) => (
              <tbody key={e.name}>
                <tr>
                  <td>{e.name}</td>
                  <td>{e.atribute}</td>
                  <td>{e.winrate}</td>
                  <td>{e.pickrate}</td>
                  <td>{e.xpm}</td>
                  <td>{e.gpm}</td>
                </tr>
              </tbody>
            ))
            : ''}
        </table>
      </div>
    </div>
  );
}
