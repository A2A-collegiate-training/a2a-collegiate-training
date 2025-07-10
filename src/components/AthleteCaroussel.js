
import { useRouter } from 'next/router';
import styles from '../styles/AthleteCarousel.module.css';
import PropTypes from 'prop-types';

//In the future we will only fetch the name, slug and img for that particular athlete. Based on the sport. We will pass the slug in the url 
// From there we will be able to fetch all of that athletes information in Athletes page based on his slug. 

const mockData = {
    football: {
      Quarterback: [
        { name: 'Tom Brady', slug: 'brady', img: 'brady.jpg' },
        { name: 'Aaron Rodgers', slug: 'rodgers', img: 'rodgers.jpg' },
      ],
      Receiver: [
        { name: 'Miles Sanders', slug: 'miles', img: 'miles.jpg' },
      ],
      },
    
    hockey: {
      Forward: [
        { name: 'Liam Fraser', slug: 'fraser', img: 'liam.jpg' },
      ],
      Goalie: [
        { name: 'Ethan Roy', slug: 'roy', img: '/ethan.jpg' },
      ],
    },
  };

export default function AthleteCarousel({ sport }) {
const router = useRouter();
  const lowerSport = sport?.toLowerCase();
  const data = mockData[lowerSport];
  
  const handleClick = (slug) => {
    router.push(`/${lowerSport}/${slug}`);
  };
  if (!data) {
    return <p>No athletes available for this sport/position yet.</p>;
  }

  return (
    <div className={styles.carouselWrapper}>
      {Object.entries(data).map(([position, athletes]) => (
        <div key={position} className={styles.positionBlock}>
          <h3 className={styles.positionTitle}>{position}</h3>
          <div className={styles.carousel}>
          {athletes.map((athlete) => (
              <div
                key={athlete.slug}
                className={styles.card}
                onClick={() => handleClick(athlete.slug)}
                style={{ cursor: 'pointer' }}
              >
                <img src={athlete.img} alt={athlete.name} className={styles.image} />
                <p className={styles.name}>{athlete.name}</p>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


AthleteCarousel.propTypes = {
    sport: PropTypes.string.isRequired,
  };