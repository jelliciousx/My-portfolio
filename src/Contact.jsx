import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  FaPhone,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: "7480c662-8b4f-4899-8ae9-415679920746",
          name: formData.name,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await response.json();
      if (result.success) {
        setSubmitStatus("success");
        setFormData({ name: "", phone: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div
      id="contact"
      className="w-full min-h-screen px-4 sm:px-6 md:px-12 lg:px-20 py-16 md:py-24 bg-zinc-900 text-white"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            Contact Me
          </h2>
          <div className="w-20 h-1 bg-emerald-500 mx-auto rounded-full mb-4" />
          <p className="text-base md:text-lg text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind or want to discuss opportunities? I'd love to
            hear from you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-zinc-800/50 backdrop-blur-lg rounded-2xl p-6 md:p-10 border border-zinc-700/50">
              <h3 className="text-xl md:text-2xl font-bold mb-6">
                Send a Message
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-zinc-600"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all placeholder:text-zinc-600"
                    placeholder="+92 303 -------"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-zinc-400 mb-2">
                    Your Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 bg-zinc-900/80 border border-zinc-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none placeholder:text-zinc-600"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-70 disabled:cursor-not-allowed cursor-pointer shadow-lg shadow-emerald-900/20"
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        <svg
                          className="animate-spin h-4 w-4 text-white"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                          />
                        </svg>
                        Sending...
                      </span>
                    ) : (
                      "Send Message"
                    )}
                  </button>

                  {submitStatus === "success" && (
                    <span className="text-emerald-400 flex items-center gap-2 text-sm font-medium">
                      <span className="w-2 h-2 bg-emerald-400 rounded-full" />
                      Message sent successfully!
                    </span>
                  )}
                  {submitStatus === "error" && (
                    <span className="text-red-400 flex items-center gap-2 text-sm font-medium">
                      <span className="w-2 h-2 bg-red-400 rounded-full" />
                      Error sending. Please try again.
                    </span>
                  )}
                </div>
              </form>
            </div>
          </motion.div>

          {/* Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2"
          >
            <div className="bg-gradient-to-br from-emerald-900/20 to-zinc-800/50 backdrop-blur-lg rounded-2xl p-6 md:p-10 border border-emerald-500/20 h-full">
              <h3 className="text-xl md:text-2xl font-bold mb-8">
                Contact Information
              </h3>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                    <FaPhone className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Phone
                    </h4>
                    <p className="mt-1 text-zinc-400 text-sm">
                      +92 303 -------
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                    <FaEnvelope className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Email
                    </h4>
                    <p className="mt-1 text-zinc-400 text-sm">
                      shayanali21588@gmail.com
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-emerald-500/10 p-3 rounded-xl border border-emerald-500/20">
                    <FaMapMarkerAlt className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <h4 className="text-base font-semibold text-white">
                      Location
                    </h4>
                    <p className="mt-1 text-zinc-400 text-sm">
                      Islamabad, Pakistan
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-8 border-t border-zinc-700/50">
                <h4 className="text-base font-semibold mb-5">Follow Me</h4>
                <div className="flex gap-3">
                  <a
                    href="https://github.com/jelliciousx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-emerald-600 p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <FaGithub className="h-5 w-5" />
                  </a>
                  <a
                    href="https://x.com/iam_Naahthing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-emerald-600 p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <FaTwitter className="h-5 w-5" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/shayan-ali-791589325"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-zinc-800 hover:bg-emerald-600 p-3 rounded-xl transition-all duration-300 hover:scale-110"
                  >
                    <FaLinkedinIn className="h-5 w-5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
