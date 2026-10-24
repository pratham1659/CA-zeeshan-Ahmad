import type { IconName } from '../components/ui/Icon'

export interface Slide {
  tag: string
  title: string
  text: string
  icon: IconName
  enquiry: string
  gradient: string
  /** Which pair of buttons the slide shows: chat (WhatsApp + email) or book (consultation + services) */
  cta: 'chat' | 'book'
  /** Service id of the illustration to show (see ServiceArt) */
  art?: string
  /** Photo shown instead of an illustration */
  photo?: string
}

export const slides: Slide[] = [
  {
    tag: 'Income Tax',
    enquiry: 'income tax filing and planning',
    title: 'File your returns with confidence',
    text: 'Accurate ITR filing and smart tax planning, so you pay only what you owe and never miss a deadline.',
    icon: 'receipt',
    gradient: 'from-accent-dark to-accent',
    cta: 'chat',
    art: 'direct-taxation',
  },
  {
    tag: 'GST',
    enquiry: 'GST registration and returns',
    title: 'GST compliance, made simple',
    text: 'From registration to monthly returns and reconciliations, we keep your business fully compliant.',
    icon: 'percent',
    gradient: 'from-accent-dark via-accent to-leaf-dark',
    cta: 'book',
    art: 'indirect-taxation',
  },
  {
    tag: 'Audit & Assurance',
    enquiry: 'audit and assurance services',
    title: 'Audits that build confidence',
    text: 'Statutory, Internal and Tax Audits carried out with careful planning, evidence and clear communication.',
    icon: 'shield',
    gradient: 'from-accent-dark via-accent to-accent-light',
    cta: 'chat',
    art: 'audit-assurance',
  },
  {
    tag: 'Valuation',
    enquiry: 'valuation services',
    title: 'Defensible valuations you can rely on',
    text: 'Business valuations, purchase price allocations and regulatory valuations tailored to your requirements.',
    icon: 'chart',
    gradient: 'from-accent-dark via-accent to-gold',
    cta: 'book',
    art: 'valuation',
  },
  {
    tag: 'Startups',
    enquiry: 'company registration',
    title: 'Start your business the right way',
    text: 'Company or LLP registration, ROC filings and ongoing compliance handled end to end.',
    icon: 'building',
    gradient: 'from-accent-dark via-accent to-leaf-dark',
    cta: 'chat',
    art: 'company-llp',
  },
  {
    tag: 'RERA',
    enquiry: 'RERA services',
    title: 'RERA support for real estate projects',
    text: 'Financial information, periodic compliance assistance and professional reports for RERA-related requirements.',
    icon: 'building',
    gradient: 'from-accent-dark to-accent',
    cta: 'book',
    art: 'rera',
  },
  {
    tag: 'ROC & Compliance',
    enquiry: 'ROC and corporate compliance',
    title: 'Never miss a corporate filing',
    text: 'Annual filings, resolutions, minutes and compliance calendars tracked and handled for you.',
    icon: 'calendar',
    gradient: 'from-accent-dark via-accent to-gold',
    cta: 'chat',
    art: 'roc-compliance',
  },
  {
    tag: 'Accounting & Payroll',
    enquiry: 'accounting and payroll',
    title: 'Organised books, reliable numbers',
    text: 'Bookkeeping, reconciliations, payroll and periodic management reports on a recurring or assignment basis.',
    icon: 'book',
    gradient: 'from-accent-dark via-accent to-leaf-dark',
    cta: 'book',
    art: 'accounting-payroll',
  },
  {
    tag: 'Trust & NGO',
    enquiry: 'trust, society and NGO services',
    title: 'Support for Trusts, Societies, NGOs and NPOs',
    text: 'Registrations, Tax Applications, Section 8 companies, CSR documentation and ongoing statutory compliance.',
    icon: 'heart',
    gradient: 'from-accent-dark to-accent',
    cta: 'chat',
    art: 'trust-ngo',
  },
  {
    tag: 'Free consultation',
    enquiry: 'a free consultation',
    title: 'From complexity to clarity, we make it simple!',
    text: 'Book a free 30 minute call and get clear, jargon-free answers to your finance questions.',
    icon: 'chat',
    gradient: 'from-accent-dark via-accent to-leaf',
    cta: 'book',
    art: 'consultancy-advisory',
  },
]
