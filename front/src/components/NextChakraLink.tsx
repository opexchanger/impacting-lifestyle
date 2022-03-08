import { Link } from '@chakra-ui/react';
import NextLink from 'next/link';
import { ReactNode } from 'react';

export const NextChakraLink = ({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) => {
  return (
    <NextLink href={href}>
      <Link>{children}</Link>
    </NextLink>
  );
};
