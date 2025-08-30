import { useState } from "react";
import { useNavigate } from "react-router-dom";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleUpload = async () => {
    if (!file) return alert("Please upload a file first!");

    setLoading(true);

    // simulate backend call (replace with actual API later)
    setTimeout(() => {
      setLoading(false);
      navigate("/analysis", { state: { fileName: file.name } });
    }, 2000);
  };

  return (
    <div className="max-w-lg mx-auto text-center space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800">Upload Your Resume</h2>
      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setFile(e.target.files[0])}
        className="border p-3 rounded-lg w-full"
      />
      {file && <p className="text-green-600">📄 File ready: {file.name}</p>}

      <button
        onClick={handleUpload}
        disabled={loading}
        className={`px-6 py-3 rounded-lg shadow text-white ${
          loading
            ? "bg-gray-400 cursor-not-allowed"
            : "bg-purple-600 hover:bg-purple-700"
        }`}
      >
        {loading ? "Analyzing..." : "Analyze Resume"}
      </button>
    </div>
  );
}

export default UploadResume;
