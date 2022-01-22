import { Logo } from '../Logo/Logo';
import { NavBar } from '../NavBar/NavBar';

import { Container } from './styles.js';

export function Header() {
  return (
    <Container>
      <Logo />
      <NavBar />
    </Container>
  )
}