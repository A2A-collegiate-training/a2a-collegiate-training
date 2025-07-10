import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../../styles/sport.module.css';
import AthleteCarousel  from '@/components/AthleteCaroussel';

export default function SportPage() {
  const router = useRouter();
  const { sport } = router.query;

  const capitalizedSport = sport ? sport.charAt(0).toUpperCase() + sport.slice(1) : '';


  const backgroundImage = sport ? `${sport.toLowerCase()}.jpg` : 'default.jpg';

  return (
    <>
      <Head>
      <title>{`${capitalizedSport} | A2A`}</title> 
        <meta name="description" content={`Shop A2A's gear for ${capitalizedSport}.`} />
      </Head>

      <main className={styles.page}>

        <section
          className={styles.hero}
          style={{ backgroundImage: `url(${backgroundImage})` }}
        >
          <div className={styles.overlay}>
            <h1 className={styles.heroText}>{capitalizedSport}</h1>
          </div>
        </section>

        <section className={styles.content}>
          <h2 className={styles.title}>Our Athletes</h2>
          <p className={styles.description}>
            Meet the athletes who represent A2A in {capitalizedSport}.
          </p>
          <AthleteCarousel sport={sport} />
        </section>
      </main>
    </>
  );
}
