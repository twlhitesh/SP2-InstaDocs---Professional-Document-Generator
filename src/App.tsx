import React, { useState } from 'react';
import Header from './components/Header';
import TemplateSelector from './components/TemplateSelector';
import DocumentForm from './components/DocumentForm';
import DocumentPreview from './components/DocumentPreview';
import Features from './components/Features';
import PoweredByBolt from './components/PoweredByBolt';
import { DocumentTemplate, FormData } from './types';
import { renderTemplate } from './utils/templateEngine';

function App() {
  const [selectedTemplate, setSelectedTemplate] = useState<DocumentTemplate | null>(null);
  const [formData, setFormData] = useState<FormData>({});
  const [generatedContent, setGeneratedContent] = useState<string>('');
  const [isGenerating, setIsGenerating] = useState(false);

  const handleTemplateSelect = (template: DocumentTemplate) => {
    setSelectedTemplate(template);
    setFormData({});
    setGeneratedContent('');
  };

  const handleGenerate = async () => {
    if (!selectedTemplate) return;
    
    setIsGenerating(true);
    
    // Simulate processing time for better UX
    await new Promise(resolve => setTimeout(resolve, 800));
    
    const content = renderTemplate(selectedTemplate.template, formData);
    setGeneratedContent(content);
    setIsGenerating(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Generate Professional Documents
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              In Seconds
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our collection of professional templates and create polished documents 
            for any occasion. No signup required, completely free to use.
          </p>
        </div>

        {/* Template Selection */}
        <div className="mb-8">
          <TemplateSelector
            selectedTemplate={selectedTemplate}
            onTemplateSelect={handleTemplateSelect}
          />
        </div>

        {/* Main Content */}
        {selectedTemplate ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <DocumentForm
              template={selectedTemplate}
              formData={formData}
              onFormDataChange={setFormData}
              onGenerate={handleGenerate}
              isGenerating={isGenerating}
            />
            <DocumentPreview
              content={generatedContent}
              templateName={selectedTemplate.name}
            />
          </div>
        ) : (
          <div className="text-center py-16 mb-16">
            <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-12 max-w-2xl mx-auto">
              <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl">📄</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Create Your Document?
              </h2>
              <p className="text-gray-600 mb-6">
                Select a document type from the dropdown above to get started. 
                We have templates for professional, academic, and business needs.
              </p>
              <div className="flex flex-wrap justify-center gap-2 text-sm text-gray-500">
                <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full">Resignation Letters</span>
                <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full">Cover Letters</span>
                <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full">Internship Requests</span>
                <span className="bg-orange-100 text-orange-700 px-3 py-1 rounded-full">Business Pitches</span>
              </div>
            </div>
          </div>
        )}

        <Features />
      </main>

      <footer className="bg-white border-t border-gray-200 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center text-gray-600">
            <p className="mb-2">
              © 2024 InstaDocs. Made with ❤️ for professionals everywhere.
            </p>
            <p className="text-sm">
              Privacy-first document generation • No data stored • Completely free
            </p>
          </div>
        </div>
      </footer>

      <PoweredByBolt />
    </div>
  );
}

export default App;