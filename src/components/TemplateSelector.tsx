import React from 'react';
import { ChevronDown, FileText, Briefcase, GraduationCap, Building } from 'lucide-react';
import { DocumentTemplate } from '../types';
import { documentTemplates, getAllCategories } from '../data/templates';

interface TemplateSelectorProps {
  selectedTemplate: DocumentTemplate | null;
  onTemplateSelect: (template: DocumentTemplate) => void;
}

const categoryIcons = {
  Professional: Briefcase,
  Academic: GraduationCap,
  Business: Building,
};

const TemplateSelector: React.FC<TemplateSelectorProps> = ({
  selectedTemplate,
  onTemplateSelect,
}) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const categories = getAllCategories();

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between px-4 py-3 bg-white border border-gray-300 rounded-xl shadow-sm hover:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200"
      >
        <div className="flex items-center space-x-3">
          <FileText className="w-5 h-5 text-gray-400" />
          <span className="text-gray-900 font-medium">
            {selectedTemplate ? selectedTemplate.name : 'Select Document Type'}
          </span>
        </div>
        <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-gray-200 rounded-xl shadow-lg z-50 max-h-96 overflow-y-auto">
          {categories.map((category) => {
            const Icon = categoryIcons[category as keyof typeof categoryIcons] || FileText;
            const categoryTemplates = documentTemplates.filter(t => t.category === category);
            
            return (
              <div key={category} className="border-b border-gray-100 last:border-b-0">
                <div className="px-4 py-2 bg-gray-50 flex items-center space-x-2">
                  <Icon className="w-4 h-4 text-gray-600" />
                  <span className="text-sm font-semibold text-gray-700">{category}</span>
                </div>
                {categoryTemplates.map((template) => (
                  <button
                    key={template.id}
                    onClick={() => {
                      onTemplateSelect(template);
                      setIsOpen(false);
                    }}
                    className="w-full px-4 py-3 text-left hover:bg-blue-50 focus:bg-blue-50 focus:outline-none transition-colors duration-150 group"
                  >
                    <div className="flex items-start space-x-3">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-150"></div>
                      <div className="flex-1">
                        <h3 className="font-medium text-gray-900 group-hover:text-blue-700">
                          {template.name}
                        </h3>
                        <p className="text-sm text-gray-500 mt-1">{template.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default TemplateSelector;