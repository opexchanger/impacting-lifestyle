import { HStack, SpaceProps, Tag } from '@chakra-ui/react';

interface IBlogTags {
  tags: Array<string>;
  marginTop?: SpaceProps['marginTop'];
  marginBottom?: SpaceProps['marginBottom'];
}

const BlogTags: React.FC<IBlogTags> = (props) => {
  return (
    <HStack
      spacing={2}
      marginTop={props.marginTop}
      marginBottom={props.marginBottom}
    >
      {props.tags.map((tag) => {
        return (
          <Tag size={'md'} variant='solid' colorScheme='orange' key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

export default BlogTags;
