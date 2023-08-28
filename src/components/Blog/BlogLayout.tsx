import classNames from 'classnames';
import { ReactNode } from 'react';
import VerticalNavbar from '../VerticalNavbar';
import BlogSidebar from './BlogSidebar';

const BlogLayout = ({ children, className }: { children: ReactNode; className?: string }) => {
  return (
    <div className="blog-layout py-9 px-7">
      <VerticalNavbar
        breadcrumbs={[
          { label: 'blog', path: '/blog' },
          { label: 'home', path: '/' },
        ]}
      />
      <div
        className={classNames('flex flex-col md:gap-7 md:flex-row font-roboto-mono', {
          [className as string]: !!className,
        })}
      >
        <BlogSidebar />
        <div className="flex-grow">{children}</div>
      </div>
    </div>
  );
};

export default BlogLayout;
