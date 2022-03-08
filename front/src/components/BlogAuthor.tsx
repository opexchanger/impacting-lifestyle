import { Text, HStack, Avatar } from '@chakra-ui/react';

import { urlFor } from '../connection/functions';
import { Author } from '../types/sanity';
import FormattedDate from './FormattedDate';

interface BlogAuthorProps {
  author: Author;
  date: string;
}

const BlogAuthor: React.FC<BlogAuthorProps> = ({ author, date }) => {
  const { name, avatar } = author;
  return (
    <HStack marginTop='2' spacing='2' display='flex' alignItems='center'>
      <Avatar src={urlFor(avatar).width(200).url()} name={name} size='sm' />
      <Text fontWeight='medium'>{name}</Text>
      <Text>—</Text>
      <FormattedDate>{date}</FormattedDate>
    </HStack>
  );
};

export default BlogAuthor;
