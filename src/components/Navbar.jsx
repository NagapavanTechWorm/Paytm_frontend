import { Wallet } from 'lucide-react';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center space-x-2">
            <Wallet className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-blue-600">PayClone</span>
          </Link>
          <div className="flex items-center space-x-4">
            <Link to="/signin" className="text-gray-700 hover:text-blue-600">Sign In</Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">Sign Up</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;