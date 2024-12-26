import Link from 'next/link';
import { User } from '../users/[id]/page';

interface UserTableProps {
  users: User[];
}

const UserTable = ({ users }: UserTableProps) => (
  <table className="min-w-full table-auto">
    <thead>
      <tr>
        <th className="px-4 py-2">ID</th>
        <th className="px-4 py-2">Name</th>
        <th className="px-4 py-2">Actions</th>
      </tr>
    </thead>
    <tbody>
      {users.map((user) => (
        <tr key={user.id}>
          <td className="border px-4 py-2">{user.id}</td>
          <td className="border px-4 py-2">{user.name}</td>
          <td className="border px-4 py-2">
            <Link href={`/users/${user.id}`}>View/Edit</Link>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default UserTable;
