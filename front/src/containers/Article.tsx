import { Container, Flex, Heading } from '@chakra-ui/react';
import BlockContent from '@sanity/block-content-to-react';
import CodeSnippet from '../components/CodeSnippet';
import FormattedDate from '../components/FormattedDate';
import NextChakraImage from '../components/NextChakraImage';
import { urlFor } from '../connection/functions';
import { ContentItem } from '../types/sanity';

export interface ArticleProps {
  title: string;
  date: string;
  authorName?: string;
  authorAvatarUrl?: string;
  coverImageUrl?: string;
  content: ContentItem[];
}

const serializers = {
  types: {
    image: ({ node: { asset, caption } }) => (
      <figure>
        <NextChakraImage
          src={urlFor(asset).width(720).url()}
          alt={caption}
          objectFit='contain'
          width='720px'
          height='480px'
        />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
    code: ({ node: { code, filename, language } }) => (
      <CodeSnippet filename={filename} language={language}>
        {code}
      </CodeSnippet>
    ),
  },
};

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
        {/* <CategoryTag title='Desenvolvimento' />
            <CategoryTag title='Web' /> */}
        <FormattedDate>{date}</FormattedDate>
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
        serializers={serializers}
      />
    </Container>
  );
}
