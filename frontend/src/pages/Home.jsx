import { motion } from "framer-motion";
import { Link } from "react-router-dom";

function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="text-center space-y-6"
    >
      <h1 className="text-4xl font-bold text-indigo-600">Welcome to ATS Analyzer</h1>
      <p className="text-lg text-gray-600">
        Upload your resume, get ATS-style analysis, and improve your chances 🚀
      </p>
      <Link
        to="/upload"
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow hover:bg-indigo-700"
      >
        Get Started
      </Link>
    </motion.div>
  );
}

export default Home;
