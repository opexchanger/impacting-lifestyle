import { Flex, FlexProps, Text } from '@chakra-ui/react';
import { CalendarIcon } from '@chakra-ui/icons';
import { parseISO, format, isValid } from 'date-fns';
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
  if (isValid(children)) {
    console.log('isValid(children) :>> ', isValid(children));
    date = parseISO(children);
    date = format(date, `d 'de' MMMM 'de' yyyy`, { locale: ptBR });
  }

  console.log('date :>> ', date);

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
