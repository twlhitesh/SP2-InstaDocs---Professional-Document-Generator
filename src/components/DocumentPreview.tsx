import React from 'react';
import { Copy, Download, FileText, CheckCircle } from 'lucide-react';
import { copyToClipboard, downloadAsText } from '../utils/templateEngine';

interface DocumentPreviewProps {
  content: string;
  templateName: string;
}

const DocumentPreview: React.FC<DocumentPreviewProps> = ({ content, templateName }) => {
  const [copySuccess, setCopySuccess] = React.useState(false);

  const handleCopy = async () => {
    const success = await copyToClipboard(content);
    if (success) {
      setCopySuccess(true);
      setTimeout(() => setCopySuccess(false), 2000);
    }
  };

  const handleDownload = () => {
    const filename = `${templateName.toLowerCase().replace(/\s+/g, '-')}-${new Date().toISOString().split('T')[0]}`;
    downloadAsText(content, filename);
  };

  if (!content) {
    return (
      <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6 h-full flex items-center justify-center">
        <div className="text-center text-gray-500">
          <FileText className="w-16 h-16 mx-auto mb-4 text-gray-300" />
          <h3 className="text-lg font-medium mb-2">No Document Generated</h3>
          <p>Fill out the form and click "Generate Document" to see your professional document here.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 h-full flex flex-col">
      <div className="flex items-center justify-between p-6 border-b border-gray-200">
        <h3 className="text-lg font-bold text-gray-900">Document Preview</h3>
        <div className="flex space-x-2">
          <button
            onClick={handleCopy}
            className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-500"
          >
            {copySuccess ? (
              <>
                <CheckCircle className="w-4 h-4 text-green-600" />
                <span className="text-green-600">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-4 h-4" />
                <span>Copy</span>
              </>
            )}
          </button>
          <button
            onClick={handleDownload}
            className="flex items-center space-x-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <Download className="w-4 h-4" />
            <span>Download</span>
          </button>
        </div>
      </div>
      
      <div className="flex-1 p-6 overflow-y-auto">
        <div className="bg-gray-50 rounded-xl p-6 font-mono text-sm leading-relaxed whitespace-pre-wrap border border-gray-200">
          {content}
        </div>
      </div>
    </div>
  );
};

export default DocumentPreview;