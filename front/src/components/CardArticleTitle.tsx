import { Heading, Link } from '@chakra-ui/react';
import React from 'react';

interface CardArticleTitle {
  title: string;
}

const CardArticleTitle: React.FC<CardArticleTitle> = ({ title }) => {
  return (
    <Heading fontSize={{ base: 'lg', md: 'xl', lg: '2xl' }}>{title}</Heading>
  );
};

export default CardArticleTitle;
