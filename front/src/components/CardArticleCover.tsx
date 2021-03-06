import { Box, Link } from '@chakra-ui/react';
import { urlFor } from '../connection/functions';
import NextChakraImage from './NextChakraImage';
import { ImageReference } from '../types/sanity';

interface CardArticleCoverProps {
  coverImage: ImageReference;
}

const CardArticleCover: React.FC<CardArticleCoverProps> = ({ coverImage }) => {
  return (
    <Box className='imageBox'>
      <NextChakraImage
        transform='scale(1.0)'
        src={urlFor(coverImage).width(720).url()}
        alt='some text'
        objectFit='cover'
        width='800px'
        height='533px'
        transition='0.3s ease-in-out'
        _hover={{
          transform: 'scale(1.05)',
        }}
      />
    </Box>
  );
};

export default CardArticleCover;
