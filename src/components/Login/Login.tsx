import { ChangeEvent, useState } from 'react';
import { Box, Input, Button, Stack } from '@chakra-ui/react';
import EmailInput from '../EmailInput';
import { BeatLoader } from 'react-spinners';
import axios from 'axios';

const Login = () => {
  const [value, setValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [passwordValue, setPasswordValue] = useState('');
  const [isLoading, setIsloading] = useState(false);
  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const handleLogin = () => {
    // TODO: add validation
    const loginPayload = {
      email: 'eve.holt@reqres.in',
      password: 'cityslicka',
    };
    setIsloading(true);

    axios.post('/api/login', loginPayload).then((res) => {
      const token = res.data.token;

      localStorage.setItem('token', token);

      // setAuthToken(token);

      // TODO: redirect user
    });
  };

  return (
    <Box textAlign='center' fontSize='xl'>
      <Stack mx={8} spacing={3}>
        <EmailInput
          disabled={false}
          isInvalid={isEmailValid}
          setIsInvalid={setIsEmailValid}
          value={emailValue}
          setValue={setEmailValue}
          placeholder='Login email'
        />

        <Input type={'password'} placeholder='Enter password' />
        <Button
          colorScheme='blue'
          onClick={handleLogin}
          isLoading={isLoading}
          spinner={<BeatLoader size={8} color='white' />}
        >
          {' '}
          Login{' '}
        </Button>
      </Stack>
    </Box>
  );
};

export default Login;
