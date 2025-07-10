
import styles from '../styles/ProfilePage.module.css';

export default function ProfilePage() {
// MOCK Data
  const user = {
    firstName: 'William',
    lastName: 'Zambito',
    email: 'wzambito@middlebury.edu',
    sport: 'Football',
  };

  const purchasedVideos = [
    {
      sport: 'Football',
      position: 'Quarterback',
      athlete: 'Tom Brady',
      videoUrl: 'https://youtu.be/xvFZjo5PgG0?si=kMgKlAj9iZl_whn6',
    },
    {
      sport: 'Hockey',
      position: 'Goalie',
      athlete: 'Ethan Roy',
      videoUrl: 'https://youtu.be/xvFZjo5PgG0?si=kMgKlAj9iZl_whn6',
    },
  ];

  return (
    <div className={styles.page}>
      <h1 className={styles.title}>My Profile</h1>

      <div className={styles.profileInfo}>
        <p><strong>First Name:</strong> {user.firstName}</p>
        <p><strong>Last Name:</strong> {user.lastName}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Sport:</strong> {user.sport}</p>
      </div>

      <div className={styles.tableSection}>
        <h2>Purchased Videos</h2>
        <table className={styles.videoTable}>
          <thead>
            <tr>
              <th>Sport</th>
              <th>Position</th>
              <th>Athlete Name</th>
              <th>Video Link</th>
            </tr>
          </thead>
          <tbody>
            {purchasedVideos.map((video, index) => (
                 // eslint-disable-next-line react/no-array-index-key
              <tr key={index}>
                <td>{video.sport}</td>
                <td>{video.position}</td>
                <td>{video.athlete}</td>
                <td>
                  <a href={video.videoUrl} target="_blank" rel="noopener noreferrer">
                    Watch Video
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
