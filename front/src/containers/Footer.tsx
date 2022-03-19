import {
  Box,
  Container,
  SimpleGrid,
  Stack,
  StackProps,
  Text,
  Input,
  IconButton,
  useColorModeValue,
  Heading,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import Link from 'next/link';
import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
import Flags from 'country-flag-icons/react/3x2';
import { BiMailSend } from 'react-icons/bi';

import Logo from '../components/Logo';
import SocialButton from '../components/SocialButton';
import { NextChakraLink } from '../components/NextChakraLink';
import { useLocale } from '../context/useLocaleContext';
import { footerItems } from '../translations';

const flagSelectedStyle = {
  width: '38px',
  cursor: 'pointer',
  padding: '2px',
  border: '2px solid orange',
};

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
  const locale = useLocale();

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
              {locale === 'br'
                ? '© 2022 Impacting Lifestyle. Todos os direitos reservados'
                : '© 2022 Impacting Lifestyle. All rights reserved'}
            </Text>
            {/* <Stack direction={'row'} spacing={6}>
              <SocialButton label={'Twitter'} href={'#'}>
                <FaTwitter />
              </SocialButton>
              <SocialButton label={'YouTube'} href={'#'}>
                <FaYoutube />
              </SocialButton>
              <SocialButton label={'Instagram'} href={'#'}>
                <FaInstagram />
              </SocialButton>
            </Stack> */}
            <Stack>
              <Heading as='h3' fontSize={'lg'} mb={2}>
                {locale === 'br'
                  ? 'Navegue em outro idioma'
                  : 'Browse in another language'}
              </Heading>
              <Stack direction='row' spacing='3' align='center'>
                <Link href='/' locale='en'>
                  <a>
                    <Flags.US
                      title='Website in English'
                      style={
                        locale !== 'br'
                          ? flagSelectedStyle
                          : {
                              width: '30px',
                              cursor: 'pointer',
                            }
                      }
                    />
                  </a>
                </Link>
                <Link href='/' locale='br'>
                  <a>
                    <Flags.BR
                      title='Website in Portuguese'
                      style={
                        locale === 'br'
                          ? flagSelectedStyle
                          : {
                              width: '30px',
                              cursor: 'pointer',
                            }
                      }
                    />
                  </a>
                </Link>
              </Stack>
            </Stack>
          </Stack>
          {footerItems[locale].map(({ title, links }) => (
            <StackWithTitle title={title} key={title}>
              {links.map(({ label, href }) => (
                <NextChakraLink href={href} key={label}>
                  {label}
                </NextChakraLink>
              ))}
            </StackWithTitle>
          ))}
          <StackWithTitle
            title={
              locale === 'br'
                ? 'Fique por dentro'
                : 'Be better informed than your friends'
            }
          >
            <Stack direction={'row'} width='94%'>
              <Input
                placeholder={
                  locale === 'br'
                    ? 'O email que você lê'
                    : 'The email you actually open'
                }
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
            <Text fontSize='sm'>
              {locale === 'br'
                ? `Na nossa newsletter postamos conteúdos exclusivos para aproveitar
              a diferença dos formatos. Geralmente o tom é mais pessoal e os
              assuntos mais direto ao ponto.`
                : `In our newsletter we send exclusive content to explore the difference in formats. 
                Generally the tone is more personal and the content more straightforward`}
            </Text>
            <Text fontSize='sm'>
              {locale === 'br'
                ? 'Gratuito pra testar e gratuito pra se desenscrever 😛'
                : 'Free to try and free to unsubscribe 😛'}
            </Text>
          </StackWithTitle>
        </SimpleGrid>
      </Container>
    </Box>
  );
}
