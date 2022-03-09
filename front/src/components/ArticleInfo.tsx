import { Text, HStack, Avatar } from '@chakra-ui/react';

import { urlFor } from '../connection/functions';
import { Author } from '../types/sanity';
import FormattedDate from './FormattedDate';

interface ArticleInfoProps {
  author: Author;
  date: string;
}

const ArticleInfo: React.FC<ArticleInfoProps> = ({ author, date }) => {
  const avatarImage = author?.avatar ?? '/img/avatar-default.svg';

  return (
    <HStack
      marginTop='2'
      spacing='2'
      display='flex'
      alignItems='center'
      flexWrap='wrap'
    >
      <Avatar
        src={
          typeof avatarImage === 'string'
            ? avatarImage
            : urlFor(avatarImage).width(200).url()
        }
        name={author?.name}
        size='sm'
        mb='1'
      />
      <Text fontWeight='medium' fontSize={{ base: 'sm', lg: 'md' }}>
        {author?.name}
      </Text>
      <Text>—</Text>
      <FormattedDate>{date}</FormattedDate>
    </HStack>
  );
};

export default ArticleInfo;
