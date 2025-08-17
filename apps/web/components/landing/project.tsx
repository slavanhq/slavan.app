import { ArrowUpLeft } from "lucide-react"

export const Project = () => {
    const projects = [
        {
            id: 1,
            title: "mars",
            description:
                "a cool YouTube clone with a clean, modern UI and smooth user experience. It brings the core feel of YouTube with a fresh, minimal design twist",
            href: "https://mars-omega-ten.vercel.app/",
        },
        {
            id: 2,
            title: "nexus",
            description:
                "is a modern note-taking application that leverages AI to generate relevant thumbnails for each note, helping users visually organize their ideas",
            href: "https://nexus-two-sooty.vercel.app/",
        },
        {
            id: 3,
            title: "unfold",
            description:
                "is a frontend clone of the homepage of the Unfold website.",
            href: "https://unfold-clone.vercel.app/",
        },
        {
            id: 4,
            title: "nuvessi",
            description:
                "is a minimal web development studio focused on building clean, fast, and modern websites. That help brands launch online with clarity, style, and zero fluff.",
            href: "https://nuvessi.vercel.app/",
        },
        {
            id: 5,
            title: "thoughts",
            description:
                "a blogging platform where users can read blogs, write their own, and become writers to publish blogs that others can read.",
            href: "https://thoughts-red-omega.vercel.app/home",
        },
        {
            id: 6,
            title: "dukaan",
            description:
                "A clean and responsive UI clone of the Dukaan website, recreated with attention to layout, design, and user experience.",
            href: "https://dukaan-app-ui-iota.vercel.app/",
        },
    ]

    return (
        <div className="w-full border-b">
            <div className="max-w-5xl mx-auto">
                <div className="text-3xl font-medium border-x px-4 py-1 border-b">
                    Projects
                </div>
                <div className="flex flex-col">
                    {projects.map((project) => (
                        <div
                            key={project.id}
                            className={`flex ${project.id !== 6 ? "border-b" : "" } border-x max-h-18`}
                        >
                            <div className="border-r w-[60px] flex items-center justify-center">
                                <ArrowUpLeft size={35} />
                            </div>
                        
                            <div className="flex-1 px-4 py-2">
                                <div className="font-semibold text-lg">{project.title}</div>
                                <div className="text-sm ">{project.description}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
