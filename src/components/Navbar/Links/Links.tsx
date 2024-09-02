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

  return (
    <div className={styles.links}>
      {links.map((link) => (
        <NavLink item={link} key={link.path} />
      ))}
    </div>
  );
};

export default Links;
