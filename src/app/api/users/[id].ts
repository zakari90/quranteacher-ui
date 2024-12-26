// /pages/api/users/[id].js
import axios from 'axios';

export async function GET({ params }: { params: Promise<{ id: string }> }) {
  const  id  = (await params).id;  
  console.log(id);
  
  try {
    const response = await axios.get(`http://localhost:5000/api/users${id}`);  // Backend API endpoint for single user
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.log(error);
    return new Response('Error fetching user', { status: 500 });
  }
}
