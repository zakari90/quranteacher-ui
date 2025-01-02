"use client"
import { useEffect } from 'react';
import { useState } from 'react';
import UserTable from '../component/userTable';



function UsersPage() {
  

  const [data, setData] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('/api/users');  // The API route you defined
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    fetchData();
  }, []);


  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">User List</h1>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>Loading...</p>
      )}
      {/* <UserTable users={data} /> */}
    </div>
  );
};

export default UsersPage;
