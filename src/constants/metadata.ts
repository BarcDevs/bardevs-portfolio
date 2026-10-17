import { Metadata } from 'next'

export const meta: Metadata = {
    metadataBase: new URL('https://bardevs-portfolio.vercel.app'),
    title: 'Bar Cohen - Backend Engineer | Node.js, PostgreSQL, AI Agents',
    description:
        'Backend Engineer with 2+ years experience ' +
        'specializing in Node.js, PostgreSQL, RAG, and AI Agents. ' +
        'Building AI backend infrastructure that reduces patient recovery time.',
    keywords: [
        'Bar Cohen',
        'Backend Engineer',
        'Software Engineer',
        'AI Agents',
        'RAG',
        'PostgreSQL',
        'AWS',
        'TypeScript',
        'Node.js',
        'REST API',
        'Database Design',
        'AI Integration',
        'System Architecture'
    ],
    authors: [{
        name: 'Bar Cohen'
    }],
openGraph: {
    title: 'Bar Cohen - Backend Engineer',
    description:
      'Backend Engineer with 2+ years experience ' +
        'specializing in Node.js, PostgreSQL, RAG, and AI Agents. ' +
        'Building AI backend infrastructure that reduces patient recovery time.',
    url: 'https://bardevs-portfolio.vercel.app/',
    siteName: 'Bar Cohen Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bar Cohen - Backend Engineer | AI-Powered Backend Systems'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bar Cohen - Backend Engineer',
    description:
      'Backend Engineer specialized in Node.js, PostgreSQL, RAG, and AI Agents.',
    images: ['/og-image.png']
  }
}