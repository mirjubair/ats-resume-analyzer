import { useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#6366f1", "#22c55e", "#ef4444", "#facc15"];

function Analysis() {
  const { state } = useLocation();
  const fileName = state?.fileName || "Unknown File";

  // Fake ATS scores (replace with API later)
  const score = 72;
  const chartData = [
    { name: "Skills Match", value: 80 },
    { name: "Formatting", value: 60 },
    { name: "Keywords", value: 75 },
    { name: "Overall", value: score },
  ];

  const suggestions = [
    "Add more role-specific keywords",
    "Improve section headings for ATS parsing",
    "Use consistent bullet formatting",
    "Avoid images or tables (ATS struggles with these)",
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="space-y-8"
    >
      <h2 className="text-3xl font-bold text-gray-800">Resume Analysis</h2>
      <p className="text-gray-500">📄 Analyzed: {fileName}</p>

      {/* Score Card */}
      <div className="bg-white shadow-lg rounded-2xl p-6 text-center">
        <h3 className="text-lg font-semibold text-gray-700">ATS Score</h3>
        <p className="text-5xl font-bold text-indigo-600">{score}%</p>
        <p className="text-sm text-gray-500 mt-2">
          Higher score = better ATS compatibility
        </p>
      </div>

      {/* Chart */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Category Breakdown</h3>
        <div className="flex justify-center">
          <PieChart width={300} height={300}>
            <Pie
              data={chartData}
              cx="50%"
              cy="50%"
              outerRadius={100}
              dataKey="value"
              label
            >
              {chartData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </div>
      </div>

      {/* Suggestions */}
      <div className="bg-white shadow-lg rounded-2xl p-6">
        <h3 className="text-lg font-semibold mb-4">Suggestions for Improvement</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          {suggestions.map((s, i) => (
            <li key={i}>{s}</li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Analysis;
