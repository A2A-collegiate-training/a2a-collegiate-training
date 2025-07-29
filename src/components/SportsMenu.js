import { useRouter } from 'next/router';
import styles from '../styles/SportsMenu.module.css';

const sports = [
  'Football',
  'Basketball',
  'Baseball',
  'Softball',
  'Lacrosse',
  'Soccer',
  'Hockey',
].sort();

export default function SportsMenu() {
  const router = useRouter();

  const handleNav = (sport) => {
    router.push(`/${sport.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          {sports.map((sport) => (
            <div key={sport} className={styles.sportGroup}>
              <button
                className={styles.sportButton}
                onClick={() => handleNav(sport)}
              >
                {sport}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
