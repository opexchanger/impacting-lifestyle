const headings = {
  marginTop: '0',
  marginBottom: { base: '6', lg: '8' },
  letterSpacing: '0.8px',
  fontWeight: 'bold',
  fontFamily: 'heading',
};

export default {
  p: {
    maxW: '62ch',
    marginTop: '0',
    marginBottom: { base: '6', lg: '8' },
    lineHeight: { base: '2rem', lg: '35px' },
    letterSpacing: '0.4px',
    fontSize: { base: 'lg', lg: 'xl' },
  },
  h2: {
    ...headings,
    fontSize: { base: '2xl', md: '3xl', lg: '4xl' },
  },
  h3: {
    ...headings,
    fontSize: { base: 'xl', md: '2xl', lg: '3xl' },
  },
  h4: {
    ...headings,
    fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
  },
  h5: {
    ...headings,
    fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
  },
  h6: {
    ...headings,
    fontSize: { base: 'lg', md: 'xl', lg: '2xl' },
  },
};
