import { Container, Divider, Wrap } from '@chakra-ui/react';

import CardArticleFeatured from '../components/CardArticleFeatured';
import SectionTitle from '../components/SectionTitle';
import { ReactNode } from 'react';
import { IArticle } from '../types/sanity';

export interface ArticleProps {
  featured: IArticle;
  children: ReactNode;
}

const ArticlesFeed = ({ featured, children }: ArticleProps) => {
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
      <CardArticleFeatured article={featured} />

      <SectionTitle
        marginTop={{ base: '10', sm: '5' }}
        decorDirection='side'
        fontSize={{ base: '2xl', sm: '3xl' }}
      >
        Artigos mais recentes
      </SectionTitle>
      <Divider marginTop='5' />
      <Wrap spacing='30px' marginTop='5' marginBottom='10'>
        {children}
      </Wrap>
    </Container>
  );
};

export default ArticlesFeed;
