import { Box, Heading, Link, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from 'next/link';

import ArticleInfo from './ArticleInfo';
import NextChakraImage from './NextChakraImage';
import { IArticle } from '../types/sanity';
import { urlFor } from '../connection/functions';
import TagsStack from '../containers/TagsStack';

interface CardArticleFeaturedProps {
  article: IArticle;
}

const CardArticleFeatured: React.FC<CardArticleFeaturedProps> = ({
  article,
}) => {
  const { slug, coverImage, title, description, date, tags, author } = article;
  return (
    <NextLink href={`/article/${slug}`}>
      <a>
        <Box
          className='wrapper'
          marginTop={{ base: '1', sm: '5' }}
          marginBottom={{ base: '1', sm: '12' }}
          display='flex'
          flexDirection={{ base: 'column', sm: 'row' }}
          justifyContent='space-between'
        >
          <Box
            className='leftSide'
            display='flex'
            flex='1'
            marginRight='3'
            position='relative'
            alignItems='center'
          >
            <Box
              className='imageBox'
              width={{ base: '100%', sm: '85%' }}
              zIndex='2'
              marginLeft={{ base: '0', sm: '5%' }}
              marginTop='5%'
            >
              <NextChakraImage
                width='800px'
                height='533px'
                borderRadius='lg'
                src={urlFor(coverImage).width(720).url()}
                alt='some good alt text'
                objectFit='contain'
              />
            </Box>
            <Box
              className='imageBackground'
              zIndex='1'
              width='100%'
              position='absolute'
              height='100%'
            >
              <Box
                bgGradient={useColorModeValue(
                  'radial(orange.600 1px, transparent 1px)',
                  'radial(orange.300 1px, transparent 1px)'
                )}
                backgroundSize='20px 20px'
                opacity='0.4'
                height='100%'
              />
            </Box>
          </Box>
          <Box
            className='rightSide'
            display='flex'
            flex='1'
            flexDirection='column'
            justifyContent='center'
          >
            <TagsStack tags={tags} marginY='1' />
            <Heading
              marginTop='1'
              fontSize={{ base: 'xl', md: '2xl', lg: '4xl' }}
            >
              {title}
            </Heading>
            <Text
              as='p'
              marginTop='2'
              marginBottom='2'
              color={useColorModeValue('gray.700', 'gray.200')}
              fontSize={{ base: 'md', lg: 'lg' }}
            >
              {description}
            </Text>
            <ArticleInfo author={author} date={date} />
          </Box>
        </Box>
      </a>
    </NextLink>
  );
};

export default CardArticleFeatured;
