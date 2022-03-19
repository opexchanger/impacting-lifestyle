import {
  Box,
  Flex,
  IconButton,
  Collapse,
  useColorModeValue,
  useDisclosure,
  Container,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';

import DarkModeSwitch from '../components/DarkModeSwitch';
import DesktopNav from '../components/DesktopNav';
import MobileNav from '../components/MobileNav';
import Logo from '../components/Logo';
import { navItems } from '../translations';
import { useLocale } from '../context/useLocaleContext';

export default function Navigation() {
  const { isOpen, onToggle } = useDisclosure();
  const locale = useLocale();

  return (
    <Box
      borderBottom={1}
      borderStyle={'solid'}
      borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')}
    >
      <Container
        maxW={'7xl'}
        paddingX={{ base: 2, xs: 4, sm: 12 }}
        className='container'
      >
        <Flex paddingY={'4'} align={'center'} className='flex-outside'>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}
          >
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex
            flex='1'
            justify={{ base: 'center', md: 'start' }}
            align='center'
          >
            <Logo />
            <Box display={{ base: 'none', md: 'block' }} ml={10}>
              <DesktopNav navItems={navItems[locale]} />
            </Box>
          </Flex>
          <Flex
            flex={{ base: 1, md: 0 }}
            justify='end'
            className='switch-wrapper'
          >
            <DarkModeSwitch />
          </Flex>
        </Flex>

        <Collapse in={isOpen} animateOpacity>
          <MobileNav navItems={navItems[locale]} />
        </Collapse>
      </Container>
    </Box>
  );
}
