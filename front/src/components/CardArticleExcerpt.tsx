import { Text } from '@chakra-ui/react';

interface CardArticleExcerptProps {
  excerpt: string;
}

const CardArticleExcerpt: React.FC<CardArticleExcerptProps> = ({ excerpt }) => {
  return (
    <Text
      as='p'
      fontSize={{ base: 'sm', md: 'md' }}
      marginTop='2'
      marginBottom='3'
      noOfLines={5}
    >
      {excerpt}
    </Text>
  );
};

export default CardArticleExcerpt;
