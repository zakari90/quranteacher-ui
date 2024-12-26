"use client"
import { useEffect } from 'react';
import { useState } from 'react';
import UserTable from '../component/userTable';


const backendURL = process.env.PUBLIC_BACKEND_URL || 'http://localhost:5000/';

function UsersPage() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${backendURL}`,{
      method: 'GET',
    })
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  console.log(users);
  
  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">User List</h1>
      <UserTable users={users} />
    </div>
  );
};

export default UsersPage;
