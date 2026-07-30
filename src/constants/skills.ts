import {
    Code2,
    Database,
    Server,
    Sparkles,
    Wrench
} from 'lucide-react'

import { SkillCategory } from '@/types/skills'

export const skills: SkillCategory[] = [
    {
        title: 'Frontend',
        icon: Code2,
        skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS']
    },
    {
        title: 'Backend',
        icon: Server,
        skills: ['Node.js', 'REST API', 'Authentication & Security']
    },
    {
        title: 'Databases',
        icon: Database,
        skills: ['PostgreSQL', 'MongoDB', 'SQL', 'Database Design']
    },
    {
        title: 'Tools & Platforms',
        icon: Wrench,
        skills: ['Git & GitHub', 'Docker', 'AWS', 'Stripe Integration']
    },
    {
        title: 'Specializations',
        icon: Sparkles,
        skills: ['AI Integration (OpenAI, Google AI, Anthropic)', 'Code Refactoring', 'System Architecture', 'Scalability & Performance']
    }
]