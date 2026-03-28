import React, { useEffect, useRef, useState } from "react";
import { Mail, Phone, MapPin, Send, Check, Loader } from "lucide-react";
import { Link } from "react-router-dom";
 
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
                <SocialIcon
                  href="https://twitter.com"
                  name="Twitter"
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  }
                />
                <SocialIcon
                  href="https://linkedin.com"
                  name="LinkedIn"
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  }
                />
                <SocialIcon
                  href="https://github.com"
                  name="GitHub"
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                    </svg>
                  }
                />
                <SocialIcon
                  href="https://dribbble.com"
                  name="Dribbble"
                  icon={
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 24C5.385 24 0 18.615 0 12S5.385 0 12 0s12 5.385 12 12-5.385 12-12 12zm10.12-10.358c-.35-.11-3.17-.953-6.384-.438 1.34 3.684 1.887 6.684 1.992 7.308 2.3-1.555 3.936-4.02 4.395-6.87zm-6.115 7.808c-.153-.9-.75-4.032-2.19-7.77l-.066.02c-5.79 2.015-7.86 6.025-8.04 6.4 1.73 1.358 3.92 2.166 6.29 2.166 1.42 0 2.77-.29 4-.814zm-11.62-2.58c.232-.4 3.045-5.055 8.332-6.765.135-.045.27-.084.405-.12-.26-.585-.54-1.167-.832-1.74C7.17 11.775 2.206 11.71 1.756 11.7l-.004.312c0 2.633.998 5.037 2.634 6.855zm-2.42-8.955c.46.008 4.683.026 9.477-1.248-1.698-3.018-3.53-5.558-3.8-5.928-2.868 1.35-5.01 3.99-5.676 7.17zM9.6 2.052c.282.38 2.145 2.914 3.822 6 3.645-1.365 5.19-3.44 5.373-3.702-1.81-1.61-4.19-2.586-6.795-2.586-.825 0-1.63.1-2.4.285zm10.335 3.483c-.218.29-1.935 2.493-5.724 4.04.24.49.47.985.68 1.486.08.18.15.36.22.53 3.41-.43 6.8.26 7.14.33-.02-2.42-.88-4.64-2.31-6.38z" />
                    </svg>
                  }
                />
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