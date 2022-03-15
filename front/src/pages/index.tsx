import { ReactNode } from 'react';
import { GetStaticProps } from 'next';
import { Flex, Text } from '@chakra-ui/react';

import NewsletterSubscribe from '../components/NewsletterSubscribe';
import ArticlesFeed from '../containers/ArticlesFeed';
import Layout from '../containers/Layout';
import CardArticle from '../components/CardArticle';

import { getAllArticlesByLocale } from '../connection/functions';
import { IArticle } from '../types/sanity';

/// I18N https://dev.to/adrai/static-html-export-with-i18n-compatibility-in-nextjs-8cd

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  console.log('locale :>> ', locale);
  const articles = await getAllArticlesByLocale(locale);

  return {
    props: {
      articles,
    },
  };
};

export interface ArticleProps {
  articles: IArticle[];
}

const Index = ({ articles }: ArticleProps) => {
  let content: ReactNode;
  if (articles && articles.length) {
    content = (
      <ArticlesFeed featured={articles[0]}>
        {articles.map((article) => (
          <CardArticle article={article} key={article.slug} />
        ))}
      </ArticlesFeed>
    );
  } else {
    content = (
      <Flex justify='center' align='center' height='35vh'>
        <Text
          fontSize={{ base: 'md', sm: 'lg' }}
          padding='3'
          textAlign={{ base: 'center', md: 'initial' }}
        >
          Parece que nenhuma postagem foi carregada... isso deve se resolver em
          breve.
        </Text>
      </Flex>
    );
  }

  return (
    <Layout>
      {content}
      <NewsletterSubscribe />
    </Layout>
  );
};

export default Index;
