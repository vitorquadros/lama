import { Suspense } from 'react';
import styles from './admin.module.css';
import Spinner from '@/components/Spinner/Spinner';
import AdminPosts from '@/components/AdminPosts/AdminPosts';
import AdminPostForm from '@/components/AdminPostForm/AdminPostForm';
import AdminUsers from '@/components/AdminUsers/AdminUsers';
import AdminUserForm from '@/components/AdminUserForm/AdminUserForm';
import { auth } from '@/lib/auth';

const AdminPage = async () => {
  // biome-ignore lint/suspicious/noExplicitAny: <explanation>
  const session: any = await auth();

  return (
    <div className={styles.container}>
      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<Spinner size={32} center={false} />}>
            <AdminPosts />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminPostForm userId={session?.user?.id} />
        </div>
      </div>

      <div className={styles.row}>
        <div className={styles.col}>
          <Suspense fallback={<Spinner size={32} center={false} />}>
            <AdminUsers />
          </Suspense>
        </div>
        <div className={styles.col}>
          <AdminUserForm />
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
