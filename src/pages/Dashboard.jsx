import UserList from '../components/UserList';
import { CreditCard, Send, Wallet } from 'lucide-react';

function Dashboard() {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Balance Card */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 rounded-lg shadow-lg p-6 text-white mb-8">
          <h2 className="text-xl font-semibold mb-2">Available Balance</h2>
          <div className="text-4xl font-bold">₹24,500.00</div>
          <div className="mt-4 flex space-x-4">
            <button className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
              <Send className="h-5 w-5" />
              <span>Send</span>
            </button>
            <button className="flex items-center space-x-2 bg-white text-blue-600 px-4 py-2 rounded-lg hover:bg-blue-50">
              <Wallet className="h-5 w-5" />
              <span>Add Money</span>
            </button>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Send className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Send Money</h3>
                <p className="text-sm text-gray-500">Transfer to anyone</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <CreditCard className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Pay Bills</h3>
                <p className="text-sm text-gray-500">Pay utilities & more</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center space-x-4">
              <div className="bg-blue-100 p-3 rounded-full">
                <Wallet className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900">Add Money</h3>
                <p className="text-sm text-gray-500">Load your wallet</p>
              </div>
            </div>
          </div>
        </div>

        {/* User List */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <UserList />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;