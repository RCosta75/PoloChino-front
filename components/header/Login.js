import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../reducers/user";
import clsx from "clsx";
import { toast } from "sonner";

function Login() {
  const user = useSelector((state) => state.user.value);
  const [email, setemail] = useState("");
  const [emailError, setEmailError] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [signState, setsignState] = useState("Sign In"); //Pour modifier les titres selon l'inscription/connexion
  const [buttonPressed, setButtonPressed] = useState(false);
  const dispatch = useDispatch();
  const router = useRouter();
  const { redirect } = router.query; // Récupère l'URL de redirection depuis rightBasket

  useEffect(() => {
    if (user.token) {
      router.push(redirect || "/"); // Redirige vers la page précédente ou vers la page d'accueil
    }
  }, [user.token, redirect]);
  //Le paramètre redirect indique la page où l'utilisateur était avant de se connecter.
  //En surveillant redirect, nous pouvons rediriger l'utilisateur
  // vers cette page après une connexion réussie.
  //Si nous ne surveillons pas user.token,
  // nous ne saurons pas quand l'utilisateur s'est connecté,
  // et nous ne pourrons pas effectuer la redirection en conséquence.

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      if (signState === "Sign In") {
        handleSignIn();
      } else {
        handleSignUp();
      }
    }
  };

  useEffect(() => {
    if (buttonPressed) {
      setTimeout(() => {
        setButtonPressed(false);
      }, 300);
    }
  }, [buttonPressed]);

  const handleSignUp = () => {
    if (EMAIL_REGEX.test(email)) {
      fetch("http://localhost:3000/users/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, username, password }),
      })
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            dispatch(login({ token: data.token, username, email }));
            toast.success(`Welcome ${username}`);
          }
        });
    } else {
      setEmailError(false);
        toast.error(`Error try again`);
    }
  };

  const handleSignIn = () => {
    fetch("http://localhost:3000/users/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.result) {
          dispatch(
            login({
              token: data.token,
              email: data.email,
              username: data.username,
            })
          );
          toast.success(`Welcome Back ${data.username}`);
        } else {
          setEmailError(false);
            toast.error(`Error try again`);
        }
      });
  };

  const EMAIL_REGEX =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return (
    <div className="bg-gray-100 flex justify-center items-center h-screen">
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2  h-screen">
        <h1 className="text-2xl mt-20 font-semibold mb-4">{signState}</h1>
        {signState === "Sign Up" ? (
          <>
            Username
            <input
              type="text"
              className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
              autoComplete="off"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              placeholder="Username"
              onKeyDown={handleKeyDown}
            />
          </>
        ) : null}

        <div className="mb-4">
          <label for="email" className="block text-gray-600">
            Email
          </label>
          <input
            type="text"
            id="email"
            name="email"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            onChange={(e) => setemail(e.target.value)}
            value={email}
            placeholder="Type your Email"
            onKeyDown={handleKeyDown}
          />
          {!emailError && <p className="text-red-600">Invalid email address</p>}
        </div>

        <div className="mb-4">
          <label for="password" className="block text-gray-600">
            Password
          </label>

          <input
            type="password"
            id="password"
            name="password"
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Type your Password"
            onKeyDown={handleKeyDown}
          ></input>
        </div>

        <button
          onClick={() => {
            signState === "Sign In" ? handleSignIn() : handleSignUp();
            setButtonPressed(true);
          }}
          className={clsx(
            buttonPressed
              ? "bg-[#010203] text-[#bfdbf7]"
              : "bg-[#bfdbf7] text-[#010203]",
            " font-semibold rounded-md py-2 px-4 w-full"
          )}
        >
          {signState}
        </button>

        <div className="mt-6 text-blue-500 text-center">
          <div>
            {signState === "Sign In" ? (
              <p className="text-[#010203]">
                New member?{" "}
                <button
                  className="hover:underline text-blue-600"
                  onClick={() => {
                    setsignState("Sign Up");
                  }}
                >
                  Sign Up now
                </button>
              </p>
            ) : (
              <p>
                <span className="text-slate-950">
                  Already have an account ?{" "}
                </span>
                <button
                  className="hover:underline"
                  onClick={() => {
                    setsignState("Sign In");
                  }}
                >
                  Sign In now
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="w-1/2 h-screen hidden lg:block">
        <img
          src="/TestPolo (1).jpg"
          alt="logo"
          onClick={() => router.push("/")}
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
}

export default Login;
