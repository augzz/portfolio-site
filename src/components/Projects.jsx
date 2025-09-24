import { ArrowRight, Github } from "lucide-react";


const projects = [
  {
    id: 1,
    title: "Active Directory Lab",
    description: "Virtual lab environment built using VirtualBox, includes Windows, Linux, and Splunk.",
    image: "/projects/AD_Lab_diagram.png",
    tags: ["Active Directory", "Windows", "Linux", "Splunk"],
    githubUrl: "https://github.com/augzz/AD-Lab"
  },
  {
    id: 2,
    title: "Dungeons of Akazarn",
    description: "A 2D RPG game developed using Unity as a senior capstone project.",
    image: "/projects/DOA_Town_Art.png",
    tags: ["C#", "UI/UX Design", "Art/Animation", "Project Management"],
    githubUrl: "https://github.com/augzz/Dungeons-of-Akazarn"
  }
]

export const Projects = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          Featured <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. 
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, key) => (
            <div
              key={key} 
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            > 
              <div className="h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                />
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium rounded-full border bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
              
              
              <h3 className="text-xl font-semibold mb-1">{project.title}</h3>

              <p className="text-muted-foreground text-sm mb-4">
                {project.description}
              </p>
              <div className="flex justify-between items-center">
                <div className="flex space-x-3">
                  <a 
                    href={project.githubUrl} 
                    target="_blank"
                    className="text-foreground/80 hover:text-primary transition-colors duration-300"
                  >
                    <Github size={20}/>
                  </a>
                </div>
              </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a 
            className="page-button w-fit flex items-center mx-auto gap-2"
            target="_blank" 
            href="https://github.com/augzz"
          >
            GitHub <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  )
};