import { User } from 'lucide-react';



function UserCard({ name, email, onSendMoney }) {
  return (
    <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="bg-blue-100 p-2 rounded-full">
          <User className="h-6 w-6 text-blue-600" />
        </div>
        <div>
          <h3 className="font-medium text-gray-900">{name}</h3>
          <p className="text-sm text-gray-500">{email}</p>
        </div>
      </div>
      <button
        onClick={onSendMoney}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Send Money
      </button>
    </div>
  );
}

function UserList() {
  const users = [
    { id: 1, name: "Alex Thompson", email: "alex@example.com" },
    { id: 2, name: "Sarah Wilson", email: "sarah@example.com" },
    { id: 3, name: "Michael Chen", email: "michael@example.com" },
  ];

  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Money to Friends</h2>
      {users.map((user) => (
        <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          onSendMoney={() => alert(`Send money to ${user.name}`)}
        />
      ))}
    </div>
  );
}

export default UserList;