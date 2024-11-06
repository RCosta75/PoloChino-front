import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/router";
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
      fetch(`http://localhost:3000/users/get/${user.token}`)
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
    fetch("http://localhost:3000/users/update", {
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
    <div className="bg-red-100 flex justify-center items-center h-screen">
      <div className="w-1/2 h-screen hidden lg:block">
        <img src="lassphoto.jpg" alt="Your Image Alt Text"/>
      </div>
      <div className="lg:p-36 md:p-52 sm:20 p-8 w-full lg:w-1/2">
        <h1 className="text-2xl font-semibold mb-4">Mes informations</h1>
  
        {error && <p className="text-red-600">{error}</p>}
  
        <div className="mb-4 bg-sky-100">
          <label className="block text-gray-600">Nom d'utilisateur</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
  
        <div className="mb-4 bg-sky-100">
          <label className="block text-gray-700">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700">Ancien mot de passe</label>
          <input
            type="password"
            value={oldPassword}
            onChange={(e) => setOldPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:border-blue-500"
            autoComplete="off"
          />
        </div>
  
        <div className="mb-4">
          <label className="block text-gray-700">Nouveau mot de passe</label>
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
          className="bg-red-500 hover:bg-blue-600 text-white font-semibold rounded-md py-2 px-4 w-full"
        >
          Mettre à jour
        </button>
      </div>
    </div>
  );
}  
export default UserProfile