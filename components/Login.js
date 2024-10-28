import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../reducers/user';
import styles from '../styles/Login.module.css';



function Login() {
  const user = useSelector((state) => state.user.value);
  const [email, setemail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signState, setsignState] = useState('SignIn') //Pour modifier les titres selon l'inscription/connexion
  const dispatch = useDispatch();
  const router = useRouter();


  if (user.token) {
    router.push('/');
  }

  const handleSignUp = () => {
    fetch('http://localhost:3000/users/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, username, password }),
    }).then(response => response.json())
      .then(data => {
        if (data.result) {
          dispatch(login({ token: data.token, username, email }));
          
        }
       
      });
  };

 
  const handleSignIn = () => {
    fetch('http://localhost:3000/users/signin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    }).then(response => response.json())
      .then(data => {
        if (data.result) {
          dispatch(login({ token: data.token, email: data.email, username: data.username }));

        }
     
      });
  };



  
   return (
    <div className={styles.main}>
    <div className={styles.left}>
      <h3>{signState}</h3> {/*  Par default SignIn */}
      {/* Si SignUp on rajoute l'input username en plus sinon null*/}
      {signState === 'SignUp' ? 
        <input type="text" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username" />
        : null 
      }
      <input type="text" onChange={(e) => setemail(e.target.value)} value={email} placeholder="Email" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Password" />
      {/* Le bouton call par defaut la fonction handleSignIn mais si SignUp call la fonction handleSignUp*/}
      <button  onClick={signState === 'SignIn' ? handleSignIn : handleSignUp}>
        {signState}
      </button>
       {/*Par defaut on  a le bouton pour afficher SignUp et si on est dans SignIn on le bouton pour afficher SignIn*/}
      {signState === 'SignIn' ? 
        <p>New member? <span onClick={() => setsignState('SignUp')}>Sign Up now</span></p> 
        : 
        <p>Already have an account? <span onClick={() => setsignState('SignIn')}>Sign In now</span></p>
      }
    </div>
    <div className={styles.right}>
        <h1>Image</h1>
    </div>
    </div>
  );
}
export default Login;
