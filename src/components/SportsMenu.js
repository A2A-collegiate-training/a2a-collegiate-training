import { useRouter } from 'next/router';
import { useState } from 'react';
import styles from '../styles/SportsMenu.module.css';

const sportsByGender = {
  men: ['Football', 'Hockey', 'Lacrosse', 'Baseball'],
  women: ['Hockey', 'Lacrosse', 'Field Hockey', 'Softball'],
};

export default function SportsMenu() {
  const router = useRouter();
  const [selectedGender, setSelectedGender] = useState(null);

  const handleNav = (sport) => {
    router.push(`/${sport.toLowerCase().replace(/\s+/g, '-')}`);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.topBar}>
        <div className={styles.container}>
          {!selectedGender ? (
            <div className={styles.genderSelect}>
              <button
                className={styles.genderButton}
                onClick={() => setSelectedGender('men')}
              >
                I am a Male Athlete
              </button>
              <button
                className={styles.genderButton}
                onClick={() => setSelectedGender('women')}
              >
                I am a Female Athlete
              </button>
            </div>
          ) : (
            <>
              {sportsByGender[selectedGender].map((sport) => (
                <div key={sport} className={styles.sportGroup}>
                  <button
                    className={styles.sportButton}
                    onClick={() => handleNav(sport)}
                  >
                    {sport}
                  </button>
                </div>
              ))}
            </>
          )}
        </div>

        {selectedGender && (
          <button
            className={styles.changeGenderButton}
            onClick={() => setSelectedGender(null)}
          >
            Change Gender
          </button>
        )}
      </div>
    </div>
  );
}
