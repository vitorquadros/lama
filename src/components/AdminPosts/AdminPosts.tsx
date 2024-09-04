import { getPosts } from '@/lib/services';
import styles from './AdminPosts.module.css';
import Image from 'next/image';
import { deletePost } from '@/actions/postActions';

const AdminPosts = async () => {
  const posts = await getPosts();

  if (!posts) {
    return <div>No posts found!</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Posts</h1>
      {posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <div className={styles.detail}>
            <Image src={post.img ?? '/noimage.png'} alt="Image" width={50} height={50} />
            <span className={styles.postTitle}>{post.title}</span>
          </div>

          <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} />
            <button className={styles.postButton} type="submit">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminPosts;
