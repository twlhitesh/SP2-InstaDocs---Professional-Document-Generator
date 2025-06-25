import React from 'react';
import { FormField as FormFieldType } from '../types';

interface FormFieldProps {
  field: FormFieldType;
  value: string;
  onChange: (value: string) => void;
}

const FormField: React.FC<FormFieldProps> = ({ field, value, onChange }) => {
  const baseClasses = "w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 bg-white";
  
  const renderField = () => {
    switch (field.type) {
      case 'textarea':
        return (
          <textarea
            id={field.id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
            maxLength={field.maxLength}
            rows={4}
            className={`${baseClasses} resize-none`}
          />
        );
      
      case 'select':
        return (
          <select
            id={field.id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={field.required}
            className={baseClasses}
          >
            <option value="">Select an option</option>
            {field.options?.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        );
      
      default:
        return (
          <input
            type={field.type}
            id={field.id}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={field.placeholder}
            required={field.required}
            maxLength={field.maxLength}
            className={baseClasses}
          />
        );
    }
  };

  return (
    <div className="space-y-2">
      <label htmlFor={field.id} className="block text-sm font-semibold text-gray-700">
        {field.label}
        {field.required && <span className="text-red-500 ml-1">*</span>}
      </label>
      {renderField()}
      {field.maxLength && (
        <p className="text-xs text-gray-500 text-right">
          {value.length}/{field.maxLength} characters
        </p>
      )}
    </div>
  );
};

export default FormField;