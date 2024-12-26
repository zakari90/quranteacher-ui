import axios from 'axios';

export async function GET() {
  try {
    const response = await axios.get('http://localhost:5000/users');  // Backend API endpoint
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.log(error);
    
    return new Response('Error fetching users', { status: 500 });
  }
}

export async function POST(request: Request) {
  const { name } = await request.json();

  try {
    const response = await axios.post('http://localhost:5000/users', { name }); // Backend POST
    return new Response(JSON.stringify(response.data), { status: 201 });
  } catch (error) {
    console.log(error);
    return new Response('Error adding user', { status: 500 });
  }
}
