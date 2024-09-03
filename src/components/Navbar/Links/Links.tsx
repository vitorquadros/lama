import styles from './Links.module.css';
import NavLink from './NavLink/NavLink';

const Links = () => {
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

  // DEBUG: temporary
  const session = true;
  const isAdmin = true;

  return (
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
  );
};

export default Links;
