import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useRouter } from "next/router";

function UserInfo() {
  const user = useSelector((state) => state.user.value);
  const router = useRouter();
  
  const [userInfo, setUserInfo] = useState({
    username: "",
    email: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    if (user.token) {
      // Récupérer les informations utilisateur
      fetch(`https://polo-chino-back.vercel.app/users/get/${user.token}`)
        .then((response) => response.json())
        .then((data) => {
          if (data.result) {
            setUserInfo({
              username: data.username,
              email: data.email,
            });
          } else {
            setError(data.error);
          }
        })
        .catch((error) => {
          setError("Erreur lors de la récupération des informations utilisateur");
        });
    }
  }, [user.token]);

  const handleEdit = () => { router.push('/updateinformation'); 
    // Assurez-vous que ce chemin correspond à la page de modification des informations
     }





  return (
    <div className="min-h-screen flex items-center justify-center">
    <div className="w-2/6 h-full p-4 bg-white shadow-lg rounded-lg">
      <h1 className="text-2xl font-semibold mb-4">Informations Utilisateur</h1>
  
      {error && <p className="text-red-600">{error}</p>}
      
      <div className="mb-4">
        <label className="block text-gray-700">Nom d'utilisateur</label>
        <p className="border border-gray-300 rounded-md py-2 px-3">{user.username}</p>
      </div>
  
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <p className="border border-gray-300 rounded-md py-2 px-3">{user.email}</p>
      </div>
  
      <button
        onClick={handleEdit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Modifier les informations
      </button>
    </div>
  </div>
  

  
  );
}

export default UserInfo;
