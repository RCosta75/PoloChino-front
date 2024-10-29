import cart from '../reducers/cart';
import '../styles/globals.css';
import Head from 'next/head';
//import pour redux
import { persistStore, persistReducer } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
import storage from 'redux-persist/lib/storage';

import { Provider } from 'react-redux';
import { configureStore , combineReducers } from '@reduxjs/toolkit';
import user from '../reducers/user';

const reducers = combineReducers({ cart, user });

const persistConfig = { key: 'POL-HO', storage };
 
 const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) => getDefaultMiddleware({ serializableCheck: false }),
 });

 const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
       <PersistGate persistor={persistor}>
    <Head>
    <title>Next.js App</title>
    </Head>
    <Component {...pageProps} />
    </PersistGate>
  </Provider>
    
  
  );
}

export default App;

