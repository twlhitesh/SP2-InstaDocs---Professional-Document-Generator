export interface DocumentTemplate {
  id: string;
  name: string;
  category: string;
  description: string;
  fields: FormField[];
  template: string;
}

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'date' | 'textarea' | 'select';
  placeholder?: string;
  required?: boolean;
  options?: string[];
  maxLength?: number;
}

export interface FormData {
  [key: string]: string;
}