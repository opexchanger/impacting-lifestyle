import { FormEvent, ChangeEvent, useState } from 'react';
import {
  Stack,
  FormControl,
  Input,
  Button,
  useColorModeValue,
  Heading,
  Text,
  Container,
  Flex,
} from '@chakra-ui/react';
import { CheckIcon } from '@chakra-ui/icons';
import { newsletter } from '../translations';
import { useLocale } from '../context/useLocaleContext';

const NewsletterSubscribe: React.FC = () => {
  const [email, setEmail] = useState('');
  const [state, setState] = useState<'initial' | 'submitting' | 'success'>(
    'initial'
  );
  const [error, setError] = useState(false);
  const locale = useLocale();

  return (
    <Flex
      paddingY={{ base: '4rem', sm: '6rem', md: '8rem' }}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.700')}
    >
      <Container
        w={'lg'}
        maxW='90%'
        bg={useColorModeValue('white', 'whiteAlpha.100')}
        boxShadow={'xl'}
        rounded={'lg'}
        p={6}
        flexDir={'column'}
        className='container'
      >
        <Heading
          as={'h2'}
          fontSize={{ base: 'xl', sm: '2xl' }}
          textAlign={'center'}
          mb={5}
        >
          {newsletter[locale].title}
        </Heading>
        <Stack
          direction={{ base: 'column', md: 'row' }}
          as={'form'}
          spacing={'12px'}
          onSubmit={(e: FormEvent) => {
            e.preventDefault();
            setError(false);
            setState('submitting');

            // remove this code and implement your submit logic right here
            setTimeout(() => {
              if (email === 'fail@example.com') {
                setError(true);
                setState('initial');
                return;
              }

              setState('success');
            }, 1000);
          }}
        >
          <FormControl>
            <Input
              variant={'solid'}
              borderWidth={1}
              color={'gray.800'}
              _placeholder={{
                color: 'gray.400',
              }}
              borderColor={useColorModeValue('gray.300', 'gray.700')}
              id={'email'}
              type={'email'}
              required
              placeholder={newsletter[locale].inputPlaceholder}
              aria-label={newsletter[locale].inputPlaceholder}
              value={email}
              disabled={state !== 'initial'}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setEmail(e.target.value)
              }
            />
          </FormControl>
          <FormControl w={{ base: '100%', md: '40%' }}>
            <Button
              colorScheme={state === 'success' ? 'green' : 'blue'}
              isLoading={state === 'submitting'}
              w='100%'
              type={state === 'success' ? 'button' : 'submit'}
            >
              {state === 'success' ? (
                <CheckIcon />
              ) : (
                newsletter[locale].buttonText
              )}
            </Button>
          </FormControl>
        </Stack>
        <Text
          mt={2}
          textAlign={'center'}
          color={error ? 'red.500' : 'gray.500'}
        >
          {error ? newsletter[locale].error : newsletter[locale].shortSentence}
        </Text>
      </Container>
    </Flex>
  );
};

export default NewsletterSubscribe;
