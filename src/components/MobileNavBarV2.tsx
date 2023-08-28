import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import Email from '../images/svgs/Email';
import LinkedIn from '../images/svgs/LinkedIn';
import Twitter from '../images/svgs/Twitter';
import { linkedInLink, twitterLink } from './PageLayout';

import './MobileNavBarV2.scss';

const MobileNavBarV2 = () => {
  return (
    <div className="mobile-navbar-v2">
      <Link className="" to="/">
        <div className="mobile-navbar-v2__logo">
          <StaticImage
            src="../images/theory_ventures.png"
            alt="Theory Ventures logo"
            placeholder="none"
            width={300}
          />
        </div>
      </Link>
      <ul className="mobile-navbar-v2__mobile-links">
        <li>
          <a aria-label="twitter" target="_blank" href="https://www.tomtunguz.com">
            Blog
          </a>
        </li>
        <li>
          <a aria-label="twitter" target="_blank" href={twitterLink}>
            <Twitter />
          </a>
        </li>
        <li>
          <a aria-label="linkedIn" target="_blank" href={linkedInLink}>
            <LinkedIn />
          </a>
        </li>
        <li>
          <a aria-label="email" target="_blank" href="mailto: info@theory.ventures">
            <Email />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MobileNavBarV2;
