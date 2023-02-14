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

const EmailInput = ({ disabled, setIsInvalid, value, setValue, placeholder, isInvalid }: Props) => {
  const [isTouched, setIsTouched] = useState(false);
  const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  const handleUserNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
    if (isTouched) {
      console.log(isInvalid);
      // console.log(e.target.value.match(validEmail) ? true : false);

      setIsInvalid(e.target.value.match(validEmail) ? false : true);
    } else {
      setIsTouched(true);
    }
  };

  return (
    <Input
      disabled={disabled}
      value={value}
      onChange={handleUserNameChange}
      placeholder={placeholder}
      isInvalid={isTouched ? isInvalid : false}
      onBlur={() => console.log('onBlur')}
    />
  );
};

export default EmailInput;
