import { Container, Divider, Wrap } from '@chakra-ui/react';

import CardArticleFeatured from '../components/CardArticleFeatured';
import CardArticle from '../components/CardArticle';
import SectionTitle from '../components/SectionTitle';
import { IArticle } from '../types/sanity';

const article = {
  title:
    'Gostosura da Rafaella: os mitos e o que a ciência ainda não consegue explicar',
  excerpt:
    'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati nesciunt consequatur commodi in ipsam, deserunt reiciendis illum, veniam dolor explicabo incidunt expedita, eius autem iste saepe sunt harum sint ullam veritatis quo? Minus inventore architecto, vitae sed ullam eos eligendi.',
  coverImage:
    'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=800&q=80',
  publicationDate: new Date('2021-04-06T19:01:27Z'),
  slug: '/blog',
  tags: ['Engineering', 'Product'],
  author: {
    name: 'Autorão',
    avatarSrc: 'https://100k-faces.glitch.me/random-image',
  },
};

export interface ArticleProps {
  allArticles: IArticle[];
}

const ArticlesFeed = ({ allArticles }: ArticleProps) => {
  return (
    <Container
      maxW={'7xl'}
      paddingX={{ base: 4, sm: '12' }}
      paddingY={{ base: 2, sm: '8' }}
      className='container'
    >
      <SectionTitle
        as='h1'
        decorDirection='under'
        marginTop={{ base: '5', sm: '0' }}
        fontSize={{ base: '3xl', md: '4xl' }}
      >
        Artigo em Destaque
      </SectionTitle>
      <CardArticleFeatured article={article} />

      <SectionTitle
        marginTop={{ base: '10', sm: '5' }}
        decorDirection='side'
        fontSize={{ base: '2xl', sm: '3xl' }}
      >
        Artigos mais recentes
      </SectionTitle>
      <Divider marginTop='5' />
      <Wrap spacing='30px' marginTop='5' marginBottom='10'>
        {allArticles.map((article) => (
          <CardArticle article={article} />
        ))}
      </Wrap>
    </Container>
  );
};

export default ArticlesFeed;
