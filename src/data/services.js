import { Briefcase, CreditCard, Users, HelpCircle } from 'lucide-react';

export const services = [
  {
    id: 'business-loan',
    title: 'Business Expansion Support',
    description: 'Financial assistance positioned for business-related needs and operational expansion.',
    icon: Briefcase,
    color: 'bg-blue-100 text-navy-deep',
  },
  {
    id: 'loan-assistance',
    title: 'Loan Assistance',
    description: 'Help customers understand available loan options and the enquiry-first process.',
    icon: CreditCard,
    color: 'bg-green-100 text-green-700',
  },
  {
    id: 'membership',
    title: 'Membership',
    description: 'Join Sri Vinayak Sangha (R) and access lifetime free membership benefits.',
    icon: Users,
    color: 'bg-yellow-100 text-gold-bright',
  },
  {
    id: 'enquiry',
    title: 'General Enquiry',
    description: 'Get in touch for general financial support guidance and information.',
    icon: HelpCircle,
    color: 'bg-orange-100 text-orange-600',
  }
];
