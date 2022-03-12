import { Tag, TagLabel, TagLeftIcon, TagProps } from '@chakra-ui/react';
import { BiCategoryAlt } from 'react-icons/bi';
import { ITag } from '../types/sanity';

const CategoryTag: React.FC<TagProps & ITag> = ({ value, ...props }) => {
  return (
    <Tag
      size='sm'
      colorScheme='orange'
      borderRadius='full'
      marginRight='2'
      {...props}
    >
      <TagLeftIcon as={BiCategoryAlt} />
      <TagLabel>{value}</TagLabel>
    </Tag>
  );
};

export default CategoryTag;
