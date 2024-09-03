import Image from 'next/image';
import styles from './PostCard.module.css';
import Link from 'next/link';

const PostCard = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image
            src="https://images.pexels.com/photos/27703479/pexels-photo-27703479/free-photo-of-ceu-por-do-sol-feriado-ponto-de-referencia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Post"
            fill
            className={styles.img}
          />
        </div>
        <span className={styles.date}>01/01/2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>Title</h1>
        <p className={styles.description}>Description</p>
        <Link href="/blog/post" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
