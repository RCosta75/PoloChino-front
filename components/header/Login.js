import { useState } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../../reducers/user';



function Login() {
  const user = useSelector((state) => state.user.value);
  const [email, setemail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [signState, setsignState] = useState('Sign In') //Pour modifier les titres selon l'inscription/connexion
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

<div className="bg-gray-100 flex justify-center items-center h-screen">

<div className="w-1/2 h-screen hidden lg:block">
<img src="/TestPolo (1).jpg" alt="logo" onClick={() => router.push("/")}  className="object-cover w-full h-full"/>
</div>

<div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
  <h1 className="text-2xl font-semibold mb-4">{signState}</h1>
  {signState === 'Sign Up' ? 
        
        <input type="text" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" onChange={(e) => setUsername(e.target.value)} value={username} placeholder="Username" />
        : null 
      }

 
    <div className="mb-4">
      <label for="email" className="block text-gray-600">Email</label>
      <input type="text" id="email"  name="email" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" onChange={(e) => setemail(e.target.value)} value={email} placeholder="Type your Email"></input>
    </div>

    <div className="mb-4">
      <label for="password" className="block text-gray-600">Password</label>
     
      <input type="password" id="password" name="password" className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" autocomplete="off" onChange={(e) => setPassword(e.target.value)} value={password} placeholder="Type your Password"></input>
    </div>

    <div className="mb-4 flex items-center">
      <input type="checkbox" id="remember" name="remember" className="text-blue-500"></input>
      <label for="remember" className="text-gray-600 ml-2">Remember Me</label>
    </div>

    <div className="mb-6 text-blue-500">
      <a href="#" className="hover:underline">Forgot Password?</a>
    </div>

    <button onClick={signState === 'Sign In' ? handleSignIn : handleSignUp} className="bg-[#bfdbf7] hover:bg-[#010203] hover:text-[#bfdbf7] text-[#010203] font-semibold rounded-md py-2 px-4 w-full"> {signState}</button>
  

  <div className="mt-6 text-blue-500 text-center">
    <div >  {signState === 'Sign In' ? 
        <p className='text-[#010203]'>New member? <button  className="hover:underline text-blue-600" onClick={() => setsignState('Sign Up')}>Sign Up now</button></p> 
        : 
        <p>Already have an account ? <button  className="hover:underline" onClick={() => setsignState('Sign In')}>Sign In now</button></p>
      }</div>
  </div>
</div>
</div>


);
}


export default Login;