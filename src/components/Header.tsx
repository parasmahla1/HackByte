import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="text-black p-4 flex justify-between items-center">
    <div className="flex items-center ml-24">
      <img src="/logo.png" alt="Logo" className="h-14 mr-2" />
      <span className="font-semibold text-3xl font-serif">Anonimo</span>
    </div>
    <div className="flex space-x-6 mr-24">
      <Link to="/about" className="hover:text-gray-300 text-lg">About Us</Link>
      <Link to="/contact" className="hover:text-gray-300 text-lg">Contact Us</Link>
      <Link to="/pricing" className="hover:text-gray-300 text-lg">Pricing</Link>
    </div>
  </nav>
);
};


export default Header;
