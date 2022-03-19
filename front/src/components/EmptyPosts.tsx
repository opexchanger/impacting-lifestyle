import { Flex, Text } from '@chakra-ui/react';
import { useLocale } from '../context/useLocaleContext';

interface EmptyPostsProps {
  locale: string;
}

const EmptyPosts: React.FC = () => {
  const locale = useLocale();
  return (
    <Flex justify='center' align='center' height='35vh'>
      <Text
        fontSize={{ base: 'md', sm: 'lg' }}
        padding='3'
        textAlign={{ base: 'center', md: 'initial' }}
      >
        {locale === 'br'
          ? 'Parece que nenhuma postagem foi carregada... Isso deve se resolver em breve.'
          : 'It appears no post could be loaded... We might fix this soon.'}
      </Text>
    </Flex>
  );
};

export default EmptyPosts;
