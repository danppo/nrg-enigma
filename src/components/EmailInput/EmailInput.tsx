import { ChangeEvent } from 'react';
import { Input } from '@chakra-ui/react';

type Props = {
  isValid: boolean;
  setIsValid: (isValid: boolean) => void;
  value: string;
  setValue: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
};

const EmailInput = ({ disabled, setIsValid, value, setValue, placeholder, isValid }: Props) => {
  const validEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setIsValid(e.target.value.match(validEmail) ? true : false);
  };

  return (
    <Input
      disabled={disabled}
      value={value}
      onChange={handleUserNameChange}
      placeholder={placeholder}
      isInvalid={isValid}
    />
  );
};

export default EmailInput;
