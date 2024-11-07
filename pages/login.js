import React, { Suspense, lazy } from "react";
import Head from "next/head";

// Dynamically import the Login component with React.lazy
const Login = lazy(() => import("../components/header/Login"));

function LoginPage() {
  return (
    <>
      <Head>
        <title>Login / POL-HO</title>
      </Head>
      {/* Wrapping Login in Suspense with a fallback */}
      <Suspense fallback={<div>Loading login...</div>}>
        <Login />
      </Suspense>
    </>
  );
}

export default LoginPage;
