import React, { useState } from 'react';
import { Code2, Copy, Check, Terminal, ExternalLink } from 'lucide-react';

export const ApiAccess: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  const curlExample = `curl -X GET "https://api.stormbreakers.space/v1/fires/harmonized?start_date=2025-01-01&end_date=2025-01-31&region=global" \\
  -H "Authorization: Bearer FIRMS_DEMO_KEY"`;

  const pythonExample = `import requests

url = "https://api.stormbreakers.space/v1/fires/harmonized"
params = {
    "start_date": "2025-01-01",
    "end_date": "2025-01-31",
    "satellites": ["MODIS_TERRA", "MODIS_AQUA", "VIIRS_SNPP", "VIIRS_NOAA20", "VIIRS_NOAA21"],
    "min_confidence": "HIGH"
}
headers = {"Authorization": "Bearer FIRMS_DEMO_KEY"}

response = requests.get(url, params=params, headers=headers)
fires_geojson = response.json()
print(f"Retrieved {len(fires_geojson['features'])} harmonized fire events")`;

  return (
    <div className="space-y-4 pb-6 max-w-[1600px] mx-auto">
      <div>
        <div className="flex items-center space-x-2">
          <Code2 className="w-5 h-5 text-teal-600" />
          <h1 className="text-2xl font-bold text-[#0F1E36]">API Access & Documentation</h1>
        </div>
        <p className="text-sm text-slate-500 mt-0.5">
          Programmatically query the Fire Continuity Ledger REST & WebSocket streams.
        </p>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-slate-700" />
            <h3 className="text-sm font-bold text-slate-900">cURL Endpoint Query</h3>
          </div>
          <button
            onClick={() => copyToClipboard(curlExample, 'curl')}
            className="flex items-center space-x-1 text-xs text-teal-600 hover:text-teal-800 font-semibold"
          >
            {copied === 'curl' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied === 'curl' ? 'Copied!' : 'Copy cURL'}</span>
          </button>
        </div>
        <pre className="p-4 bg-slate-900 text-slate-200 rounded-xl text-xs font-mono overflow-x-auto">
          {curlExample}
        </pre>
      </div>

      <div className="bg-white rounded-2xl p-5 border border-slate-200 shadow-xs space-y-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Terminal className="w-4 h-4 text-slate-700" />
            <h3 className="text-sm font-bold text-slate-900">Python Integration SDK</h3>
          </div>
          <button
            onClick={() => copyToClipboard(pythonExample, 'python')}
            className="flex items-center space-x-1 text-xs text-teal-600 hover:text-teal-800 font-semibold"
          >
            {copied === 'python' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied === 'python' ? 'Copied!' : 'Copy Code'}</span>
          </button>
        </div>
        <pre className="p-4 bg-slate-900 text-slate-200 rounded-xl text-xs font-mono overflow-x-auto">
          {pythonExample}
        </pre>
      </div>
    </div>
  );
};
