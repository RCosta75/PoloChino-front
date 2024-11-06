import cart from "../reducers/cart";
import "../styles/globals.css";
import Head from "next/head";
//import pour redux
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import user from "../reducers/user";
import { Toaster } from "sonner";

const store = configureStore({
  reducer: { user, cart },
});

function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
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
    </Provider>
  );
}

export default App;
