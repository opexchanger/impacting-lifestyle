import BlockContent from '@sanity/block-content-to-react';
import Blockquote from '../components/Blockquote';
import CodeSnippet from '../components/CodeSnippet';
import NextChakraImage from '../components/NextChakraImage';
import { urlFor } from '../connection/functions';

export const textContentSerializer = {
  types: {
    image: ({ node: { asset, caption } }) => (
      <figure style={{ marginTop: '3em' }}>
        <NextChakraImage
          src={urlFor(asset).width(720).url()}
          alt={caption}
          objectFit='contain'
          width='720px'
          height='480px'
        />
        <figcaption>{caption}</figcaption>
      </figure>
    ),
    code: ({ node: { code, filename, language } }) => (
      <CodeSnippet filename={filename} language={language}>
        {code}
      </CodeSnippet>
    ),
    block: (props: any) => {
      const { style = 'normal' } = props.node;

      if (style === 'blockquote') {
        return <Blockquote>{props.children}</Blockquote>;
      }

      // Fall back to default handling
      return BlockContent.defaultSerializers.types.block(props);
    },
  },
  listItem: (props: any) =>
    props.type === 'bullet' ? (
      <li>{props.children}</li>
    ) : (
      <li>
        <span>{props.children}</span>
      </li>
    ),
};
