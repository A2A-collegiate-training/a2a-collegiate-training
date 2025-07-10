import { useRouter } from 'next/router';
import styles from '../../styles/AthletePage.module.css';

export default function AthleteProfile() {
  const router = useRouter();
  const { sport, athlete } = router.query;

  const name = athlete?.replace(/-/g, ' ');
  const imgSrc = `/${athlete}.jpg`;

  // 🔹 Mock video titles only
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
        <p className={styles.bio}>
         Hello everyone, I am Tom Brady currently retired........
        </p>
      </div>

      <div className={styles.contentSection}>
        <h2 className={styles.contentTitle}>Athlete Content</h2>
        <div className={styles.videoGrid}>
          {mockVideos.map((video, index) => (
              // eslint-disable-next-line react/no-array-index-key
            <div key={index} className={styles.videoCard}>
              <p className={styles.videoTitle}>{video.title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
