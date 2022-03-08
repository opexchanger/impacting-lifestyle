import { Box, BoxProps, chakra } from '@chakra-ui/react';
import NextImage, { ImageProps, ImageLoaderProps } from 'next/image';
import { shimmer, toBase64 } from '../utils';

const CoverImg = chakra(NextImage, {
  shouldForwardProp: (prop) =>
    [
      'width',
      'height',
      'src',
      'alt',
      'quality',
      'layout',
      'placeholder',
      'blurDataURL',
      'loader ',
    ].includes(prop),
});

const myLoader = (resolverProps: ImageLoaderProps): string => {
  const { src, width, quality } = resolverProps;
  return `${src}?w=${width}&q=${quality}`;
};

const NextChakraImage = (props: ImageProps & BoxProps) => {
  const { src, alt, width, quality, height, ...rest } = props;
  return (
    <Box
      pos='relative'
      cursor='pointer'
      sx={{
        '> span': {
          borderRadius: 'lg',
        },
      }}
    >
      <CoverImg
        w='auto'
        h='auto'
        width={width}
        quality={quality}
        height={height}
        src={src}
        alt={alt}
        loader={myLoader}
        placeholder='blur'
        blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(60, 60))}`}
        {...rest}
      />
    </Box>
  );
};

export default NextChakraImage;
