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
      marginTop={{ base: '1', md: '2' }}
      marginBottom='3'
      noOfLines={4}
    >
      {description}
    </Text>
  );
};

export default CardArticleDescription;
