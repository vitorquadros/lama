import Image from 'next/image';
import styles from './PostCard.module.css';
import Link from 'next/link';
import type { Post } from '@/@types/post';

interface Props {
  post: Post;
}

const PostCard = (props: Props) => {
  const { post } = props;

  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.imageContainer}>
          <Image src={post.img ?? '/noimage.png'} alt="Post" fill className={styles.img} />
        </div>

        <span className={styles.date}>01/01/2024</span>
      </div>
      <div className={styles.bottom}>
        <h1 className={styles.title}>{post.title}</h1>
        <p className={styles.description}>{post.description}</p>
        <Link href={`/blog/${post.slug}`} className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
