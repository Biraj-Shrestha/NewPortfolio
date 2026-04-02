import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Check, Loader } from "lucide-react";
import { Link } from "react-router-dom";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
 
const Contact = () => {
  const containerRef = useRef(null);
  const formRef = useRef(null);
  const headingRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [focusedField, setFocusedField] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Reset form after success
    setTimeout(() => {
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSuccess(false);
    }, 3000);
  };

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
    <div
      ref={containerRef}
      className="relative min-h-screen bg-black text-white py-20 px-4 sm:px-6 lg:px-8 overflow-hidden font-[outfit]"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="floating-circle absolute top-20 left-10 w-72 h-72 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="floating-circle absolute top-40 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="floating-circle absolute bottom-20 left-1/4 w-64 h-64 bg-pink-500/5 rounded-full blur-3xl" />
        <div className="floating-circle absolute bottom-40 right-1/3 w-80 h-80 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <h1 className="text-[10vw] lg:text-[7vw] font-bold mb-6">
            Get In{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4246ce] to-blue-500">
              Touch
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Form */}
          <div ref={formRef} className="relative">
            <form
              onSubmit={handleSubmit}
              className="space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-2xl border border-white/10"
            >
              {/* Name Field */}
              <div className="form-field relative">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("name")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="peer w-full bg-transparent border-b-2 border-white/20 py-3 px-2 text-white placeholder-transparent focus:border-[#4246ce] focus:outline-none transition-colors"
                  placeholder="Your Name"
                />
                <label
                  className={`absolute left-2 transition-all duration-300 pointer-events-none ${
                    formData.name || focusedField === "name"
                      ? "-top-5 text-sm text-[#4246ce]"
                      : "top-3 text-base text-gray-400"
                  }`}
                >
                  Your Name
                </label>
              </div>

              {/* Email Field */}
              <div className="form-field relative">
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("email")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="peer w-full bg-transparent border-b-2 border-white/20 py-3 px-2 text-white placeholder-transparent focus:border-[#4246ce] focus:outline-none transition-colors"
                  placeholder="Your Email"
                />
                <label
                  className={`absolute left-2 transition-all duration-300 pointer-events-none ${
                    formData.email || focusedField === "email"
                      ? "-top-5 text-sm text-[#4246ce]"
                      : "top-3 text-base text-gray-400"
                  }`}
                >
                  Your Email
                </label>
              </div>

              {/* Subject Field */}
              <div className="form-field relative">
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("subject")}
                  onBlur={() => setFocusedField(null)}
                  required
                  className="peer w-full bg-transparent border-b-2 border-white/20 py-3 px-2 text-white placeholder-transparent focus:border-[#4246ce] focus:outline-none transition-colors"
                  placeholder="Subject"
                />
                <label
                  className={`absolute left-2 transition-all duration-300 pointer-events-none ${
                    formData.subject || focusedField === "subject"
                      ? "-top-5 text-sm text-[#4246ce]"
                      : "top-3 text-base text-gray-400"
                  }`}
                >
                  Subject
                </label>
              </div>

              {/* Message Field */}
              <div className="form-field relative">
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  required
                  rows="5"
                  className="peer w-full bg-transparent border-b-2 border-white/20 py-3 px-2 text-white placeholder-transparent focus:border-[#4246ce] focus:outline-none transition-colors resize-none"
                  placeholder="Your Message"
                />
                <label
                  className={`absolute left-2 transition-all duration-300 pointer-events-none ${
                    formData.message || focusedField === "message"
                      ? "-top-5 text-sm text-[#4246ce]"
                      : "top-3 text-base text-gray-400"
                  }`}
                >
                  Your Message
                </label>
              </div>

              {/* Submit Button */}
              <div className="form-field">
                <button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`group relative w-full py-4 px-8 rounded-full cursor-pointer font-semibold text-lg overflow-hidden transition-all duration-300 ${
                    isSuccess
                      ? "bg-green-500"
                      : "bg-gradient-to-r from-[#4246ce] to-blue-500 hover:shadow-lg hover:shadow-[#4246ce]/50 hover:scale-105"
                  }`}
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    {isSubmitting ? (
                      <>
                        <Loader className="animate-spin" size={20} />
                        Sending...
                      </>
                    ) : isSuccess ? (
                      <>
                        <Check size={20} />
                        Message Sent!
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={20} className="group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-[#4246ce] opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div className="contact-info-section space-y-6">

            {/* Contact Cards */}
            <ContactCard
              icon={<Mail size={24} />}
              title="Email"
              value="shresthabiraj975@gmail.com"
              href="mailto:shresthabiraj975@gmail.com"
            />

            <ContactCard
              icon={<Phone size={24} />}
              title="Phone"
              value="+977 980 639 5504"
              href="tel:+9779806395504"
            />

            <ContactCard
              icon={<MapPin size={24} />}
              title="Location"
              value="Lalitpur, Nepal"
              href="https://maps.google.com"
            />

            {/* Social Links */}
            <div className="contact-card bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-[#4246ce]/50 transition-all duration-300 group">
              <h3 className="text-xl font-semibold mb-4 group-hover:text-[#4246ce] transition-colors">
                Follow Me
              </h3>
              <div className="flex gap-4">
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
          </div>
        </div>
      </div>
    </div>
  );
};

// Contact Card Component
const ContactCard = ({ icon, title, value, href }) => {
  return (
    <Link
      to={href}
      target="_blank"
      rel="noopener noreferrer"
      className="contact-card block bg-white/5 backdrop-blur-md p-6 rounded-xl border border-white/10 hover:border-[#4246ce]/50 hover:bg-white/10 transition-all duration-300 group"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 bg-[#4246ce]/10 rounded-lg text-[#4246ce] group-hover:bg-[#4246ce]/20 group-hover:scale-110 transition-all duration-300">
          {icon}
        </div>
        <div>
          <h3 className="text-sm text-gray-400 mb-1">{title}</h3>
          <p className="text-lg font-semibold text-white group-hover:text-[#4246ce] transition-colors">
            {value}
          </p>
        </div>
      </div>
    </Link>
  );
};

// Social Icon Component
const SocialIcon = ({ href, name, icon }) => {
  return (
    <Link
      to={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={name}
      className="p-3 bg-white/5 rounded-lg hover:bg-[#4246ce]/20 hover:text-[#4246ce] transition-all duration-300 hover:scale-110 hover:-translate-y-1"
    >
      {icon}
    </Link>
  );
};

export default Contact;