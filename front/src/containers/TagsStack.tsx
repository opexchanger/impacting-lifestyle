import { Flex, FlexProps } from '@chakra-ui/react';
import CategoryTag from '../components/CategoryTag';
import { ITag } from '../types/sanity';

interface TagsStackProps extends FlexProps {
  tags: ITag[];
}

const TagsStack: React.FC<TagsStackProps> = ({ tags, ...props }) => {
  return (
    <Flex wrap='wrap' {...props}>
      {tags?.length &&
        tags.map((tag) => <CategoryTag value={tag.value} key={tag.label} />)}
    </Flex>
  );
};

export default TagsStack;
