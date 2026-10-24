import type { IconName } from '../components/ui/Icon'

export const site = {
  name: 'Zeeshan Ahmed & Co.',
  shortName: 'Zeeshan Ahmed & Co.',
  tagline: 'Chartered Accountants you can trust with your numbers',
  description:
    'Tax, GST, audit and advisory services for individuals, startups and growing businesses, handled with clarity and care.',
  // First mobile number is the primary one used for the Call and WhatsApp buttons
  phone: '+91 98359 72299',
  phoneHref: 'tel:+919835972299',
  whatsappHref: 'https://wa.me/919835972299',
  phones: [
    { label: 'Office', display: '0651-4516821', href: 'tel:+916514516821' },
    { label: 'Mobile', display: '+91 98359 72299', href: 'tel:+919835972299' },
    { label: 'Mobile', display: '+91 96081 72299', href: 'tel:+919608172299' },
    { label: 'Mobile', display: '+91 87895 48104', href: 'tel:+918789548104' },
  ],
  email: 'admin@cazeeshanahmed.com',
  // Shown in the footer and on the Contact page
  emails: ['info@cazeeshanahmed.com'],
  address: 'Zeeshan Ahmed & Co., 208, Second Floor, H. R. Complex, Kadru, Ranchi, Jharkhand 834002',
  hours: 'Mon to Sat, 10:00 AM to 7:00 PM',
  mapEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3663.0278431819106!2d85.3145928!3d23.3510058!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f4e1cc46a41f23%3A0xcc4256c9eb0f8968!2sZEESHAN%20AHMED%20%26%20CO.!5e0!3m2!1sen!2sin!4v1792831195157!5m2!1sen!2sin',
  mapHref: 'https://www.google.com/maps/search/?api=1&query=Zeeshan+Ahmed+%26+Co.+H.+R.+Complex+208+Kadru+Ranchi+Jharkhand+834002',
  socials: [
    { label: 'LinkedIn', icon: 'linkedin', href: 'https://www.linkedin.com/company/zeeshanahmedco' },
    { label: 'Facebook', icon: 'facebook', href: 'https://www.facebook.com/zeeshanahmedco' },
    { label: 'Instagram', icon: 'instagram', href: 'https://www.instagram.com/zeeshanahmedco' },
    { label: 'X (Twitter)', icon: 'x', href: 'https://www.x.com/zeeshanahmedco' },
    { label: 'YouTube', icon: 'youtube', href: 'https://www.youtube.com/zeeshanahmedco' },
  ] as { label: string; icon: IconName; href: string }[],
}

export const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/services', label: 'Services' },
  { to: '/contact', label: 'Contact' },
]
