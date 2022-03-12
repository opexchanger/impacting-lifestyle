import { Link, LinkProps as ChakraProps } from '@chakra-ui/react';
import NextLink, { LinkProps as NextProps } from 'next/link';

interface NextChakraLinkProps {
  href: NextProps['href'];
  nextProps?: NextProps;
  chakraProps?: ChakraProps;
}

export const NextChakraLink: React.FC<NextChakraLinkProps> = ({
  href,
  children,
  nextProps,
  chakraProps,
}) => {
  return (
    <NextLink href={href} {...nextProps}>
      <Link {...chakraProps}>{children}</Link>
    </NextLink>
  );
};
