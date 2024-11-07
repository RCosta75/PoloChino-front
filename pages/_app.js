import cart from "../reducers/cart";
import "../styles/globals.css";
import Head from "next/head";
//import pour redux
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage";
import { combineReducers, configureStore } from "@reduxjs/toolkit";

import { Provider } from "react-redux";
import user from "../reducers/user";
import { Toaster } from "sonner";

const persistConfig = { key: "applicationName", storage };

const reducers = combineReducers({ user, cart });

const store = configureStore({
  reducer: persistReducer(persistConfig, reducers),
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }),
});

const persistor = persistStore(store);

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Toaster
          toastOptions={{
            classNames: {
              error: "bg-red-400",
              success: "bg-[#bfdbf7]",
              warning: "text-yellow-400",
              info: "bg-blue-400",
            },
          }}
        />
        <Head>
          <title>Next.js App</title>
        </Head>
        <Component {...pageProps} />
      </PersistGate>
    </Provider>
  );
}

export default App;
