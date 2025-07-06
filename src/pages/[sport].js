import { useRouter } from 'next/router';
import Head from 'next/head';
import styles from '../styles/sport.module.css';

export default function SportPage() {
  const router = useRouter();
  const { sport } = router.query;

  const capitalizedSport = sport ? sport.charAt(0).toUpperCase() + sport.slice(1) : '';

  return (
    <>
      <Head>
        <title>{capitalizedSport} | A2A</title>
        <meta name="description" content={`Shop A2A's gear for ${capitalizedSport}.`} />
      </Head>

      <main className={styles.page}>
        <h1 className={styles.title}>
          {capitalizedSport} Stuff
        </h1>
        <p className={styles.description}>
          Explore our content for {capitalizedSport}.
        </p>
      </main>
    </>
  );
}
