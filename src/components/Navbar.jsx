import { Wallet } from 'lucide-react';
import { Link,useNavigate } from 'react-router-dom';
import { useRecoilState, useRecoilValue } from 'recoil';
import { authAtom } from '../../utils/atom';



function Navbar() {
  const [user,setUser] = useRecoilState(authAtom);
  const navigate = useNavigate();
  const handleClick = ()=>{
    localStorage.removeItem('token');
    setUser({
      isauth:null,
      user:null  
   })
    navigate('/signin');
  }
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Wallet className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">PayClone</span>
          </Link>
          {user.isauth ? <div className="flex items-center space-x-4">
            <button onClick={handleClick} className="text-gray-200 rounded-md px-5 py-2   bg-blue-600 hover:text-white">Sign out</button>
          </div>:<div className="flex items-center space-x-4">
            <Link to="/signin" className="text-gray-700 hover:text-blue-600">Sign In</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</Link>
          </div>}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;