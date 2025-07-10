import styles from '../styles/team.module.css';

export default function Team() {
  const founders = [
    {
      name: 'Matt Piechota',
      role: 'Co-Founder, A2A',
      bio: 'Matthew is a proud member of the Middlebury Football Team. He brings leadership and grit to A2A’s mission of empowering student-athletes.',
      image: '/pie.jpg',
    },
    {
      name: 'Owen Tross',
      role: 'Co-Founder, A2A',
      bio: 'Owen, a Middlebury Baseball player, is passionate about building opportunities for athletes beyond the field.',
      image: '/tross.jpg',
    },
    {
      name: 'Tony Wang',
      role: 'Co-Founder, A2A',
      bio: 'Tony, also on the Middlebury Football Team, combines athletic discipline with entrepreneurial drive to help scale A2A.',
      image: '/Tony.jpg',
    },
  ];

  return (
    <main className={styles.page}>
      <h1 className={styles.title}>Meet the Founders</h1>
      <div className={styles.grid}>
        {founders.map((person) => (
          <div key={person.name} className={styles.card}>
            <img src={person.image} alt={person.name} className={styles.image} />
            <h2 className={styles.name}>{person.name}</h2>
            <p className={styles.role}>{person.role}</p>
            <p className={styles.bio}>{person.bio}</p>
          </div>
        ))}
      </div>
    </main>
  );
}
