import type { IconName } from '../components/ui/Icon'

export interface ServiceSection {
  title: string
  text: string
}

export interface Service {
  id: string
  title: string
  icon: IconName
  /** Intro paragraphs shown on the Services page */
  intro: string[]
  /** Optional lead-in before the bullet list */
  points?: string[]
  /** Optional sub-services with their own heading */
  sections?: ServiceSection[]
}

export const services: Service[] = [
  {
    id: 'direct-taxation',
    title: 'Direct Taxation',
    icon: 'receipt',
    intro: [
      'We assist individuals and businesses with **income-tax compliance**, **tax return preparation**, **tax audit matters**, **TDS/TCS compliance**, and tax-related proceedings or representation where agreed. Advice is based on the facts and documents provided and the law applicable to the relevant period.',
    ],
    points: [
      'Individual and business taxation',
      'Income-tax return preparation and filing',
      'Tax audit support',
      'TDS and TCS compliance',
      'Assistance with appeals and proceedings before appropriate authorities, subject to engagement',
    ],
  },
  {
    id: 'indirect-taxation',
    title: 'Indirect Taxation',
    icon: 'percent',
    intro: [
      'We provide support for **GST and other applicable indirect-tax requirements**, including registration, periodic returns, reconciliations, compliance reviews, and assistance with notices or proceedings as agreed.',
    ],
    points: [
      'GST registration and amendments',
      'GST returns and reconciliations',
      'GST compliance review and advisory',
      'Notice-response and proceeding support, subject to engagement',
      'Jharkhand Value Added Tax matters, where applicable',
      'GSTAT-related assistance, where applicable',
    ],
  },
  {
    id: 'audit-assurance',
    title: 'Audit & Assurance',
    icon: 'shield',
    intro: [
      'We undertake **audit and assurance assignments** in accordance with the applicable legal framework, professional standards, and agreed scope. Our approach emphasises appropriate **planning, evidence, documentation, and communication** of relevant observations.',
    ],
    points: [
      'Statutory audit',
      'Internal audit',
      'Tax audit',
      'Concurrent and other agreed audit assignments',
      'Social audit and related assurance assignments, where applicable',
    ],
  },
  {
    id: 'rera',
    title: 'RERA Services',
    icon: 'building',
    intro: [
      'We assist eligible clients with relevant **RERA-related financial and compliance requirements**, depending on the project, state rules, and role of the client. Services may include documentation support, financial information, periodic compliance assistance, and coordination for required professional reports.',
    ],
  },
  {
    id: 'valuation',
    title: 'Valuation Services',
    icon: 'chart',
    intro: [
      'Over the past few years, Zeeshan Ahmed & Co. has established **one of the finest niche valuation advisory practices**. Our expertise and structured approach inspire confidence among Finance Heads, Management Teams, Investors, Business Owners, and intermediaries including Audit, Tax, and Legal advisors.',
      'In today’s complex and evolving business environment, the demand for **robust, independent, and technically sound valuation services** is paramount. Leveraging our extensive experience in valuation, technical accounting, corporate finance, taxation, and strategy, we deliver **customized and defensible valuation solutions** tailored to each client’s specific requirements.',
      'Our integrated approach enables comprehensive analysis and reporting across a broad spectrum of valuation challenges including business valuations, purchase price allocations, valuation of intangible assets, swap ratio determinations, complex financial instruments, and impairment assessments. As trusted partners to leading audit firms, tax advisors, transaction advisory firms, private equity funds, and venture capital firms, we support a diverse clientele with reliable and high-quality valuation services.',
    ],
    sections: [
      {
        title: 'Financial reporting compliant valuations',
        text: 'Valuation support may include purchase price allocation for business combinations, impairment analysis of goodwill and intangible assets, grant-date fair valuation of ESOPs and share-based payments, valuation of complex financial instruments, and fair-value assessment of portfolio companies and investee entities. Applicable accounting standards and reporting requirements are considered according to the engagement.',
      },
      {
        title: 'Regulatory & compliance valuations',
        text: 'We assist with valuation requirements arising from share issuance and transfer, fund raising, mergers and amalgamations, capital restructuring, and other transactions. Relevant requirements may arise under company law, income-tax law, FEMA regulations, SEBI regulations, or other applicable provisions.',
      },
      {
        title: 'Alternate investment valuations',
        text: 'We support valuation of investment portfolios and unquoted investee entities for periodic reporting and related requirements. The work may involve consideration of transaction information, business performance, market data, investment terms, and relevant valuation guidelines.',
      },
      {
        title: 'Financial modelling & analysis',
        text: 'Where included in the engagement, we assist with financial models and analytical work to support business planning, valuation, transaction evaluation, and management decision-making. Assumptions, limitations, and intended use should be documented in the deliverables.',
      },
    ],
  },
  {
    id: 'company-llp',
    title: 'Company & LLP Services',
    icon: 'briefcase',
    intro: [
      'We assist entrepreneurs and businesses with the **incorporation and structuring of companies and limited liability partnerships**, along with related documentation and post-incorporation requirements. Support may include name-related applications, incorporation documentation, statutory registrations, maintenance of records, and guidance on ongoing obligations.',
    ],
    points: [
      'Company and LLP incorporation support',
      'Post-incorporation compliance and statutory records',
      'Changes in directors, partners, registered office, capital, or constitutional documents',
      'Annual and event-based filing support',
      'Conversion and restructuring-related compliance, where applicable',
    ],
  },
  {
    id: 'roc-compliance',
    title: 'ROC & Corporate Compliance',
    icon: 'calendar',
    intro: [
      'We provide support for **routine and event-based corporate filings** and compliance under applicable company and LLP laws. Our work focuses on **accurate documentation, tracking of due dates**, and helping clients understand the approvals and records required for corporate actions.',
    ],
    points: [
      'Annual filings and statutory returns',
      'Director and DIN-related compliance support',
      'Board and shareholder resolutions and minutes',
      'Share allotment, transfer, and capital-related documentation',
      'Registered-office and other event-based filings',
      'Compliance calendars and record maintenance',
    ],
  },
  {
    id: 'consultancy-advisory',
    title: 'Consultancy & Advisory Services',
    icon: 'users',
    intro: [
      'Our consultancy and advisory services help clients understand **financial, tax, corporate, and regulatory issues** affecting their operations. We focus on identifying the relevant facts, explaining available options, and helping clients evaluate practical next steps. Any formal opinion or representation is provided only within an agreed engagement.',
    ],
    sections: [
      {
        title: 'Financial consulting',
        text: 'We help business owners interpret financial information and evaluate business decisions through structured financial analysis and practical advisory. Depending on the engagement, work may include budgeting, cash-flow review, financial projections, management reporting, working-capital analysis, and support for business planning.',
      },
    ],
  },
  {
    id: 'business-setup',
    title: 'Business Setup & Licensing',
    icon: 'award',
    intro: [
      'We support new and existing businesses in identifying relevant **registrations, licences, and formalities** for their proposed activities. Requirements differ by sector, location, and legal structure; accordingly, the scope is determined after reviewing the business model and applicable rules.',
    ],
    points: [
      'MSME/Udyam registration assistance',
      'Startup India-related application support',
      'Trade licence and business registration support',
      'Trademark application coordination',
      'ISO certification process coordination',
      'Other registrations and licences, as agreed',
    ],
  },
  {
    id: 'documentation-drafting',
    title: 'Documentation & Drafting Services',
    icon: 'pen',
    intro: [
      'We assist with **business and compliance documentation** based on the transaction, legal structure, and intended purpose. Drafts are prepared from information and instructions supplied by the client and are subject to review and approval before use.',
    ],
    points: [
      'Board and shareholder resolutions',
      'Declarations, affidavits, undertakings, and consent letters',
      'Business and compliance letters',
      'Applications, replies, and supporting documentation',
      'Agreements and other business documents, subject to scope and applicable professional requirements',
    ],
  },
  {
    id: 'accounting-payroll',
    title: 'Accounting & Payroll',
    icon: 'book',
    intro: [
      'Our accounting and payroll support is intended to help clients maintain **organised books and reliable periodic information**. Services can be arranged on a recurring or assignment basis according to the client’s systems, transaction volume, and reporting needs.',
    ],
    points: [
      'Bookkeeping and accounting support',
      'Bank and ledger reconciliations',
      'Accounts finalisation and financial statement preparation support',
      'Payroll processing and related records',
      'TDS-related accounting support',
      'Management reports and periodic summaries',
    ],
  },
  {
    id: 'trust-ngo',
    title: 'Trust, Society & NGO Services',
    icon: 'heart',
    intro: [
      'We assist **trusts, societies, Section 8 companies, and other not-for-profit organisations** with applicable registrations, tax-related applications, statutory compliance, and documentation. The requirements depend on the organisation’s legal form, objects, activities, and eligibility.',
    ],
    points: [
      'Registration and compliance support for eligible charitable organisations',
      'Assistance with applications under Sections 332 and 354 of the Income-tax Act, 2025, including provisional registration through Form 104 and regular registration or approval through Form 105, as applicable',
      'Section 8 company incorporation and compliance',
      'CSR-related documentation and compliance support',
      'NGO Darpan registration assistance',
      'FCRA-related compliance support, where applicable',
    ],
  },
]
