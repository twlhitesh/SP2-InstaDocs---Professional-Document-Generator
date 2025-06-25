import React from 'react';
import { Wand2 } from 'lucide-react';
import { DocumentTemplate, FormData } from '../types';
import FormField from './FormField';

interface DocumentFormProps {
  template: DocumentTemplate;
  formData: FormData;
  onFormDataChange: (data: FormData) => void;
  onGenerate: () => void;
  isGenerating: boolean;
}

const DocumentForm: React.FC<DocumentFormProps> = ({
  template,
  formData,
  onFormDataChange,
  onGenerate,
  isGenerating,
}) => {
  const handleFieldChange = (fieldId: string, value: string) => {
    onFormDataChange({
      ...formData,
      [fieldId]: value,
    });
  };

  const isFormValid = () => {
    return template.fields
      .filter(field => field.required)
      .every(field => formData[field.id] && formData[field.id].trim() !== '');
  };

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-200 p-6">
      <div className="mb-6">
        <h2 className="text-xl font-bold text-gray-900 mb-2">{template.name}</h2>
        <p className="text-gray-600">{template.description}</p>
      </div>

      <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
        {template.fields.map((field) => (
          <FormField
            key={field.id}
            field={field}
            value={formData[field.id] || ''}
            onChange={(value) => handleFieldChange(field.id, value)}
          />
        ))}

        <button
          type="button"
          onClick={onGenerate}
          disabled={!isFormValid() || isGenerating}
          className="w-full flex items-center justify-center space-x-2 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-200 shadow-lg hover:shadow-xl"
        >
          <Wand2 className={`w-5 h-5 ${isGenerating ? 'animate-spin' : ''}`} />
          <span>{isGenerating ? 'Generating...' : 'Generate Document'}</span>
        </button>
      </form>
    </div>
  );
};

export default DocumentForm;