import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../reducers/user";
import { toast } from "sonner";

function UserProfile() {
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  
  
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  
  useEffect(() => {
    if (user.token) {
         // Récupérer les informations utilisateur
      fetch(`https://polo-chino-back.vercel.app/users/get/${user.token}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            setUsername(user.username);
            setEmail(user.email);
          }
        });
    }
  }, [user.token]);

  const handleUpdate = () => {
    fetch("https://polo-chino-back.vercel.app/users/update", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: user.token,
        username: username,
        email: email,
        oldPassword: oldPassword,
        password: newPassword
      }),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.result) {
        dispatch(login({ token: user.token, username: data.username, email: data.email }));
        //mettre à jour l'état global de l'utilisateur avec les nouvelles informations.
        setError("");
        setOldPassword("");
        setNewPassword("");
        toast.success(`Informations mises à jour avec succès ${data.username} `);
      } else {
        setError(data.error);
      }
    });
  };

  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img src="TestPolo (2).jpg" alt="Your Image Alt Text" className="h-screen w-full"/>
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Informations</h1>
  
        {error && <p className="text-red-600">{error}</p>}
  
        <div className="mb-4">
          <label className="block">Username</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
  
        <div className="mb-4">
          <label className="block">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700">Actual Password</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700">New Password</label>
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
  
        <button
          onClick={handleUpdate}
          className="bg-sky-500 hover:bg-blue-800 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
         Update
        </button>
      </div>
    </div>
  );
}  
export default UserProfile