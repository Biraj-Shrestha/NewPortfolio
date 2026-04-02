import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowUp,
  Mail,
  Phone,
  MapPin,
  Send,
} from "lucide-react";
import TypingEffect from "./TypeWriter";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Contact", path: "/contact" },
  ];

   const socials = [
    {
      name: "Facebook",
      icon: <FaFacebook />,
      url: "https://www.facebook.com/biraj.shrestha.5249",
      hover: "bg-blue-600",
    },
    {
      name: "Twitter",
      icon: <FaTwitter />,
      url: "https://x.com/BirajShres975",
      hover: "bg-[#1DA1F2]",
    },
    {
      name: "Instagram",
      icon: <FaInstagram />,
      url: "https://www.instagram.com/_biraj_shrestha_",
      hover: "bg-gradient-to-tr from-[#f9ce34] via-[#ee2a7b] to-[#6228d7]",
    },
    {
      name: "LinkedIn",
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/biraj-shrestha-6353a22a6",
      hover: "bg-[#0077B5]",
    },
  ];


  return (
    <footer className="bg-background border-t mx-auto border-white/5 pt-24 pb-12 relative overflow-hidden" id="footer">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#4246ce]/5 rounded-full blur-[150px] -mr-64 -mt-64" />
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#4246ce]/5 rounded-full blur-[150px] -mr-64 -mt-64" />

      <div className="mx-auto px-6 w-[90vw]">
        <div className="grid justify-between grid-cols-2 lg:grid-cols-5 gap-10 mb-50">
          {/* Brand & Mission */}
          <div className="col-span-2 flex flex-col justify-center items-center xl:block space-y-4">
            <Link 
              to="/"
              onClick={scrollToTop}
              className="text-3xl font-black text-white tracking-widest w-full text-center xl:text-left uppercase italic"
            >
              Thank<span className="text-[#4246ce]">you.</span>
            </Link>
            <TypingEffect/>
            <div className="flex w-full justify-center xl:justify-start items-center relative z-10 gap-4">
             {socials.map((social) => (
                <Link
                  key={social.name}
                  to={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  title={social.name}
                  className={`w-10 h-10 rounded-xl flex items-center justify-center text-xl hover:text-white transition-all duration-300 ${social.hover} hover:hover:-translate-y-1`}
                >
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-8 w-full text-center">
            <h3 className="text-white font-black text-xs uppercase tracking-[0.3em] italic">
              Navigation
            </h3>
            <ul className="space-y-4 w-full text-center">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    onClick={scrollToTop}
                    className="text-white/40 hover:text-[#4246ce] transition-all text-sm font-bold uppercase tracking-widest gap-3 group"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="space-y-8">
            <h3 className="text-white font-black text-center lg:text-left text-xs uppercase tracking-[0.3em] italic">
              Contact
            </h3>
            <div className="space-y-6 text-sm font-medium">
              <Link
                to="mailto:shresthabiraj975@gmail.com"
                className="flex items-center gap-4 flex-col lg:flex-row text-white/40 hover:text-white transition-colors group"
              >
                <Mail size={18} className="text-[#4246ce]" />
                 <p>shresthabiraj975@gmail.com</p>
              </Link>
              <Link
                to="tel:+9779806395504"
                className="flex items-center flex-col lg:flex-row gap-4 text-white/40 hover:text-white transition-colors group"
              >
                <Phone size={18} className="text-purple-400" />
                 <p>+977 980 639 5504</p>
              </Link>
              <div className="flex items-center flex-col lg:flex-row gap-4 text-white/40 group">
                <MapPin size={18} className="text-blue-700" />
                 <p>Kathmandu, Nepal</p>
              </div>
            </div>
          </div>

          {/* Quick Contact Form */}
          <div className="col-span-2 lg:col-span-1 space-y-8">
            <h3 className="text-white text-left w-full font-black text-xs uppercase tracking-[0.3em] italic">
              Instant Reach
            </h3>
            <form
              action="https://api.web3forms.com/submit"
              method="POST"
              className="space-y-4"
            >
              <input
                type="hidden"
                name="access_key"
                value="1c2d2012-7311-4f70-b427-c1069b18ff15"
              />
              <div className="relative">
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="w-full bg-white/5 border border-white/5 rounded-2xl py-4 pl-6 pr-14 text-sm text-white focus:outline-none focus:border-[#4246ce] transition-all"
                />
                <button
                  type="submit"
                  className="absolute cursor-pointer right-2 top-2 p-3 bg-[#4246ce] text-black rounded-xl hover:bg-[#4246ce] transition-colors"
                >
                  <Send size={16} strokeWidth={3} />
                </button>
              </div>
              <p className="text-[10px] text-white/20 text-left font-bold uppercase tracking-widest px-2">
                Typically responds in 12h
              </p>
            </form>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-white/5 flex flex-col md:flex-row justify-between pt-5 items-center gap-8">
          <p className="text-[10px] text-white/20 font-bold uppercase tracking-[0.4em]">
            &copy; {new Date().getFullYear()} Portfolio // Biraj
            Shrestha
          </p>
          <div className="flex gap-8 text-[10px] text-white/20 font-bold uppercase tracking-widest">
            <a href="#" className="hover:text-[#4246ce] transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-[#4246ce] transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>

      {/* Floating Scroll Top */}
      <AnimatePresence>
        {isVisible && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-10 right-10 w-14 h-14 rounded-full bg-[#1c2094] text-black flex items-center justify-center shadow-2xl z-50 hover:bg-[#4246ce] transition-all active:scale-95 group"
          >
            <ArrowUp
              size={24}
              strokeWidth={3}
              className="group-hover:-translate-y-1 transition-transform"
            />
          </motion.button>
        )}
      </AnimatePresence>
    </footer>
  );
};

export default Footer;
