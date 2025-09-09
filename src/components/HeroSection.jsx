import { ArrowDown } from "lucide-react"


export const HeroSection = () => {
    return (
        <section
            id="hero"
            className="relative min-h-screen flex flex-col items-center justify-center px4"
        >
            <div
                className="container max-w-4xl mx-auto text-center z-10"
            >
                <div
                    className="space-y-6"
                >
                    <h1
                        className="text-4xl md:text-6xl font-bold tracking-tight"
                    >
                        <span
                            className="opacity-0 animate-fade-in"
                        > Hola, soy </span>

                        <span
                            className="text-primary opacity-0 animate-fade-in-delay-1"
                        > Cristian Fernando </span>

                        <span
                            className="text-gradient ml-2 opacity-0 animate-fade-in-delay-1"
                        > Jimenez Castañeda </span>
                    </h1>

                    <p
                        className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3"
                    >
                        Desarrollador full stack con experiencia en el desarrollo de aplicaciones móviles y aplicaciones web, además de la gestión de bases de datos. Interesado en contribuir en proyectos de front-end y back-end, aportando soluciones escalables y enfocadas en la experiencia de usuario.
                    </p>

                    <div
                        className="opacity-0 animate-fade-in-delay-3"
                    >
                        <a
                            href="#projects"
                            className="cosmic-button"
                        >
                            Mis Trabajos
                        </a>
                    </div>
                </div>
            </div>

            <div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce"
            >
                <ArrowDown 
                    className="h-5 w-5 text-primary"
                />
            </div>

        </section>
    )
}