import { Box, Heading, Link, Text, useColorModeValue } from '@chakra-ui/react';

import BlogTags from '../components/BlogTags';
import BlogAuthor from '../components/BlogAuthor';
import NextChakraImage from './NextChakraImage';
import { IArticle } from '../types';

interface CardArticleFeaturedProps {
  article: IArticle;
}

const CardArticleFeatured: React.FC<CardArticleFeaturedProps> = ({
  article,
}) => {
  const { coverImage, title, excerpt, publicationDate, tags, author } = article;
  return (
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
          <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
            <NextChakraImage
              width='800px'
              height='533px'
              borderRadius='lg'
              src={coverImage}
              alt='some good alt text'
              objectFit='contain'
            />
          </Link>
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
        marginTop={{ base: '3', sm: '0' }}
      >
        <BlogTags tags={tags} marginBottom='2' />
        <Heading marginTop='1' fontSize={{ base: 'xl', md: '2xl', lg: '3xl' }}>
          <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
            {title}
          </Link>
        </Heading>
        <Text
          as='p'
          marginTop='2'
          marginBottom='2'
          color={useColorModeValue('gray.700', 'gray.200')}
          fontSize={{ base: 'md', lg: 'lg' }}
        >
          {excerpt}
        </Text>
        <BlogAuthor author={author} date={publicationDate} />
      </Box>
    </Box>
  );
};

export default CardArticleFeatured;