import NextLink from 'next/link';
import { Box, WrapItem } from '@chakra-ui/react';

import ArticleInfo from './ArticleInfo';
import { IArticle } from '../types/sanity';
import CardArticleCover from './CardArticleCover';
import CardArticleTitle from './CardArticleTitle';
import CardArticleExcerpt from './CardArticleExcerpt';
import CardArticleTags from './CardArticleTags';

export interface CardArticleProps {
  article: IArticle;
}

const CardArticle: React.FC<CardArticleProps> = ({ article }) => {
  const { slug, coverImage, title, excerpt, date, tags, author } = article;

  // TODO isso totalmente dá um Compound Component

  return (
    <NextLink href={`/blog/${slug}`}>
      <WrapItem
        width={{ base: '100%', sm: '44%', md: '45%', lg: '30%' }}
        marginBottom={{ base: '5' }}
      >
        <Box w='100%' className='boxOuter'>
          <CardArticleCover coverImage={coverImage} />
          {tags?.length && <CardArticleTags tags={tags} marginTop='3' />}
          <CardArticleTitle title={title} />
          <CardArticleExcerpt excerpt={excerpt} />
          <ArticleInfo author={author} date={date} />
        </Box>
      </WrapItem>
    </NextLink>
  );
};

export default CardArticle;
