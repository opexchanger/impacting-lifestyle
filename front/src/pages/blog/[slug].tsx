import { GetStaticPaths, GetStaticProps } from 'next';
import NewsletterSubscribe from '../../components/NewsletterSubscribe';
import {
  getArticleBySlug,
  getAllArticlesPaths,
  urlFor,
} from '../../connection/functions';
import Article from '../../containers/Article';
import Layout from '../../containers/Layout';
import { IArticle } from '../../types/sanity';

export const getStaticPaths: GetStaticPaths = async () => {
  const articlesPaths = await getAllArticlesPaths();
  const paths = articlesPaths.map(({ slug }) => ({
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
  const article = await getArticleBySlug(slug);

  return {
    props: {
      article,
    },
  };
};

export interface ArticleProps {
  article: IArticle;
}

const Index = ({ article }: ArticleProps) => {
  let imageUrl: undefined | string;
  if (article?.coverImage) {
    imageUrl = urlFor(article?.coverImage).width(720).url();
  }

  return (
    <Layout>
      <Article
        title={article?.title}
        date={article?.date}
        tags={article?.tags}
        author={article?.author}
        {...(imageUrl && { coverImageUrl: imageUrl })}
        content={article?.content}
      />
      <NewsletterSubscribe />
    </Layout>
  );
};

export default Index;
