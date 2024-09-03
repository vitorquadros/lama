import styles from './PostUser.module.css';

const PostUser = () => {
  return (
    <div className={styles.container}>
      <span className={styles.detailTitle}>Author</span>
      <span className={styles.detailValue}>Vitor Quadros</span>
    </div>
  );
};

export default PostUser;
