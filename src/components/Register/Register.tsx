import { ChangeEvent, useState } from 'react';
import { Box, Input, Button, Stack } from '@chakra-ui/react';
import EmailInput from '../EmailInput';
import { BeatLoader } from 'react-spinners';
import Alerts from 'components/Alerts';

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
