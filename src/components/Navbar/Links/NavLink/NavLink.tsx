'use client';

import Link from 'next/link';
import styles from './NavLink.module.css';
import { usePathname } from 'next/navigation';

interface Props {
  item: {
    title: string;
    path: string;
  };
}

const NavLink = (props: Props) => {
  const { item } = props;

  const pathName = usePathname();

  return (
    <Link
      key={item.path}
      href={item.path}
      className={`${styles.container} ${pathName === item.path && styles.active}`}
    >
      {item.title}
    </Link>
  );
};

export default NavLink;
