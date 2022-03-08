import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import { BiMailSend } from 'react-icons/bi';

import Logo from '../components/Logo';
import SocialButton from '../components/SocialButton';
import { NextChakraLink } from '../components/NextChakraLink';

const StackWithTitle = ({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) => {
  return (
    <Stack align={'flex-start'}>
      <Heading as='h3' fontSize={'lg'} mb={2}>
        {title}
      </Heading>
      {children}
    </Stack>
  );
};

export default function Footer() {
  return (
    <Box color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid
          templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
          spacing={8}
        >
          <Stack spacing={6}>
            <Box>
              <Logo color={useColorModeValue('gray.700', 'white')} />
            </Box>
            <Text fontSize={'sm'}>
              © 2022 Impacting Lifestyle. All rights reserved
            </Text>
            <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack>
          </Stack>
          <StackWithTitle title='Company'>
            <NextChakraLink href='/about'>About Us</NextChakraLink>
            <NextChakraLink href='/'>Blog</NextChakraLink>
            <NextChakraLink href='/'>Contact us</NextChakraLink>
            <NextChakraLink href='/'>Pricing</NextChakraLink>
            <NextChakraLink href='/'>Testimonials</NextChakraLink>
          </StackWithTitle>
          <StackWithTitle title='Support'>
            <NextChakraLink href='/'>Help Center</NextChakraLink>
            <NextChakraLink href='/'>Terms of Service</NextChakraLink>
            <NextChakraLink href='/'>Legal</NextChakraLink>
            <NextChakraLink href='/'>Privacy Policy</NextChakraLink>
            <NextChakraLink href='/'>Satus</NextChakraLink>
          </StackWithTitle>
          <StackWithTitle title='Stay up to date'>
            <Stack direction={'row'}>
              <Input
                placeholder={'Your email address'}
                bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                border={0}
                _focus={{
                  bg: 'blackAlpha.100',
                }}
              />
              <IconButton
                colorScheme='blue'
                aria-label='Subscribe'
                icon={<BiMailSend />}
              />
            </Stack>
          </StackWithTitle>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
