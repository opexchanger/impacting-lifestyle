import { ReactNode } from 'react';
import { GetStaticProps } from 'next';
import { Flex, Text } from '@chakra-ui/react';

import NewsletterSubscribe from '../components/NewsletterSubscribe';
import ArticlesFeed from '../containers/ArticlesFeed';
import Layout from '../containers/Layout';

import { getBlogPosts } from '../connection/functions';
import { IArticle } from '../types/sanity';

export const getStaticProps: GetStaticProps = async () => {
  const blogPosts = await getBlogPosts();

  return {
    props: {
      blogPosts,
    },
  };
};

export interface BlogProps {
  allArticles: IArticle[];
}

const Index = ({ allArticles }: BlogProps) => {
  let content: ReactNode;
  if (allArticles && allArticles.length) {
    content = <ArticlesFeed allArticles={allArticles} />;
  } else {
    content = (
      <Flex justify='center' align='center'>
        <Text>
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
