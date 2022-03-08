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
    hljs.highlightBlock(findDOMNode(codeRef.current) as HTMLElement);
  }, []);

  return (
    <Box>
      <pre>
        <code className={language} ref={codeRef}>
          {children}
        </code>
      </pre>
      <Text as='span' fontSize='sm' fontWeight='bold' colorScheme='gray'>
        {filename}
      </Text>
    </Box>
  );
}
