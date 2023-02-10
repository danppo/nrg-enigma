import { ChangeEvent, useState } from "react";
import {
  Box,
  Text,
  VStack,
  Code,
  Grid,
  Input,
  Button,
  Stack,
} from "@chakra-ui/react";
import { BeatLoader } from "react-spinners";

const Login = () => {
  const [value, setValue] = useState("");
  const [isLoading, setIsloading] = useState(false);
  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) =>
    setValue(event.target.value);

  const handleLogin = () => {
    setIsloading(true);
  };

  return (
    <Box textAlign="center" fontSize="xl">
      <Stack mx={8} spacing={3}>
        <Input
          value={value}
          onChange={handleUserNameChange}
          placeholder="Login email"
        />

        <Input type={"password"} placeholder="Enter password" />
        <Button
          colorScheme="blue"
          onClick={handleLogin}
          isLoading={isLoading}
          spinner={<BeatLoader size={8} color="white" />}
        >
          {" "}
          Login{" "}
        </Button>
      </Stack>
      <Grid minH="30vh" p={3}>
        <VStack spacing={8}>
          <Text>
            Edit <Code fontSize="xl">src/App.tsx</Code> and save to reload.
          </Text>
        </VStack>
      </Grid>
    </Box>
  );
};

export default Login;
