import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';

const PostDate: React.FC<FlexProps & { date: string }> = ({
  date,
  ...props
}) => {
  return (
    <Flex
      align='center'
      marginX='2'
      marginTop={{ base: '1', sm: '0' }}
      {...props}
    >
      <CalendarIcon marginRight='2' />
      <Text as='span'>{date}</Text>
    </Flex>
  );
};

////////////////////////////////////////////////////////////

import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export interface FormattedDateProps extends FlexProps {
  children: string;
}

const FormattedDate = ({ children, ...props }: FormattedDateProps) => {
  const date = parseISO(children);

  return (
    <Flex
      align='center'
      marginX='2'
      marginTop={{ base: '1', sm: '0' }}
      {...props}
    >
      <CalendarIcon marginRight='2' />
      <Text as='span'>
        {format(date, `d 'de' MMMM 'de' yyyy`, { locale: ptBR })}
      </Text>
    </Flex>
  );
};

export default FormattedDate;
