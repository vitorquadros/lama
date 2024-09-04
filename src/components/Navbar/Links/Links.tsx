'use client';

import { useState } from 'react';
import styles from './Links.module.css';
import NavLink from './NavLink/NavLink';
import Image from 'next/image';
import { handleLogout } from '@/actions/authActions';
import type { Session } from 'next-auth';

const links = [
  {
    title: 'Homepage',
    path: '/'
  },
  {
    title: 'About',
    path: '/about'
  },
  {
    title: 'Contact',
    path: '/contact'
  },
  {
    title: 'Blog',
    path: '/blog'
  }
];

interface Props {
  session: Session | null;
}

const Links = (props: Props) => {
  // Props
  const { session } = props;

  // States
  const [open, setOpen] = useState(false);

  // DEBUG: temporary
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.path} />
        ))}
        {session?.user ? (
          <>
            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <form action={handleLogout}>
              <button type="submit" className={styles.logout}>
                Logout
              </button>
            </form>
          </>
        ) : (
          <NavLink item={{ title: 'Login', path: '/login' }} />
        )}
      </div>

      <Image
        src="/menu.png"
        alt="Menu"
        width={30}
        height={30}
        className={styles.menuButton}
        onClick={() => setOpen((prev) => !prev)}
      />

      {open && (
        <div className={styles.mobileLinks}>
          {links.map((link) => (
            <NavLink item={link} key={link.path} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Links;
