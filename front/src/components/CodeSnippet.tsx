import { Box, Text } from '@chakra-ui/react';
import hljs from 'highlight.js';
import { useRef, useEffect } from 'react';
import { findDOMNode } from 'react-dom';

export interface CodeSnippetProps {
  children: string;
  filename: string;
  language: string;
}

export default function CodeSnippet({
  children,
  filename,
  language,
}: CodeSnippetProps) {
  const codeRef = useRef<HTMLElement>(null);
  useEffect(() => {
    hljs.highlightElement(findDOMNode(codeRef.current) as HTMLElement);
  }, []);

  return (
    <Box>
      <pre>
        <code
          className={language}
          ref={codeRef}
          style={{ borderRadius: '8px' }}
        >
          {children}
        </code>
      </pre>
      <Text
        as='span'
        fontSize='sm'
        fontWeight='bold'
        colorScheme='gray'
        marginLeft='2'
      >
        {filename}
      </Text>
    </Box>
  );
}
