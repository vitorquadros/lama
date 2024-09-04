import { getUsers } from '@/lib/services';
import styles from './AdminUsers.module.css';
import Image from 'next/image';
import { deleteUser } from '@/actions/userActions';

const AdminUsers = async () => {
  const users = await getUsers();

  if (!users) {
    return <div>No users found!</div>;
  }

  return (
    <div className={styles.container}>
      <h1>Users</h1>
      {users.map((user) => (
        <div className={styles.user} key={user.id}>
          <div className={styles.detail}>
            <Image src={user.img ?? '/noavatar.png'} alt="Image" width={50} height={50} />
            <span className={styles.postTitle}>{user.username}</span>
            {user.isAdmin && <p style={{ color: 'green' }}>Admin</p>}
          </div>

          <form action={deleteUser}>
            <input type="hidden" name="id" value={user.id} />
            <button className={styles.userButton} type="submit">
              Delete
            </button>
          </form>
        </div>
      ))}
    </div>
  );
};

export default AdminUsers;
