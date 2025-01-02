"use client"
import { Button } from '@/components/ui/button';
import { usePathname } from 'next/navigation';
import { use,useEffect, useState } from 'react';


export interface User {
  id: string;
  name: string;
  email: string;
}

const UserDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {

  const backendURL = process.env.PUBLIC_BACKEND_URL || 'http://localhost:5000/';

  const { id } = use(params);
  // const [user, setUser] = useState<User | null>(null);
  // console.log(id);
  
  // useEffect(() => {
  //   if (id) {
  //     fetch(`${backendURL}${id}`, {
  //       method: 'GET',
  //     })
  //       .then((response) => response.json())
  //       .then((data) => setUser(data)) 
  //       .catch((error) => console.error('Error:', error));
  //   }
  // }, [id]);

  // console.log(user);
  
  // if (!user) return <div>Loading...</div>;


  // return (
  //   <div>
  //     <h1 className="text-2xl">{user.name}</h1>
  //     <h1 className="text-2xl">{user.email}</h1>
  //   </div>
  // );

  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
const pathname = usePathname()
  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${pathname}`);
        if (!response.ok) {
          throw new Error('Error fetching user data');
        }
        const data = await response.json();
        setUser(data);
      } catch (err) {
        setError('Failed to fetch user data');
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  if (!user) {
    return <div>User not found.</div>;
  }

  return (
    <div>

      <h1>User Profile</h1>
      <p>Name: {user.name}</p>
      <p>Email: {user.email}</p>
      {/* Add more user data as needed */}
    </div>
  );

};

export default UserDetailPage;
