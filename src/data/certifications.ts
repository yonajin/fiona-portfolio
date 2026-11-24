import type { Certification } from '../types'

/**
 * Certifications shown in the Experience section.
 *
 * Each entry has a preview rendered from the real certificate PDF
 * (public/certificates/<id>.webp + <id>-640.webp) and the original PDF.
 * Add a new certificate by exporting its first page at ~1600px wide as
 * .webp, adding a 640px copy, and appending an entry here.
 * Entries are shown newest first (sorted by `dateISO`).
 */
const C = '/certificates'

const certificationList: Certification[] = [
  {
    id: 'appkademiya-certified-cybersecurity-professional',
    title: 'Certified Cybersecurity Professional (CCP)',
    issuer: 'Appkademiya',
    date: 'October 5, 2026',
    dateISO: '2026-10-05',
    dateLabel: 'Issued',
    details: [
      { label: 'Status', value: 'Digitally Verified' },
      { label: 'Certificate No.', value: 'CERT-CCP-CYBERSECURITY-PROFESSIONAL-20261005-6F087A6A7D57' },
    ],
    image: {
      src: `${C}/appkademiya-certified-cybersecurity-professional.webp`,
      srcSmall: `${C}/appkademiya-certified-cybersecurity-professional-640.webp`,
      smallWidth: 640,
      width: 1600,
      height: 1131,
      alt: 'Appkademiya Certificate of Achievement certifying that Fiona Gene Umipig Basa completed the Certified Cybersecurity Professional (CCP) module, issued October 5, 2026, status Digitally Verified.',
    },
    pdf: `${C}/appkademiya-certified-cybersecurity-professional.pdf`,
    verifyUrl: 'https://appkademiya.online/verify/CERT-CCP-CYBERSECURITY-PROFESSIONAL-20261005-6F087A6A7D57',
  },
  {
    id: 'cisco-introduction-to-data-science',
    title: 'Introduction to Data Science',
    issuer: 'Cisco Networking Academy',
    date: 'January 12, 2026',
    dateISO: '2026-01-12',
    dateLabel: 'Issued',
    image: {
      src: `${C}/cisco-introduction-to-data-science.webp`,
      srcSmall: `${C}/cisco-introduction-to-data-science-640.webp`,
      smallWidth: 640,
      width: 1600,
      height: 1236,
      alt: 'Cisco Networking Academy Certificate of Course Completion for Fiona Gene Basa for the Introduction to Data Science course, issued January 12, 2026.',
    },
    pdf: `${C}/cisco-introduction-to-data-science.pdf`,
  },
  {
    id: 'zuitt-python-django-aws',
    title: 'Python, Django and AWS Program (EC004)',
    issuer: 'Zuitt Learning Institute, Inc.',
    date: 'October 23, 2025',
    dateISO: '2025-10-23',
    dateLabel: 'Completed',
    details: [{ label: 'Duration', value: '80 hours' }],
    coverage: ['Python Fundamentals', 'Django Fundamentals', 'AWS EC2', 'AWS S3', 'AWS Lambda'],
    image: {
      src: `${C}/zuitt-python-django-aws.webp`,
      srcSmall: `${C}/zuitt-python-django-aws-640.webp`,
      smallWidth: 640,
      width: 1600,
      height: 1236,
      alt: 'Zuitt Certificate of Completion awarded to Fiona Gene Basa for the EC004 Python-AWS course, 80 hours, July 7 to October 23, 2025, covering Python, Django, AWS EC2, S3 and Lambda.',
    },
    pdf: `${C}/zuitt-python-django-aws.pdf`,
  },
  {
    id: 'google-foundations-of-cybersecurity',
    title: 'Foundations of Cybersecurity',
    issuer: 'Google / Coursera',
    date: 'September 17, 2025',
    dateISO: '2025-09-17',
    dateLabel: 'Completed',
    details: [{ label: 'Certificate ID', value: '1M17YT25BBHX' }],
    image: {
      src: `${C}/google-foundations-of-cybersecurity.webp`,
      srcSmall: `${C}/google-foundations-of-cybersecurity-640.webp`,
      smallWidth: 640,
      width: 1600,
      height: 1236,
      alt: 'Google course certificate via Coursera showing Fiona Gene Basa completed Foundations of Cybersecurity on September 17, 2025.',
    },
    pdf: `${C}/google-foundations-of-cybersecurity.pdf`,
    verifyUrl: 'https://coursera.org/verify/1M17YT25BBHX',
  },
]

export const certifications: Certification[] = [...certificationList].sort((a, b) =>
  b.dateISO.localeCompare(a.dateISO),
)
