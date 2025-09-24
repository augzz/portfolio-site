import { Code, Gamepad2, GlobeLock } from "lucide-react";


export const About = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Tech Enthusiast
            </h3>

            <p className="text-muted-foreground">
              I'm an Information Science & Technology graduate with over 5 years of 
              customer service experience. 
            </p>

            <p className="text-muted-foreground">
              I dabble in web development and game development. I enjoy learning
              about new technologies, networking, and cybersecurity.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a 
                href="#projects" 
                className="page-button"
              >
                Projects
              </a>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-6">
            {/* Card 1 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development </h4>
                  <p className="text-muted-foreground">
                    Creating responsive websites with modern frameworks and tools.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Gamepad2 className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Game Development </h4>
                  <p className="text-muted-foreground">
                    Designing and creating games with diverse gameplay mechanics and custom art assets.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <GlobeLock className="h-6 w-6 text-primary"/>
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Problem Solving </h4>
                  <p className="text-muted-foreground">
                    Solving complex problems and learning new technologies along the way.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  )
};