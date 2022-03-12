const headings = {
  marginTop: '0',
  marginBottom: { base: '6', lg: '8' },
  letterSpacing: '0.8px',
  fontWeight: 'bold',
  fontFamily: 'heading',
};

export default (mode: CallableFunction, props: any) => ({
  '> *': {
    marginTop: '0',
    marginBottom: { base: '6', lg: '8' },
  },
  'p, blockquote, code, ul, ol': {
    maxW: '62ch',
    lineHeight: { base: '2rem', lg: '35px' },
    letterSpacing: '0.4px',
    fontSize: { base: 'lg', lg: 'xl' },
  },
  'h2, h3, h4, h5, h6': {
    ...headings,
  },
  h2: {
    fontSize: { base: '2xl', md: '3xl', lg: '4xl' },
  },
  h3: {
    fontSize: { base: 'xl', md: '2xl', lg: '3xl' },
  },
  'h4, h5, h6': {
    fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
  },
  a: {
    color: mode('orange.400', 'orange.300')(props),
    _hover: {
      textDecoration: 'underline',
    },
  },
  'ul, ol': {
    listStylePosition: 'inside',
    li: {
      textAlign: 'justify',
      textIndent: '40px',
      lineHeight: 1.5,
      '::marker': {
        color: 'orange.400',
        fontWeight: 'bold',
      },
    },
  },
  ol: {
    li: {
      span: {
        marginLeft: '0.75rem',
      },
    },
  },
  figure: {
    display: 'grid',
    justifyContent: 'center',
    gap: '8px',
    maxW: '748px',
    img: {
      width: '100%',
      maxW: '480px',
    },
    figcaption: {
      width: '100%',
      fontSize: 'md',
      fontStyle: 'italic',
      textAlign: 'center',
    },
  },
});
