import PropTypes from 'prop-types';
import styles from '../styles/VideoCarousel.module.css';

export default function VideoCarousel({ videos }) {
  return (
    <div>
      <h3>Available Videos</h3>
      <div className={styles.carousel}>
        {videos.map((video) => (
          <div key={video.id /* eslint-disable-line react/no-array-index-key */} className={styles.videoCard}>
            <p className={styles.videoTitle}>{video.title}</p>
        
          </div>
        ))}
      </div>
    </div>
  );
}

VideoCarousel.propTypes = {
  videos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      price: PropTypes.number,
    })
  ).isRequired,
  onPurchase: PropTypes.func.isRequired,
};
