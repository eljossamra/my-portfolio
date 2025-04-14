type Project = {
    title: string
    description: string
    link?: string
}

const projects: Project[] = [
    {
        title: 'AMPS Messaging System',
        description:
            'Designed and deployed a scalable message streaming architecture using AMPS for a financial application. Led the POC, onboarding, and production rollout.',
        link: '#',
    },
    {
        title: 'Portfolio Website',
        description:
            'A full-stack portfolio using React, Vite, Flask, and Tailwind CSS. Custom deployment setup using Render and Netlify.',
        link: '#',
    },
    {
        title: 'Co-Op Hiring System',
        description:
            'Spearheaded a Co-Op hiring workflow with HR integration, technical filtering, and interview coordination.',
        link: '#',
    },
]

export default function Projects() {
    return (
        <section id="projects" className="space-y-4">
            <h2 className="text-3xl font-bold text-gray-900">Projects</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {projects.map((project, idx) => (
                    <div
                        key={idx}
                        className="border rounded-lg p-5 shadow hover:shadow-md transition-shadow bg-white"
                    >
                        <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                        <p className="text-gray-700 mt-2">{project.description}</p>
                        {project.link && (
                            <a
                                href={project.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block mt-4 text-sm font-medium text-blue-600 hover:underline"
                            >
                                View project →
                            </a>
                        )}
                    </div>
                ))}
            </div>
        </section>
    )
}