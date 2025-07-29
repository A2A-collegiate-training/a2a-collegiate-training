import { useRouter } from 'next/router';
import styles from '../../../styles/AthletePage.module.css';
import VideoCarousel from '../../../components/VideoCarousel';

export default function AthleteProfile() {
  const router = useRouter();
  const { sport, athlete } = router.query;

  const name = athlete?.replace(/-/g, ' ');
  const imgSrc = `/${athlete}.jpg`;

  // Mock: only these athletes offer subscriptions
  const offersSubscription = ['brady'].includes(athlete);

  const mockVideos = [
    { title: 'Video 1' },
    { title: 'Video 2' },
    { title: 'Video 3' },
    { title: 'Video 4' },
    { title: 'Speed Drills Video' },
  ];

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>{name}</h1>
      <p className={styles.subtitle}>{sport}</p>

      <div className={styles.profileContainer}>
        <img src={imgSrc} alt={name} className={styles.profileImage} />
        <div className={styles.profileText}>
          <p className={styles.bio}>
            Hello everyone, I am {name}. Currently retired...
          </p>

          {offersSubscription && (
            <div className={styles.subscription}>
              <p>Subscribe to get access to exclusive chat and premium content.</p>
              <button className={styles.subscribeButton}>Subscribe Now</button> 
            </div>
          )}
        </div>
      </div>

      <div className={styles.contentSection}>
        <h2 className={styles.contentTitle}>Athlete Content</h2>
        <VideoCarousel videos={mockVideos} />
      </div>
    </div>
  );
}
