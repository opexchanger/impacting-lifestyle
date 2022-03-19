import { Container, Flex, Heading } from '@chakra-ui/react';
import BlockContent from '@sanity/block-content-to-react';
import FormattedDate from '../components/FormattedDate';
import { IArticle } from '../types/sanity';
import { textContentSerializer } from '../connection/serializers';
import TagsStack from './TagsStack';

interface ArticleProps extends IArticle {
  coverImageUrl?: string;
  slug?: string;
}

export default function Article({
  title,
  date,
  tags,
  coverImageUrl,
  author,
  content,
}: ArticleProps) {
  return (
    <Container
      maxW={{ base: '85%', sm: '80%', lg: '75%' }}
      paddingX={{ md: '8' }}
      paddingY={{ base: '8', sm: '12' }}
      className='container'
    >
      <Flex className='categories' marginBottom='4' wrap='wrap'>
        <FormattedDate
          withIcon
          marginRight={{ base: '3', lg: '5' }}
          marginBottom={{ base: '2', sm: '0' }}
        >
          {date}
        </FormattedDate>
        <TagsStack tags={tags} />
      </Flex>
      <Heading
        as='h1'
        textTransform='uppercase'
        fontSize={{ base: '4xl', md: '5xl', lg: '6xl' }}
        fontWeight='900'
        marginBottom={{ base: '6', lg: '8' }}
      >
        {title}
      </Heading>
      <BlockContent
        className='blog-text'
        blocks={content}
        serializers={textContentSerializer}
      />
    </Container>
  );
}
