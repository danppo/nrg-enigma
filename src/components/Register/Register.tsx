import { ChangeEvent, useState } from 'react';
import { Box, Input, Button, Stack,   FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText, } from '@chakra-ui/react';
import EmailInput from '../EmailInput';
import { BeatLoader } from 'react-spinners';
import Alerts from 'components/Alerts';

const Register = () => {
  const [emailValue, setEmailValue] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(true);

  return (
    <Box textAlign='center'>
      <Stack mx={8} spacing={3}>
        <FormControl> 
          <FormLabel>User name</FormLabel>
          <Input variant='flushed' type='text' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl> 
          <FormLabel>Email address</FormLabel>
          <Input variant='flushed' type='email' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl> 
          <FormLabel>password</FormLabel>
          <Input variant='flushed' type='password' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl> 
          <FormLabel>meter number</FormLabel>
          <Input variant='flushed' type='number' />
          <FormHelperText>We'll never share your email.</FormHelperText>
        </FormControl>
        <FormControl> 
          <FormLabel>postcode </FormLabel>
          <Input variant='flushed' type='text' />
          <FormHelperText>To get local weather temprature.</FormHelperText>
        </FormControl>
        <EmailInput
          disabled={false}
          isInvalid={isEmailInvalid}
          setIsInvalid={setIsEmailInvalid}
          value={emailValue}
          setValue={setEmailValue}
          placeholder='Login email'
        />

        <Input type={'password'} placeholder='Enter password' />
        <Button
          size='md'
          colorScheme='blue'
          onClick={() => console.log('clicked')}
          // isLoading={isLoading}
          spinner={<BeatLoader size={8} color='white' />}
        >
          {' '}
          Register{' '}
        </Button>
        <Alerts />
      </Stack>
    </Box>
  );
};

export default Register;
