import * as React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import PageLogin from 'pages/Login/PageLogin';
import PageIndex from 'pages/Index/PageIndex';
import PageRegister from 'pages/Register/PageRegister';

export const App = () => {
  const Error = () => (
    <div id='error-page'>
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
    </div>
  );
  // TODO: protect the routes

  return (
    <ChakraProvider theme={theme}>
      <Router>
        <nav>
          <ul>
            <li>
              <Link to={'/'}>Home</Link>
            </li>
            <li>
              <Link to={'login'}>Login</Link>
            </li>
            <li>
              <Link to={'register'}>Register</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path='/' element={<PageIndex />} />
          <Route path='/login' element={<PageLogin />} />
          <Route path='/register' element={<PageRegister />} />
          <Route path='*' element={<Error />} />
        </Routes>
      </Router>
      {/* <Box textAlign='center' fontSize='xl'>
        <Grid p={3}>
          <ColorModeSwitcher justifySelf='flex-end' />
          <VStack spacing={8}>
            <Text>
              Edit <Code fontSize='xl'>src/App.tsx</Code> and save to reload.
            </Text>
            <Link
              color='teal.500'
              href='https://chakra-ui.com'
              fontSize='2xl'
              target='_blank'
              rel='noopener noreferrer'
            >
              Learn Chakra
            </Link>
          </VStack>
        </Grid>
        <PageLogin />
      </Box> */}
    </ChakraProvider>
  );
};
