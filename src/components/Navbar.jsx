import {cn} from "@/lib/utils";
import { useEffect, useState } from "react";

const navItems = [
    {name: "Home", href: "#hero"},
    {name: "Home", href: "#about"},
    {name: "Home", href: "#skills"},
    {name: "Home", href: "#projects"},
    {name: "Home", href: "#contact"},
]

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => { 
        const handleScroll = () => {
            setIsScrolled(window.screenY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav 
            className={cn(
                "fixed w-full z-40 transition-all duration-300", 
                isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>
            <div className="container flex items-center justify-between">
                <a 
                    className="text-xl font-bold text-primary flex items-center" 
                    href="#hero"
                >
                   <span className="relative z-10">
                        <span className="text-glow text-foreground"> Cristian Fernando Jimenez Castañeda </span> {" "}
                        Portafolio 
                    </span> 
                </a>

                    {/* desktop navbat */}

                    <div className="hidden md:flex space-x-8">
                        {navItems.map((item, key) => (
                            <a 
                                key={key}
                                href={item.href}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>

                    {/* mobile navbar */}

            </div>
        </nav>
    );
};