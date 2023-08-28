import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import logo from '../images/theory-animation-small.gif';
import MobileNavBarV2 from './MobileNavBarV2';
import NavBar from './NavBar';
// import MobileNavBar from './MobileNavBar';

import './PageLayout.scss';

export interface PageLinkType {
  text: string;
  url: string;
}

interface PageLayoutType {
  children: React.ReactNode;
  title?: string;
  pageDescription?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutType> = ({ children, title, pageDescription }) => {
  const [navOpen, toggleNav] = useState(false);

  const onNavToggle = () => {
    toggleNav(!navOpen);
  };

  return (
    <>
      {/* <Helmet htmlAttributes={{ lang: 'en-US' }} /> */}
      <div className="layout">
        <header className="layout__logo">
          <figure>
            <Link href="/">
              <Image className="layout__logo-image" src={logo} alt="theory-ventures-logo" />
            </Link>
          </figure>
          {/* this button only shows on mobile */}
          {/* <button aria-label="toggle-nav" className="layout__hamburger" onClick={onNavToggle}>
            {navOpen ? <CloseIcon /> : <HamburgerIcon />}
          </button> */}
        </header>
        <div className="layout__title-container">
          {title && <h1 className="layout__title">{title}</h1>}
          {pageDescription && pageDescription}
        </div>
        {children}
        <NavBar />
        <MobileNavBarV2 />
      </div>
    </>
  );
};

export default PageLayout;
