const Pricing =() => {
    return (
        <div className="flex justify-center items-center h-screen">
        <div className="flex justify-center gap-8">
          <div className="bg-gray-200 rounded-lg p-8 max-w-md">
            <div className="font-bold text-2xl mb-4">Basic</div>
            <div className="font-bold text-4xl mb-4">$11.99/month</div>
            <ul className="text-left mb-8">
              <li className="flex items-center">
                ✅ <span className="ml-2">10GB Storage</span>
              </li>
              <li className="flex items-center">
                ✅ <span className="ml-2">1 User</span>
              </li>
              <li className="flex items-center">
                🚫 <span className="ml-2">Support</span>
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
          <div className="bg-gray-200 rounded-lg p-8 max-w-md">
            <div className="font-bold text-2xl mb-4">Standard</div>
            <div className="font-bold text-4xl mb-4">$19.99/month</div>
            <ul className="text-left mb-8">
              <li className="flex items-center">
                ✅ <span className="ml-2">50GB Storage</span>
              </li>
              <li className="flex items-center">
                ✅ <span className="ml-2">5 Users</span>
              </li>
              <li className="flex items-center">
                ✅ <span className="ml-2">Phone & Email Support</span>
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
          <div className="bg-gray-200 rounded-lg p-8 max-w-md">
            <div className="font-bold text-2xl mb-4">Premium</div>
            <div className="font-bold text-4xl mb-4">$49.99/month</div>
            <ul className="text-left mb-8">
              <li className="flex items-center">
                ✅ <span className="ml-2">100GB Storage</span>
              </li>
              <li className="flex items-center">
                ✅ <span className="ml-2">10 Users</span>
              </li>
              <li className="flex items-center">
                ✅ <span className="ml-2">24/7 Support</span>
              </li>
            </ul>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    )
}
export default Pricing;