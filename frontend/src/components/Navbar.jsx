import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center px-4 py-3">
        <Link to="/" className="font-bold text-xl">ATS Analyzer</Link>
        <div className="space-x-6">
          <Link to="/" className="hover:underline">Home</Link>
          <Link to="/upload" className="hover:underline">Upload</Link>
          <Link to="/analysis" className="hover:underline">Analysis</Link>
          <Link to="/history" className="hover:underline">History</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
