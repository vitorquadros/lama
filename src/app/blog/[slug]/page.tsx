import Image from 'next/image';
import styles from './post.module.css';
import PostUser from '@/components/PostUser/PostUser';
import { getPost } from '@/lib/services';
import type { Post } from '@/@types/post';
import { Suspense } from 'react';

interface Props {
  params: {
    slug: string;
  };
}

const PostPage = async ({ params: { slug } }: Props) => {
  const post: Post = await getPost(slug);

  if (!post) {
    return <div>Post not found</div>;
  }

  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src={post.img ?? '/noimage.png'} alt="Post Image" fill className={styles.img} />
      </div>

      <div className={styles.textContainer}>
        <h1 className={styles.title}>{post.title}</h1>
        <div className={styles.detail}>
          <Suspense fallback={<div>Loading...</div>}>
            <PostUser userId={post.userId} />
          </Suspense>
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>{post.createdAt.toString().slice(4, 16)}</span>
          </div>
        </div>
        <div className={styles.content}>{post.description}</div>
      </div>
    </div>
  );
};

export default PostPage;
