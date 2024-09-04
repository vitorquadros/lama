'use client';

import { useFormState } from 'react-dom';
import styles from './AdminPostForm.module.css';
import { addPost } from '@/actions/postActions';

const AdminPostForm = ({ userId }: { userId: string }) => {
  const [state, formAction] = useFormState(addPost, { success: false });

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New Post</h1>
      <input type="text" name="title" placeholder="Title" />
      <input type="hidden" name="userId" value={userId} />
      <input type="text" name="img" placeholder="Image" />
      <textarea name="description" placeholder="Description" rows={10} />
      <button type="submit">Add</button>
      {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
    </form>
  );
};

export default AdminPostForm;
