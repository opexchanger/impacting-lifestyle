import {
  Heading,
  useColorModeValue,
  type HeadingProps,
} from '@chakra-ui/react';

interface SectionTitleProps extends HeadingProps {
  decorDirection?: 'under' | 'side';
}

function getDecor(direction: string, color: HeadingProps['color']) {
  console.log(direction);
  return {
    content: "''",
    width: direction === 'under' ? '100%' : '0.55rem',
    height: direction === 'under' ? '25%' : '100%',
    position: 'absolute',
    bottom: direction === 'under' ? 1 : 0,
    left: 0,
    bg: color,
    zIndex: -1,
  };
}

const SectionTitle: React.FC<SectionTitleProps> = ({
  as,
  color,
  decorDirection,
  children,
  ...restProps
}) => {
  const colorDefault = useColorModeValue(
    'orange.400',
    'rgba(221, 107, 32, 0.6)'
  );

  const bgColor = color || colorDefault;
  const textDecoration = decorDirection && getDecor(decorDirection, bgColor);

  return (
    <Heading
      position='relative'
      display='inline-block'
      lineHeight='1.1'
      {...(as && { as })}
      {...(textDecoration && { _after: textDecoration })}
      {...(decorDirection === 'side' && { paddingLeft: '6' })}
      {...restProps}
    >
      {children}
    </Heading>
  );
};

export default SectionTitle;
