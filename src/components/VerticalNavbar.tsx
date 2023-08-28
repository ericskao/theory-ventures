import classNames from 'classnames';
import { Link } from 'gatsby';
import LeftCaret from '../images/svgs/LeftCaret';
import TheoryLogo from './TheoryLogo';

const VerticalNavbar = ({ breadcrumbs }: { breadcrumbs: { label: string; path: string }[] }) => {
  return (
    <nav className="flex justify-between pb-4 border-borderGray border-b font-roboto-mono mb-8">
      <div className="w-48 pt-1">
        <TheoryLogo />
      </div>
      <ul className="text-xl flex">
        {breadcrumbs.map((breadcrumb, index) => (
          <li className="flex items-center" key={breadcrumb.label}>
            <Link
              className={classNames('uppercase', { 'font-bold': index === 0 })}
              to={breadcrumb.path}
            >
              {breadcrumb.label}
            </Link>
            {index !== breadcrumbs.length - 1 && (
              <span className="mx-3 font-light">
                <LeftCaret className="h-5 w-5" />
              </span>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default VerticalNavbar;
