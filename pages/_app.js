import cart from '../reducers/cart';
import '../styles/globals.css';
import Head from 'next/head';
//import pour redux
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import user from '../reducers/user';

const store = configureStore({
  reducer: {user, cart},
 });
 

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
    <Head>
    <title>Next.js App</title>
    </Head>
    <Component {...pageProps} />
  </Provider>
    
  
  );
}

export default App;

