import { GetStaticPaths, GetStaticProps } from 'next';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';
import {
  getBlogPost,
  getBlogPostPaths,
  urlFor,
} from '../../connection/functions';
import Article from '../../containers/Article';
import Layout from '../../containers/Layout';
import { IArticle } from '../../types/sanity';

export const getStaticPaths: GetStaticPaths = async () => {
  const blogPostPaths = await getBlogPostPaths();
  const paths = blogPostPaths.map(({ slug }) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  let { slug } = params;
  if (slug instanceof Array) {
    slug = slug[0];
  }
  const blogPost = await getBlogPost(slug);

  return {
    props: {
      blogPost,
    },
  };
};

export interface PostProps {
  blogPost: IArticle;
}

const Index = ({ blogPost }: PostProps) => (
  <Layout>
    <Article
      title={blogPost?.title}
      date={blogPost?.date}
      authorName={blogPost?.author.name}
      authorAvatarUrl={urlFor(blogPost?.author?.avatar).width(40).url()}
      coverImageUrl={urlFor(blogPost?.coverImage).width(720).url()}
      content={blogPost?.content}
    />
    <NewsletterSubscribe />
  </Layout>
);

export default Index;
