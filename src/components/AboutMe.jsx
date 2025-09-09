

export const AboutMe = () => {
    return (
        <section
            id="about"
            className="py-24 px-4 relative"
        >
            <div
                className="container mx-auto max-w-5xl"
            >
                <h2
                    className="text-3xl md:text-4xl font-bold mb-12 text-center"
                >
                    Sobre <span className="text-primary"> mi </span>
                </h2>

                <div
                    className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
                >
                    <div
                        className="space-y-6"
                    >
                        <h3
                            className="text-2xl font-semibold"
                        >
                            Desarrollador Full Stack con 2 años de experiencia especializado en aplicaciones web y móviles.
                        </h3>
                        <p 
                            className="text-muted-foreground"
                        >
                            Apasionado por crear experiencias de usuario intuitivas, 
                            accesibles y de alto rendimiento mediante el uso de tecnologías modernas.
                        </p>

                        <div
                            className="felx flex-col sm:flex-row gap-4 pt-4 justify-center"
                        >
                            <a 
                                href="#contact"
                                className="cosmic-button"
                            >
                                Contactame
                            </a>
                            {"  "}
                            <a 
                                href=""
                                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
                            >
                                Descarga mi CV
                            </a>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </div>
        </section>
    )
}