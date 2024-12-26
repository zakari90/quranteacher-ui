import axios from 'axios';

const backendURL = process.env.PUBLIC_BACKEND_URL || 'http://localhost:5000/';

export async function GET() {
  try {
    const response = await axios.get(`${backendURL}`);  // Correct backend API endpoint
    return new Response(JSON.stringify(response.data), { status: 200 });
  } catch (error) {
    console.error('Error fetching :', error);  // Log error for debugging
    return new Response('Error fetching ', { status: 500 });
  }
}

export async function POST(request: Request) {
  const { name } = await request.json();

  try {
    const response = await axios.post(`${backendURL}`, { name });  // Correct backend POST endpoint
    return new Response(JSON.stringify(response.data), { status: 201 });
  } catch (error) {
    console.error('Error adding user:', error);  // Log error for debugging
    return new Response('Error adding user', { status: 500 });
  }
}
