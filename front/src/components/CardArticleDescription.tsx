import { Text } from '@chakra-ui/react';

interface CardArticleDescriptionProps {
  description: string;
}

const CardArticleDescription: React.FC<CardArticleDescriptionProps> = ({
  description,
}) => {
  return (
    <Text
      as='p'
      fontSize={{ base: 'sm', md: 'md' }}
      marginTop='2'
      marginBottom='3'
      noOfLines={5}
    >
      {description}
    </Text>
  );
};

export default CardArticleDescription;
