import { Experience } from '@/types/experience'

export const experiences: Experience[] = [
    {
        company: 'Pulse',
        role: 'Full-Stack Engineer',
        period: '2026-Present',
        brief: 'AI-driven rehabilitation platform delivering personalized insights and motivation to reduce dropout and drive recovery success',
        achievements: [
            'Built an AI-driven rehabilitation platform end-to-end with React, TypeScript, Node.js, and PostgreSQL',
            'Designed daily progress tracking, goal setting, and a community forum with an AI assistant delivering personalized insights and motivation',
            'Integrated Google AI for conversational support, containerized the system with Docker, and deployed the MVP to AWS',
            'Engineered a fleet of pre-commit AI review agents for code review, style enforcement, architecture auditing, duplication removal, and security scanning',
            'Cut page load time by over 90%, from 8-12 seconds to under 0.5 seconds, by migrating to a Next.js client and fixing a memory-leak build bug',
            'Saved ~50K tokens per run (35-40% of context) by replacing heavy integrations with lightweight API scripts, restoring full development velocity'
        ],
        techStack: ['React', 'TypeScript', 'Node.js', 'PostgreSQL', 'Next.js', 'Docker', 'AWS', 'Google AI'],
        details: [
            'Owning end-to-end development of a healthcare platform from architecture to deployment',
            'Delivering AI-generated insights for early detection of declining patient engagement',
            'Engineering a fleet of pre-commit AI review agents to keep the codebase consistent and secure',
            'Architecting for scalability with Next.js and cloud infrastructure on AWS'
        ]
    },
    {
        company: 'WorkonIt.ai',
        role: 'Full-Stack Engineer',
        period: '2024-2025',
        brief: 'AI-based recruitment platform built as a freelancer, from monolith to production beta',
        achievements: [
            'Developed an AI-based recruitment platform as a freelancer with an OpenAI-powered assistant that filters relevant jobs, rewrites resumes, and drafts job posts',
            'Built a campaign scheduler that publishes across Facebook, WhatsApp, and Telegram groups',
            'Re-architected a monolith into separate client and server deployments on Vercel and DigitalOcean',
            'Added object storage for resumes and media, integrated OTP authentication and SendGrid email',
            'Delivered a production beta end-to-end, shipping job posting, applications, AI campaign scheduling, and paid subscriptions',
            'Reduced a 1,500-line file into modular components of 50-200 lines each by applying SOLID principles, improving maintainability'
        ],
        techStack: ['React', 'Node.js', 'OpenAI', 'Vercel', 'DigitalOcean', 'SendGrid'],
        details: [
            'Re-architecting a monolith into separate client and server deployments',
            'Integrating object storage, OTP authentication, and email services',
            'Delivering a production beta with job posting, applications, and paid subscriptions'
        ]
    }
]
