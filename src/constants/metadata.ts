import { Metadata } from 'next'

export const meta: Metadata = {
    metadataBase: new URL('https://bardevs-portfolio.vercel.app'),
    title: 'Bar Cohen - Backend Software Engineer | Node.js, PostgreSQL, AI Agents',
    description:
        'Backend Software Engineer with 2+ years experience ' +
        'specializing in Node.js, PostgreSQL, RAG, and AI agents. ' +
        'Building scalable AI backend infrastructure with reliable cloud deployment and clean architecture.',
    keywords: [
        'Bar Cohen',
        'Backend Developer',
        'Software Engineer',
        'TypeScript',
        'Node.js',
        'REST API',
        'PostgreSQL',
        'RAG',
        'AI Agents',
        'AWS',
        'MongoDB',
        'Database Design',
        'AI Integration',
        'System Architecture'
    ],
    authors: [{
        name: 'Bar Cohen'
    }],
openGraph: {
    title: 'Bar Cohen - Backend Software Engineer',
    description:
      'Backend Software Engineer with 2+ years experience ' +
        'specializing in Node.js, PostgreSQL, RAG, and AI agents. ' +
        'Building scalable AI backend infrastructure with reliable cloud deployment and clean architecture.',
    url: 'https://bardevs-portfolio.vercel.app/',
    siteName: 'Bar Cohen Portfolio',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Bar Cohen - Backend Engineer | AI-Powered Web Platforms'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Bar Cohen - Backend Software Engineer',
    description:
      'Backend Software Engineer specializing in Node.js, PostgreSQL, and AI-powered backend systems.',
    images: ['/og-image.png']
  }
}