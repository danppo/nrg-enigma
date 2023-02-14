import { ChangeEvent, useState } from 'react';
import {
  Box,
  Input,
  Button,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react';
import EmailInput from '../EmailInput';
import { BeatLoader } from 'react-spinners';

const Register = () => {
  const [emailValue, setEmailValue] = useState('');
  const [isEmailInvalid, setIsEmailInvalid] = useState(true);

  return (
    <Box textAlign='center'>
      <Stack mx={8} spacing={3}>
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
          // onClick={handleRegister}
          // isLoading={isLoading}
          spinner={<BeatLoader size={8} color='white' />}
        >
          {' '}
          Register{' '}
        </Button>
        <Alert status='error'>
          <AlertIcon />
          <AlertTitle>Your browser is outdated!</AlertTitle>
          <AlertDescription>Your Chakra experience may be degraded.</AlertDescription>
        </Alert>
      </Stack>
    </Box>
  );
};

export default Register;
