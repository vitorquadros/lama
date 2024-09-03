import Image from 'next/image';
import styles from './post.module.css';
import PostUser from '@/components/PostUser/PostUser';

const PostPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image
          src="https://images.pexels.com/photos/27703479/pexels-photo-27703479/free-photo-of-ceu-por-do-sol-feriado-ponto-de-referencia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Post Image"
          fill
          className={styles.img}
        />
      </div>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>Title</h1>
        <div className={styles.detail}>
          <Image
            src="https://images.pexels.com/photos/27703479/pexels-photo-27703479/free-photo-of-ceu-por-do-sol-feriado-ponto-de-referencia.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Avatar Image"
            width={50}
            height={50}
            className={styles.avatarImg}
          />
          <PostUser />
          <div className={styles.detailText}>
            <span className={styles.detailTitle}>Published</span>
            <span className={styles.detailValue}>01/01/2024</span>
          </div>
        </div>
        <div className={styles.content}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat libero ad aspernatur
          consequuntur ducimus eligendi sequi maiores sint esse nesciunt porro aliquam veritatis
          soluta quam, ex maxime reprehenderit quas qui repellat aut obcaecati mollitia ipsa! Quod
          ducimus assumenda inventore obcaecati dolores iusto animi dolor dolorum laborum.
          Praesentium, perferendis pariatur minus fugiat quod deserunt, delectus rem explicabo nulla
          harum id deleniti dolores cupiditate dignissimos sit doloremque adipisci. Sequi saepe nemo
          exercitationem enim ab cum eligendi cumque, dolor nisi, vero repellat molestias accusamus
          distinctio possimus, necessitatibus ullam adipisci nam ipsam optio. Explicabo tenetur
          eveniet repellendus magnam necessitatibus reprehenderit nobis, possimus modi itaque.
        </div>
      </div>
    </div>
  );
};

export default PostPage;
