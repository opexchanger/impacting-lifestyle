import NextLink from 'next/link';
import { Box, Heading, Link, Text, WrapItem } from '@chakra-ui/react';

import BlogTags from './BlogTags';
import BlogAuthor from './BlogAuthor';
import NextChakraImage from './NextChakraImage';
import { IArticle } from '../types/sanity';
import { urlFor } from '../connection/functions';

interface CardArticleProps {
  article: IArticle;
}

const CardArticle: React.FC<CardArticleProps> = ({ article }) => {
  const { coverImage, title, excerpt, date, slug, tags, author } = article;

  return (
    <NextLink href={slug}>
      <WrapItem
        width={{ base: '100%', sm: '44%', md: '45%', lg: '30%' }}
        marginBottom={{ base: '5', sm: '0' }}
      >
        <Box w='100%' className='boxOuter'>
          <Box className='imageBox'>
            <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
              <NextChakraImage
                transform='scale(1.0)'
                src={urlFor(coverImage).width(720).url()}
                alt='some text'
                objectFit='contain'
                width='800px'
                height='533px'
                transition='0.3s ease-in-out'
                _hover={{
                  transform: 'scale(1.05)',
                }}
              />
            </Link>
          </Box>
          <BlogTags tags={tags} marginTop='3' />
          <Heading fontSize={{ base: 'lg', md: 'xl' }} marginTop='2'>
            <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
              {title}
            </Link>
          </Heading>
          <Text
            as='p'
            fontSize={{ base: 'sm', md: 'md' }}
            marginTop='2'
            marginBottom='3'
            noOfLines={5}
          >
            {excerpt}
          </Text>
          <BlogAuthor author={author} date={date} />
        </Box>
      </WrapItem>
    </NextLink>
  );
};

export default CardArticle;
