import { getUser } from '@/lib/services';
import styles from './PostUser.module.css';
import type { User } from '@/@types/user';
import Image from 'next/image';

interface Props {
  userId: string;
}

const PostUser = async (props: Props) => {
  const { userId } = props;

  const user: User = await getUser(userId);

  if (!user) {
    return <></>;
  }

  return (
    <div className={styles.container}>
      <Image
        src={user.img ?? '/noavatar.png'}
        alt="Avatar Image"
        width={50}
        height={50}
        className={styles.avatarImg}
      />
      <div className={styles.texts}>
        <span className={styles.detailTitle}>Author</span>
        <span className={styles.detailValue}>{user.username}</span>
      </div>
    </div>
  );
};

export default PostUser;
