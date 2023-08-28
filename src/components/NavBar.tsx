import { Link } from 'gatsby';
import Email from '../images/svgs/Email';
import LinkedIn from '../images/svgs/LinkedIn';
import Twitter from '../images/svgs/Twitter';
import TheoryLogo from './TheoryLogo';

import './NavBar.scss';

const NavBar: React.FC = () => {
  return (
    <nav className="navbar">
      <Link className="navbar__logo" to="/">
        <TheoryLogo />
      </Link>
      <ul className="navbar__items">
        <li>
          <Link className="navbar__page-links" to="/blog">
            Blog
          </Link>
        </li>
        <li className="navbar__items--social">
          <a className="navbar__twitter" target="_blank" href="https://twitter.com/theoryvc">
            <Twitter />
          </a>
        </li>
        <li className="navbar__items--social">
          <a target="_blank" href="https://www.linkedin.com/company/theory-ventures/">
            <LinkedIn />
          </a>
        </li>
        <li className="navbar__items--social">
          <a aria-label="email" target="_blank" href="mailto: info@theory.ventures">
            <Email />
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
