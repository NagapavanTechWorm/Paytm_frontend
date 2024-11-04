import { User } from 'lucide-react';
import { useRecoilValueLoadable } from 'recoil';
import { userAtom } from '../../utils/atom';
import Loading from './Loading';
import { Link } from 'react-router-dom';



function UserCard({ name, email, id }) {
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
      <Link
        to={`/transfer/${id}/${email}`}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
      >
        Send Money
      </Link>
    </div>
  );
}

function UserList() {
  const allUser = useRecoilValueLoadable(userAtom);
  if(allUser.state === 'loading')  return <Loading/>
  console.log(allUser.contents)
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Money to Friends</h2>
      {allUser.contents.map((user) => (
        <UserCard
          key={user._id}
          name={user.username}
          email={user.email}
          id={user._id}
        />
      ))}
    </div>
  );
}

export default UserList;