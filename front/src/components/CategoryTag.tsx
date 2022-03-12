import { Tag, TagLabel, TagLeftIcon, TagProps } from '@chakra-ui/react';
import { BiCategoryAlt } from 'react-icons/bi';

const CategoryTag: React.FC<TagProps> = ({ title, ...props }) => {
  return (
    <Tag
      size='sm'
      colorScheme='orange'
      borderRadius='full'
      marginRight='2'
      {...props}
    >
      <TagLeftIcon as={BiCategoryAlt} />
      <TagLabel>{title}</TagLabel>
    </Tag>
  );
};

export default CategoryTag;
