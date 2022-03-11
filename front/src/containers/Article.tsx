import { Container, Flex, Heading } from '@chakra-ui/react';
import BlockContent from '@sanity/block-content-to-react';
import CategoryTag from '../components/CategoryTag';
import FormattedDate from '../components/FormattedDate';
import { ContentItem } from '../types/sanity';
import { textContentSerializer } from '../connection/serializers';

export interface ArticleProps {
  title: string;
  date: string;
  authorName?: string;
  authorAvatarUrl?: string;
  coverImageUrl?: string;
  content: ContentItem[];
}

export default function Article({
  title,
  date,
  authorName,
  authorAvatarUrl,
  coverImageUrl,
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
        <Flex wrap='wrap'>
          <CategoryTag title='Desenvolvimento' />
          <CategoryTag title='Web' />
        </Flex>
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
