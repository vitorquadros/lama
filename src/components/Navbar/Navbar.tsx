'use client';

import { Container } from './Navbar.styles';
import Links from './Links/Links';

const Navbar = () => {
  return (
    <Container>
      <div>Logo</div>
      <div>
        <Links />
      </div>
    </Container>
  );
};

export default Navbar;
