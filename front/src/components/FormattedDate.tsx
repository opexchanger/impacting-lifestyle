import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { parseISO, format } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

export interface FormattedDateProps extends FlexProps {
  children: string;
  withIcon?: boolean;
}

const FormattedDate = ({
  children,
  withIcon,
  ...props
}: FormattedDateProps) => {
  const date = parseISO(children);

  return (
    <Flex
      align='center'
      marginX='2'
      marginTop={{ base: '1', sm: '0' }}
      {...props}
    >
      {withIcon && <CalendarIcon marginRight='2' />}
      <Text as='span' fontSize={{ base: 'sm', lg: 'md' }}>
        {format(date, `d 'de' MMMM 'de' yyyy`, { locale: ptBR })}
      </Text>
    </Flex>
  );
};

export default FormattedDate;
