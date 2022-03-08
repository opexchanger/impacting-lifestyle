import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import { useColorMode, Switch, Flex } from '@chakra-ui/react';

const DarkModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const isDark = colorMode === 'dark';
  return (
    <Flex align='center'>
      <SunIcon w='3' display={{ base: 'none', xs: 'block' }} />
      <Switch
        marginX='2'
        color='green'
        isChecked={isDark}
        onChange={toggleColorMode}
      />
      <MoonIcon w='3' display={{ base: 'none', xs: 'block' }} />
    </Flex>
  );
};

export default DarkModeSwitch;
