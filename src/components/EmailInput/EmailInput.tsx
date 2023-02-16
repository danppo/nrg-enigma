import { ChangeEvent, useState } from 'react';
import { Input } from '@chakra-ui/react';

type Props = {
  isInvalid: boolean;
  setIsInvalid: (isValid: boolean) => void;
  value: string;
  setValue: (value: string) => void;
  disabled?: boolean;
  placeholder?: string;
};

const EmailInput = ({ disabled, placeholder, setValue, setIsInvalid }: Props) => {
  const [inputValue, setInputValue] = useState('');
  const [isTouched, setIsTouched] = useState(false);
  const [isInvalidInput, setIsInvalidInput] = useState(false);
  const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (!isTouched) {
      setIsTouched(true);
    }
    setInputValue(e.target.value);
    console.log(e.target.value.length);
  };

  const handleOnBlur = () => {
    if (isTouched && inputValue.length > 0) {
      const isInvalid = inputValue.match(validEmail) ? false : true;
      setIsInvalidInput(isInvalid);
      setValue(inputValue);
      setIsInvalid(isInvalid);
    }
  };

  return (
    <Input
      // borderColor='green.200'
      disabled={disabled}
      value={inputValue}
      onChange={handleUserNameChange}
      placeholder={placeholder}
      isInvalid={isTouched ? isInvalidInput : false}
      onBlur={handleOnBlur}

      // maxLength={10}
    />
  );
};

export default EmailInput;
