import PostCard from '@/components/PostCard/PostCard';
import styles from './blog.module.css';
import { getPosts } from '@/lib/services';
import type { Post } from '@/@types/post';

const BlogPage = async () => {
  const posts: Post[] = await getPosts();

  return (
    <div className={styles.container}>
      {posts.map((post) => (
        <div className={styles.post} key={post._id}>
          <PostCard post={post} />
        </div>
      ))}
    </div>
  );
};

export default BlogPage;
