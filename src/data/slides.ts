import type { IconName } from '../components/ui/Icon'

export interface Slide {
  tag: string
  title: string
  text: string
  icon: IconName
  enquiry: string
  gradient: string
}

export const slides: Slide[] = [
  {
    tag: 'Income Tax',
    enquiry: 'income tax filing and planning',
    title: 'File your returns with confidence',
    text: 'Accurate ITR filing and smart tax planning, so you pay only what you owe and never miss a deadline.',
    icon: 'receipt',
    gradient: 'from-accent-dark to-accent',
  },
  {
    tag: 'GST',
    enquiry: 'GST registration and returns',
    title: 'GST compliance, made simple',
    text: 'From registration to monthly returns and reconciliations, we keep your business fully compliant.',
    icon: 'percent',
    gradient: 'from-accent-dark via-accent to-leaf-dark',
  },
  {
    tag: 'Startups',
    enquiry: 'company registration',
    title: 'Start your business the right way',
    text: 'Company or LLP registration, ROC filings and ongoing compliance handled end to end.',
    icon: 'building',
    gradient: 'from-accent-dark via-accent to-gold',
  },
  {
    tag: 'Free consultation',
    enquiry: 'a free consultation',
    title: 'Talk to a Chartered Accountant today',
    text: 'Book a free 15 minute call and get clear, jargon-free answers to your finance questions.',
    icon: 'chat',
    gradient: 'from-accent-dark via-accent to-leaf',
  },
]
