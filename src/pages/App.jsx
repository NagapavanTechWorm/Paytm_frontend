import { ArrowDownToLine, CreditCard, Send, Shield } from 'lucide-react';
import { Link ,Outlet } from 'react-router-dom';


const features = [
  {
    icon: <Send className="h-6 w-6" />,
    title: "Instant Transfers",
    description: "Send money to anyone, instantly and free of cost"
  },
  {
    icon: <Shield className="h-6 w-6" />,
    title: "Secure Payments",
    description: "Your transactions are protected with best-in-class security"
  },
  {
    icon: <CreditCard className="h-6 w-6" />,
    title: "Multiple Payment Options",
    description: "Pay using UPI, cards, or net banking"
  },
  {
    icon: <ArrowDownToLine className="h-6 w-6" />,
    title: "Cashback & Rewards",
    description: "Earn rewards on every transaction you make"
  }
];

function App() {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <Outlet/>
      <div className="relative bg-gradient-to-r from-blue-600 to-blue-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              India's Most-loved Payments App
            </h1>
            <p className="mt-6 max-w-2xl mx-auto text-xl text-blue-100">
              Pay anyone, anywhere. Make all your payments simple, fast, and secure.
            </p>
            <div className="mt-10 flex justify-center gap-4">
              <Link
                to="/signup"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-700 bg-white hover:bg-blue-50 md:py-4 md:text-lg md:px-10"
              >
                Get Started
              </Link>
              <Link
                to="/signin"
                className="px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-800 hover:bg-blue-900 md:py-4 md:text-lg md:px-10"
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900">Why Choose PayClone?</h2>
            <p className="mt-4 text-xl text-gray-600">Everything you need to manage your money better.</p>
          </div>

          <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="relative bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
                  {feature.icon}
                </div>
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-500">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;