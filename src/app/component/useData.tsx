// "use client"
// import React from 'react'
// import { useEffect, useState } from 'react';
// import UserTable from './userTable';



// export function UserData() {
//   const [users, setUsers] = useState([]);

//   useEffect(() => {
//     fetch('/api/users',{
//       method: 'GET',
//       headers: { 'Content-Type': 'application/json' },
//     })
//       .then((res) => res.json())
//       .then((data) => setUsers(data));
//   }, []);
// console.log(users);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-semibold mb-4">User List</h1>
//       <UserTable users={users} />
//     </div>
//   );
// };

// export function UserDetailData(id:string) {
//   const [user, setUser] = useState(null);

//   useEffect(() => {
//     if (id) {
//       fetch(`/api/users/${id}`)
//         .then((res) => res.json())
//         .then((data) => setUser(data));
//     }
//   }, [id]);

//   if (!user) return <div>Loading...</div>;

//   return (
//     <div>
//       <h1 className="text-2xl">{user.name}</h1>
//       {/* Add form for editing user */}
//     </div>
//   );
// }