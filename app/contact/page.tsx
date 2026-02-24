"use client";

import { useState } from "react";
import { Send, CheckCircle, AlertCircle } from "lucide-react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error";
    message: string;
  } | null>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    // Clear status when user starts typing again
    if (status) setStatus(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        body: JSON.stringify(form),
        headers: { "Content-Type": "application/json" },
      });

      const data = await res.json();

      if (res.ok) {
        setStatus({ type: "success", message: "Message sent successfully!" });
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus({
          type: "error",
          message: data.error || "Something went wrong.",
        });
      }
    } catch {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  const inputClasses = `
    w-full px-0 py-3 bg-transparent border-0 border-b-2 border-gray-200 dark:border-gray-700
    focus:border-blue-500 dark:focus:border-blue-400 focus:ring-0 text-gray-900 dark:text-gray-100
    placeholder:text-gray-400 dark:placeholder:text-gray-500 transition-colors duration-200 outline-none
  `;

  return (
    <div className="max-w-xl mx-auto px-4 py-16 sm:py-8">
      {/* Decorative element */}
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-950/20 -z-10" />

      <div className="space-y-8">
        {/* Header */}
        <div className="space-y-3">
          <h1 className="text-4xl sm:text-5xl font-light tracking-tight text-gray-900 dark:text-gray-100">
            Get in touch
          </h1>
          <div className="space-y-4">
            <p className="text-lg text-gray-600 dark:text-gray-300 font-light leading-relaxed">
              Whether you have a{" "}
              <strong className="font-bold text-gray-900 dark:text-gray-100 relative">
                development project
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </strong>{" "}
              in mind, a{" "}
              <strong className="font-bold text-gray-900 dark:text-gray-100 relative">
                partnership opportunity
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </strong>
              , or just want to say{" "}
              <strong className="font-bold text-gray-900 dark:text-gray-100 relative italic">
                hello
                <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-gray-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
              </strong>{" "}
              —{" "}
              <span className="font-semibold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
                I'd love to hear from you.
              </span>
            </p>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-12">
          <div className="space-y-8">
            {/* Name */}
            <div className="space-y-2">
              <label
                htmlFor="name"
                className="text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                Name *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="John Doe"
                className={inputClasses}
                required
                disabled={loading}
              />
            </div>

            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                Email *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="john@example.com"
                className={inputClasses}
                required
                disabled={loading}
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label
                htmlFor="message"
                className="text-sm font-medium text-gray-500 dark:text-gray-400"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="Your message here..."
                className={`${inputClasses} resize-none`}
                required
                disabled={loading}
              />
            </div>
          </div>

          {/* Submit button */}
          <div className="space-y-4">
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full sm:w-auto px-8 py-4 bg-gray-900 dark:bg-gray-100 text-white dark:text-gray-900 rounded-full text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-500 dark:focus:ring-gray-400 focus:ring-offset-2 dark:focus:ring-offset-gray-900 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
            >
              <span
                className={`inline-flex items-center gap-2 transition-transform duration-300 ${loading ? "translate-y-10" : ""}`}
              >
                Send Message
                {/* <Send
                  size={16}
                  className="group-hover:translate-x-1 transition-transform"
                /> */}
              </span>
              <span
                className={`absolute inset-0 flex items-center justify-center transition-transform duration-300 ${loading ? "translate-y-0" : "-translate-y-10"}`}
              >
                Sending...
              </span>
            </button>

            {/* Status message */}
            {status && (
              <div
                className={`flex items-center gap-2 text-sm animate-in fade-in slide-in-from-top-2 duration-300 ${
                  status.type === "success"
                    ? "text-green-600 dark:text-green-400"
                    : "text-red-600 dark:text-red-400"
                }`}
              >
                {status.type === "success" ? (
                  <CheckCircle size={16} className="shrink-0" />
                ) : (
                  <AlertCircle size={16} className="shrink-0" />
                )}
                <span>{status.message}</span>
              </div>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}
