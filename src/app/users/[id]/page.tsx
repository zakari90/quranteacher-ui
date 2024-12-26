"use client"
import { use,useEffect, useState } from 'react';


export interface User {
  id: string;
  name: string;
  email: string;
}

const UserDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {

  const { id } = use(params);
  const [user, setUser] = useState<User | null>(null);
  
  useEffect(() => {
    if (id) {
      fetch(`http://localhost:5000/api/users/${id}`, {
        method: 'GET',
        headers: {"Content-Type": "application/json"}
      })
        .then((response) => response.json())
        .then((data) => setUser(data))  // Handle the user data
        .catch((error) => console.error('Error:', error));
    }
  }, [id]);

  console.log(user);
  
  if (!user) return <div>Loading...</div>;


  return (
    <div>
      <h1 className="text-2xl">{user.name}</h1>
      <h1 className="text-2xl">{user.email}</h1>
    </div>
  );
};

export default UserDetailPage;
