import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from '../styles/Navbar.module.css';

export default function Navbar() {
  const router = useRouter();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_title} onClick={() => router.push('/')}>
        <Image
          src="/A2ALogoAI.jpeg"
          alt="A2A Logo"
          width={100}
          height={100}
          className={styles.logo}
        />
        <span className={styles.title}>A2A Collegiate Training</span> 
      </div>
      <div className={styles.about_profile}>
        <button
          onClick={() => router.push('/team')}
          className={styles.about_button}
        >
          Our Team
        </button>
        <button
          onClick={() => router.push('/about')}
          className={styles.about_button}
        >
          Who We Are
        </button>
        <div
          className={styles.profile}
          onClick={() => router.push('/profile')}
        >
          Profile 
        </div>
      </div>
    </nav>
  );
}
