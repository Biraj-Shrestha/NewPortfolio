import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const fullMenuRef = useRef(null);
  const containerRef = useRef(null);
  const tl = useRef(null);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Set the initial state explicitly before creating the timeline
      gsap.set(".menu-link", { x: 100, opacity: 0 });

      tl.current = gsap
        .timeline({ paused: true })
        .to(fullMenuRef.current, {
          right: 0,
          duration: 0.5,
          ease: "power2.out",
        })
        .to(".menu-link", {
          x: 0,
          opacity: 1,
          duration: 0.4,
          stagger: 0.1,
        });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Track scroll position for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "projects", "about", "experience", "photography"];
      const scrollPosition = window.scrollY + 200; // Offset for better UX

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleOpen = () => {
    if (tl.current) tl.current.play();
  };

  const handleClose = () => {
    if (tl.current) tl.current.reverse();
  };

  const handleScrollTo = (targetId) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarHeight = 0; // Adjust based on your navbar height
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
      
      handleClose(); // Close menu after clicking
      setActiveSection(targetId); // Update active section
    }
  };

  const navLinks = ["Home", "Projects", "About", "Experience", "Photography","Contact"];

  return (
    <div ref={containerRef} className="relative">
      <nav className="fixed top-0 w-full flex justify-between p-8 text-white z-40">
        <h2 
          className="text-2xl font-bold cursor-pointer"
          onClick={() => handleScrollTo("home")}
        >
          BIRAJ SHRESTHA
        </h2>
        <Menu className="cursor-pointer" size={32} onClick={handleOpen} />
      </nav>

      <div
        id="full"
        ref={fullMenuRef}
        className="fixed top-0 -right-[40%] w-[40%] h-screen bg-white/10 backdrop-blur-md z-50 flex flex-col justify-center border-l border-white/20 max-md:w-2/3 max-md:-right-full"
      >
        <div
          className="absolute top-10 right-12 bg-white p-2 rounded-full cursor-pointer text-black"
          onClick={handleClose}
        >
          <X size={24} strokeWidth={3} />
        </div>

        {navLinks.map((link) => {
          const sectionId = link.toLowerCase();
          const isActive = activeSection === sectionId;
          
          return (
            <a
              key={link}
              onClick={(e) => {
                e.preventDefault();
                handleScrollTo(sectionId);
              }}
              href={`#${sectionId}`}
              className={`menu-link text-5xl z-50 relative font-medium ml-12 mb-6 transition-opacity max-md:ml-0 max-md:text-center cursor-pointer`}
            >
              {link}
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Navbar;