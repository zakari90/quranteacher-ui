"use client"
import { use,useEffect, useState } from 'react';


export interface User {
  id: string;
  name: string;
  email: string;
}

const UserDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {

  const backendURL = process.env.PUBLIC_BACKEND_URL || 'http://localhost:5000/';

  const { id } = use(params);
  const [user, setUser] = useState<User | null>(null);
  console.log(id);
  
  useEffect(() => {
    if (id) {
      fetch(`${backendURL}${id}`, {
        method: 'GET',
      })
        .then((response) => response.json())
        .then((data) => setUser(data)) 
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
