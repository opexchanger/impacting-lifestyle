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
  let date: string | Date = '';
  try {
    const parsedDate = parseISO(children);
    date = format(parsedDate, `d 'de' MMMM 'de' yyyy`, { locale: ptBR });
  } catch (err) {
    console.log('Error Parsing Date :>> ', err);
  }

  return (
    <Flex align='center' marginX='2' {...props}>
      {withIcon && date && <CalendarIcon marginRight='2' />}
      <Text as='span' fontSize={{ base: 'sm', lg: 'md' }}>
        {date}
      </Text>
    </Flex>
  );
};

export default FormattedDate;
