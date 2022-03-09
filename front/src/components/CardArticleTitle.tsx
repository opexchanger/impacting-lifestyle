import { Heading, Link } from '@chakra-ui/react';
import React from 'react';

interface CardArticleTitle {
  title: string;
}

const CardArticleTitle: React.FC<CardArticleTitle> = ({ title }) => {
  return (
    <Heading fontSize={{ base: 'lg', md: 'xl' }} marginTop='2'>
      <Link textDecoration='none' _hover={{ textDecoration: 'none' }}>
        {title}
      </Link>
    </Heading>
  );
};

export default CardArticleTitle;
