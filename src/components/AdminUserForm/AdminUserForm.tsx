'use client';

import { useFormState } from 'react-dom';
import styles from './AdminUserForm.module.css';
import { addUser } from '@/actions/userActions';

const AdminUserForm = () => {
  const [state, formAction] = useFormState(addUser, { success: false });

  return (
    <form action={formAction} className={styles.container}>
      <h1>Add New User</h1>
      <input type="text" name="username" placeholder="Username" />
      <input type="text" name="email" placeholder="Email" />
      <input type="password" name="password" placeholder="Password" />
      <input type="text" name="img" placeholder="Image" />
      <select name="isAdmin">
        <option value="false">Is Admin?</option>
        <option value="true">Yes</option>
        <option value="false">No</option>
      </select>
      <button type="submit">Add</button>
      {state?.error && <p style={{ color: 'red' }}>{state.error}</p>}
    </form>
  );
};

export default AdminUserForm;
