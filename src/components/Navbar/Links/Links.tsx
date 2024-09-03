'use client';

import { useState } from 'react';
import styles from './Links.module.css';
import NavLink from './NavLink/NavLink';
import Image from 'next/image';

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

const Links = () => {
  const [open, setOpen] = useState(false);

  // DEBUG: temporary
  const session = true;
  const isAdmin = true;

  return (
    <div className={styles.container}>
      <div className={styles.links}>
        {links.map((link) => (
          <NavLink item={link} key={link.path} />
        ))}
        {session ? (
          <>
            {isAdmin && <NavLink item={{ title: 'Admin', path: '/admin' }} />}
            <button type="button" className={styles.logout}>
              Logout
            </button>
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
