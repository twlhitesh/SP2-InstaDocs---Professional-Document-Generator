import { DocumentTemplate } from '../types';

export const documentTemplates: DocumentTemplate[] = [
  {
    id: 'resignation-letter',
    name: 'Resignation Letter',
    category: 'Professional',
    description: 'Professional resignation letter template',
    fields: [
      { id: 'employeeName', label: 'Your Full Name', type: 'text', required: true, placeholder: 'John Doe' },
      { id: 'position', label: 'Your Position', type: 'text', required: true, placeholder: 'Software Engineer' },
      { id: 'managerName', label: 'Manager\'s Name', type: 'text', required: true, placeholder: 'Jane Smith' },
      { id: 'companyName', label: 'Company Name', type: 'text', required: true, placeholder: 'Tech Corp Inc.' },
      { id: 'lastWorkingDay', label: 'Last Working Day', type: 'date', required: true },
      { id: 'reason', label: 'Reason (Optional)', type: 'textarea', placeholder: 'Brief reason for leaving...' },
    ],
    template: `Dear {{managerName}},

I am writing to formally notify you of my resignation from my position as {{position}} at {{companyName}}. My last day of work will be {{lastWorkingDay}}.

{{#if reason}}
{{reason}}

{{/if}}
I am committed to ensuring a smooth transition of my responsibilities. I am willing to assist in training my replacement and completing any outstanding projects before my departure.

Thank you for the opportunities for professional and personal growth during my time here. I have enjoyed working with the team and appreciate the support provided to me.

Please let me know how I can help during this transition period.

Sincerely,
{{employeeName}}`
  },
  {
    id: 'internship-request',
    name: 'Internship Request',
    category: 'Academic',
    description: 'Request letter for internship opportunities',
    fields: [
      { id: 'studentName', label: 'Your Full Name', type: 'text', required: true, placeholder: 'Alex Johnson' },
      { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'alex@email.com' },
      { id: 'phone', label: 'Phone Number', type: 'text', required: true, placeholder: '+1 (555) 123-4567' },
      { id: 'university', label: 'University/College', type: 'text', required: true, placeholder: 'State University' },
      { id: 'major', label: 'Major/Field of Study', type: 'text', required: true, placeholder: 'Computer Science' },
      { id: 'companyName', label: 'Company Name', type: 'text', required: true, placeholder: 'Innovation Labs' },
      { id: 'position', label: 'Desired Position', type: 'text', required: true, placeholder: 'Software Development Intern' },
      { id: 'duration', label: 'Internship Duration', type: 'text', required: true, placeholder: '3 months (June - August 2024)' },
      { id: 'motivation', label: 'Why This Company?', type: 'textarea', required: true, placeholder: 'Explain your interest in the company...' },
    ],
    template: `Subject: Internship Application - {{position}}

Dear Hiring Manager,

I am {{studentName}}, a {{major}} student at {{university}}, writing to express my strong interest in the {{position}} position at {{companyName}}.

{{motivation}}

I am available for an internship duration of {{duration}} and am eager to contribute to your team while gaining valuable industry experience. My academic background in {{major}} has prepared me with foundational knowledge that I am excited to apply in a professional setting.

I would welcome the opportunity to discuss how I can contribute to {{companyName}}. Please feel free to contact me at {{email}} or {{phone}}.

Thank you for considering my application. I look forward to hearing from you.

Best regards,
{{studentName}}
{{email}}
{{phone}}`
  },
  {
    id: 'apology-email',
    name: 'Professional Apology',
    category: 'Professional',
    description: 'Professional apology email template',
    fields: [
      { id: 'senderName', label: 'Your Name', type: 'text', required: true, placeholder: 'Sarah Wilson' },
      { id: 'recipientName', label: 'Recipient Name', type: 'text', required: true, placeholder: 'Mr. Thompson' },
      { id: 'incident', label: 'What Happened?', type: 'textarea', required: true, placeholder: 'Briefly describe the situation...' },
      { id: 'impact', label: 'Impact/Consequences', type: 'textarea', required: true, placeholder: 'How did this affect them or the project...' },
      { id: 'solution', label: 'Proposed Solution', type: 'textarea', required: true, placeholder: 'How will you fix or prevent this...' },
    ],
    template: `Subject: Sincere Apology - {{incident}}

Dear {{recipientName}},

I am writing to sincerely apologize for {{incident}}. I take full responsibility for this oversight and understand the inconvenience it has caused.

I recognize that {{impact}}, and I deeply regret any frustration or complications this may have created for you and the team.

To address this situation, {{solution}}. I am committed to ensuring this does not happen again and have already implemented measures to prevent similar issues in the future.

Thank you for your patience and understanding. I value our professional relationship and am dedicated to maintaining the high standards you expect.

Please don't hesitate to reach out if you have any concerns or if there's anything else I can do to rectify this situation.

Sincerely,
{{senderName}}`
  },
  {
    id: 'startup-pitch',
    name: 'Startup Pitch Email',
    category: 'Business',
    description: 'Investor pitch email template',
    fields: [
      { id: 'founderName', label: 'Founder Name', type: 'text', required: true, placeholder: 'Emma Rodriguez' },
      { id: 'startupName', label: 'Startup Name', type: 'text', required: true, placeholder: 'EcoTech Solutions' },
      { id: 'industry', label: 'Industry', type: 'text', required: true, placeholder: 'Clean Technology' },
      { id: 'problem', label: 'Problem Statement', type: 'textarea', required: true, placeholder: 'What problem does your startup solve?' },
      { id: 'solution', label: 'Your Solution', type: 'textarea', required: true, placeholder: 'How does your product/service solve this problem?' },
      { id: 'marketSize', label: 'Market Size', type: 'text', required: true, placeholder: '$50B global market' },
      { id: 'traction', label: 'Current Traction', type: 'textarea', required: true, placeholder: 'Key metrics, customers, revenue...' },
      { id: 'fundingAmount', label: 'Funding Sought', type: 'text', required: true, placeholder: '$2M Series A' },
      { id: 'useOfFunds', label: 'Use of Funds', type: 'textarea', required: true, placeholder: 'How will you use the investment?' },
    ],
    template: `Subject: {{startupName}} - {{fundingAmount}} Investment Opportunity in {{industry}}

Dear Investor,

I'm {{founderName}}, founder of {{startupName}}, and I'm excited to share an investment opportunity in the {{industry}} space.

THE PROBLEM:
{{problem}}

OUR SOLUTION:
{{solution}}

MARKET OPPORTUNITY:
We're targeting a {{marketSize}} with significant growth potential and limited competition in our specific niche.

TRACTION:
{{traction}}

FUNDING REQUEST:
We're raising {{fundingAmount}} to accelerate our growth. The funds will be used for:
{{useOfFunds}}

I'd love to schedule a brief call to discuss this opportunity further and share our detailed pitch deck. Are you available for a 15-minute conversation this week?

Thank you for your time and consideration.

Best regards,
{{founderName}}
Founder & CEO, {{startupName}}`
  },
  {
    id: 'job-application',
    name: 'Job Application Cover Letter',
    category: 'Professional',
    description: 'Professional job application cover letter',
    fields: [
      { id: 'applicantName', label: 'Your Full Name', type: 'text', required: true, placeholder: 'Michael Chen' },
      { id: 'email', label: 'Email Address', type: 'email', required: true, placeholder: 'michael@email.com' },
      { id: 'phone', label: 'Phone Number', type: 'text', required: true, placeholder: '+1 (555) 987-6543' },
      { id: 'position', label: 'Position Applied For', type: 'text', required: true, placeholder: 'Senior Product Manager' },
      { id: 'companyName', label: 'Company Name', type: 'text', required: true, placeholder: 'Future Tech Inc.' },
      { id: 'experience', label: 'Relevant Experience', type: 'textarea', required: true, placeholder: 'Highlight your most relevant experience...' },
      { id: 'skills', label: 'Key Skills', type: 'textarea', required: true, placeholder: 'List your most relevant skills...' },
      { id: 'motivation', label: 'Why This Role?', type: 'textarea', required: true, placeholder: 'Why are you interested in this position?' },
    ],
    template: `Subject: Application for {{position}} Position

Dear Hiring Manager,

I am writing to express my strong interest in the {{position}} position at {{companyName}}. With my background and passion for innovation, I am excited about the opportunity to contribute to your team.

RELEVANT EXPERIENCE:
{{experience}}

KEY SKILLS:
{{skills}}

WHY {{companyName}}:
{{motivation}}

I am confident that my experience and enthusiasm make me a strong candidate for this role. I would welcome the opportunity to discuss how I can contribute to {{companyName}}'s continued success.

Thank you for considering my application. I look forward to hearing from you.

Best regards,
{{applicantName}}
{{email}}
{{phone}}`
  },
  {
    id: 'recommendation-request',
    name: 'Recommendation Request',
    category: 'Academic',
    description: 'Request for letter of recommendation',
    fields: [
      { id: 'studentName', label: 'Your Name', type: 'text', required: true, placeholder: 'Lisa Park' },
      { id: 'professorName', label: 'Professor/Supervisor Name', type: 'text', required: true, placeholder: 'Dr. Anderson' },
      { id: 'relationship', label: 'Your Relationship', type: 'text', required: true, placeholder: 'Student in Advanced Algorithms (Fall 2023)' },
      { id: 'program', label: 'Program/Opportunity', type: 'text', required: true, placeholder: 'Graduate School Application' },
      { id: 'deadline', label: 'Deadline', type: 'date', required: true },
      { id: 'achievements', label: 'Key Achievements', type: 'textarea', required: true, placeholder: 'Relevant accomplishments they should highlight...' },
      { id: 'goals', label: 'Future Goals', type: 'textarea', required: true, placeholder: 'What are you hoping to achieve?' },
    ],
    template: `Subject: Request for Letter of Recommendation - {{studentName}}

Dear {{professorName}},

I hope this email finds you well. I am {{studentName}}, and I was {{relationship}}. I am writing to ask if you would be willing to write a letter of recommendation for my {{program}}.

The deadline for submission is {{deadline}}, and I wanted to reach out well in advance to give you adequate time to consider my request.

During our time working together, I achieved the following:
{{achievements}}

My future goals include:
{{goals}}

I believe your perspective on my academic performance and potential would be invaluable for this application. If you are able to provide this recommendation, I would be happy to provide any additional information you might need, including my resume, personal statement, or specific points you'd like me to highlight.

Thank you very much for considering my request. I understand that writing recommendations requires significant time and effort, and I truly appreciate your consideration.

Please let me know if you need any additional information or if you have any questions.

Best regards,
{{studentName}}`
  }
];

export const getTemplateById = (id: string): DocumentTemplate | undefined => {
  return documentTemplates.find(template => template.id === id);
};

export const getTemplatesByCategory = (category: string): DocumentTemplate[] => {
  return documentTemplates.filter(template => template.category === category);
};

export const getAllCategories = (): string[] => {
  return [...new Set(documentTemplates.map(template => template.category))];
};