import { Stack, useColorModeValue } from '@chakra-ui/react';
import { INavItem } from '../types';
import MobileNavItem from './MobileNavItem';

const MobileNav: React.FC<{ navItems: INavItem[] }> = ({ navItems }) => {
  return (
    <Stack
      bg={useColorModeValue('white', 'gray.800')}
      p={4}
      display={{ md: 'none' }}
    >
      {navItems.map((navItem) => (
        <MobileNavItem key={navItem.label} {...navItem} />
      ))}
    </Stack>
  );
};

export default MobileNav;
