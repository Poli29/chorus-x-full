import { useState } from "react";

export default function Home() {
  const [file, setFile] = useState(null);
  const [verdict, setVerdict] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleUpload = async () => {
    if (!file) return;
    setLoading(true);
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("https://Poli76-chorus-x-full.hf.space/", {
      method: "POST",
      body: formData
    });

    const data = await response.json();
    setVerdict(data);
    setLoading(false);
  };

  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h1>CHORUS-X™ Verdict Viewer</h1>
      <input type="file" accept="image/*" onChange={(e) => setFile(e.target.files[0])} />
      <button onClick={handleUpload} disabled={loading}>
        {loading ? "Analyzing..." : "Analyze"}
      </button>
      {verdict && (
        <pre style={{ textAlign: "left", marginTop: "20px" }}>
          Verdict: {verdict.finalVerdict}
          <br />
          {JSON.stringify(verdict, null, 2)}
        </pre>
      )}
    </div>
  );
}
