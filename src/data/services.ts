import type { IconName } from '../components/ui/Icon'

export interface Service {
  id: string
  title: string
  icon: IconName
  summary: string
  points: string[]
}

export const services: Service[] = [
  {
    id: 'income-tax',
    title: 'Income Tax',
    icon: 'receipt',
    summary: 'Accurate filing and smart planning so you pay only what you owe.',
    points: ['ITR filing for individuals and firms', 'Tax planning and savings', 'Notice replies and assessments'],
  },
  {
    id: 'gst',
    title: 'GST Services',
    icon: 'percent',
    summary: 'Stay compliant with registration, returns and reconciliations.',
    points: ['GST registration', 'Monthly and annual returns', 'Input credit reconciliation'],
  },
  {
    id: 'audit',
    title: 'Audit & Assurance',
    icon: 'shield',
    summary: 'Independent audits that build trust with lenders and stakeholders.',
    points: ['Statutory and tax audit', 'Internal audit', 'Due diligence'],
  },
  {
    id: 'bookkeeping',
    title: 'Accounting & Bookkeeping',
    icon: 'book',
    summary: 'Clean books and monthly reports so you always know where you stand.',
    points: ['Day to day bookkeeping', 'Payroll support', 'MIS and financial statements'],
  },
  {
    id: 'registration',
    title: 'Company Registration',
    icon: 'building',
    summary: 'Start your business the right way, with all compliance in place.',
    points: ['Pvt Ltd, LLP and proprietorship', 'ROC annual filings', 'Trademark and MSME registration'],
  },
  {
    id: 'advisory',
    title: 'Business Advisory',
    icon: 'chart',
    summary: 'Financial guidance for growth, funding and decision making.',
    points: ['Business planning and projections', 'Fundraising support', 'Virtual CFO services'],
  },
]
