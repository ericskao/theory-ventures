import { graphql } from 'gatsby';
import { Helmet } from 'react-helmet';
import linkedin from '../../images/linkedinsocial.png';
import WebLink from '../../images/svgs/WebLink';
import twitter from '../../images/twitter.png';
import BlogLayout from './BlogLayout';

import './BlogPost.scss';

const BlogPost = ({ data }: { data: any }) => {
  console.log('data', data);
  const { markdownRemark } = data;
  const { frontmatter, html } = markdownRemark;
  console.log('html', html);
  return (
    <>
      <Helmet>
        <title>{frontmatter.title} - Theory Ventures</title>
        <meta name="description" content="Theory Ventures blog post" />
        <meta property="og:type" content="article" />
        <meta property="og:site_name" content="Theory Ventures" />
        <meta property="og:title" content={frontmatter.title} />
        <meta property="og:url" content={`www.theory.ventures/${frontmatter.slug}`} />
        <meta property="og:image" content={frontmatter.imgSrc} />
        <meta property="og:description" content={'description'} />
        {/* author */}
        {/* publishDate */}
      </Helmet>
      <BlogLayout className="relative">
        <article className="blog-post text-blackPrimary @container">
          <div className="@md:pr-40">
            <div className="blog-post__header font-roboto-mono">
              <h1 className="text-2xl text-center mb-12">{frontmatter.title}</h1>
              <div className="flex justify-between mb-2">
                <time>
                  {new Date(frontmatter.date).toLocaleString('default', {
                    month: 'long',
                    day: 'numeric',
                    year: 'numeric',
                  })}
                </time>
                <h2 className="text-grayPrimary">AI / SaaS</h2>
              </div>
              {/* <h3 className="blog-post__author">
              Author: <a>{frontmatter.author}</a>
            </h3> */}
              <div className="blog-post__divider my-6" />
            </div>
            <div>
              {frontmatter.imgSrc && (
                <img className="mx-auto" src={frontmatter.imgSrc} alt="hero-image" />
              )}
              <div
                className="font-roboto text-xl font-light pb-14 markdown"
                dangerouslySetInnerHTML={{ __html: html }}
              >
                {/* <ReactMarkdown>{html}</ReactMarkdown> */}
              </div>
            </div>
            <div className="fixed right-5 bottom-16 gap-5 flex social-links">
              <button>
                <WebLink />
              </button>
              <a
                href="https://www.linkedin.com/sharing/share-offsite/?url=https://stackoverflow.com/questions/33426752/linkedin-share-post-url"
                target="_blank"
              >
                <img src={linkedin} alt="linkedin-social" />
              </a>
              <button>
                <img src={twitter} alt="twitter-social" />
              </button>
            </div>
          </div>
        </article>
      </BlogLayout>
    </>
  );
};

export const query = graphql`
  query ($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      fields {
        slug
      }
      frontmatter {
        # author
        date
        title
        imgSrc
        # tags {
        #   tag
        # }
      }
      html
    }
  }
`;

export default BlogPost;
