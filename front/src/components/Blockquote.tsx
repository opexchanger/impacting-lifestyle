import { Box, BoxProps, Text, useColorModeValue } from '@chakra-ui/react';

const Blockquote: React.FC<BoxProps> = ({ children, ...props }) => {
  return (
    <Box
      {...props}
      backgroundColor={useColorModeValue(
        'orange.300',
        'rgba(221, 107, 32, 0.6)'
      )}
      paddingY='2'
      paddingX='3'
      borderLeft='6px solid'
      borderColor='orange.200'
      borderRightRadius='md'
      width='fit-content'
    >
      <Text color={useColorModeValue('gray.900', 'white')} marginLeft={3}>
        {children}
      </Text>
    </Box>
  );
};

export default Blockquote;
