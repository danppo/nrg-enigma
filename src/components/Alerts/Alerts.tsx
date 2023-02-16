import {
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  CloseButton,
  Flex,
} from '@chakra-ui/react';
import useAlertStore from 'store/AlertStore';

const Alerts = () => {
  const alertList = useAlertStore((state) => state.alertList);
  const removeAlert = useAlertStore((state) => state.removeAlert);

  if (alertList.length === 0) {
    return null;
  }

  return (
    <Stack mx={8} spacing={3}>
      {alertList.map((item) => (
        <Alert key={item.id} status={item.type} justifyContent='space-between'>
          <Flex>
            <AlertIcon />
            <AlertTitle>{item.title}</AlertTitle>
            <AlertDescription>{item.description}</AlertDescription>
          </Flex>
          <CloseButton
            size='sm'
            alignSelf='flex-start'
            position='relative'
            right={-1}
            top={-1}
            onClick={() => removeAlert(item.id)}
          />
        </Alert>
      ))}
    </Stack>
  );
};

export default Alerts;
