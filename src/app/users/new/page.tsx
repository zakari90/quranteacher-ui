"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';


const backendURL = process.env.PUBLIC_BACKEND_URL || 'http://localhost:5000/';
// 'https://quranteacher-backend.onrender.com/'
const NewUserPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);

const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (!name.trim()) {
    alert("Please enter a name.");
    return;
  }
  try {
    const response = await fetch(`${backendURL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email }),
    });

    
    if (!response.ok) {
      throw new Error('Failed to create user');
    }

    router.push('/users');
  } catch (err) {
    if (err instanceof Error) {
      setError(err.message);
    } else {
      setError('An unknown error occurred');
    }
  }
};

  
  return (
    <div>
      <h1>Add New User</h1>
      {error && <p className="text-red-500">{error}</p>}
      <form onSubmit={handleSubmit}>
        <input
        name='name'
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Name"
          className="border p-2"
        />
      <input
                name='email'
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Name"
          className="border p-2"
        />
        <button type="submit" className="ml-2 p-2 bg-blue-500 text-white">
          Add User
        </button>
      </form>
    </div>
  );
}  

export default NewUserPage;
