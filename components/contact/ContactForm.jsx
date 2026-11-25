"use client";

import { useState } from "react";
import { ArrowRight, Check } from "lucide-react";

const FIELDS = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "email", label: "Email", type: "email", required: true },
  { name: "company", label: "Company", type: "text", required: false },
  { name: "phone", label: "Phone", type: "tel", required: false },
];

const inputClasses =
  "w-full origin-left border-b border-white/20 bg-transparent py-3 text-[15px] text-text-light placeholder:text-text-muted/60 transition-all duration-300 focus:border-gold focus:outline-none focus:scale-[1.01]";

export default function ContactForm() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    need: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setValues((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 border border-gold/30 bg-white/[0.03] px-8 py-16 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full border border-gold text-gold">
          <Check size={20} />
        </div>
        <h3 className="font-display text-xl font-semibold text-text-light">
          Message received.
        </h3>
        <p className="max-w-[38ch] text-[14px] text-text-muted">
          Thanks, {values.name || "there"} — we&rsquo;ll be in touch shortly to
          talk through your project.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-8 border border-white/10 bg-white/[0.02] p-8 md:p-10"
    >
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2">
        {FIELDS.map((field) => (
          <label key={field.name} className="flex flex-col gap-2">
            <span className="text-[12px] tracking-[0.08em] uppercase text-text-muted">
              {field.label}
              {field.required && <span className="text-gold"> *</span>}
            </span>
            <input
              type={field.type}
              name={field.name}
              required={field.required}
              value={values[field.name]}
              onChange={handleChange}
              className={inputClasses}
            />
          </label>
        ))}
      </div>

      <label className="flex flex-col gap-2">
        <span className="text-[12px] tracking-[0.08em] uppercase text-text-muted">
          What do you need?
        </span>
        <select
          name="need"
          value={values.need}
          onChange={handleChange}
          className={`${inputClasses} appearance-none`}
        >
          <option value="" className="bg-ink-soft">
            Select a service
          </option>
          <option value="website" className="bg-ink-soft">
            Website Development
          </option>
          <option value="app" className="bg-ink-soft">
            Mobile App Development
          </option>
          <option value="ecommerce" className="bg-ink-soft">
            eCommerce Solutions
          </option>
          <option value="branding" className="bg-ink-soft">
            Branding &amp; Design
          </option>
          <option value="other" className="bg-ink-soft">
            Something else
          </option>
        </select>
      </label>

      <label className="flex flex-col gap-2">
        <span className="text-[12px] tracking-[0.08em] uppercase text-text-muted">
          Tell us about your project
        </span>
        <textarea
          name="message"
          rows={4}
          value={values.message}
          onChange={handleChange}
          className={`${inputClasses} resize-none`}
        />
      </label>

      <button
        type="submit"
        className="group inline-flex w-fit items-center gap-2.5 bg-gold px-7 py-3.5 text-[13px] font-medium tracking-[0.08em] uppercase text-ink transition-colors duration-300 hover:bg-gold-soft"
      >
        Start a Conversation
        <ArrowRight
          size={15}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </form>
  );
}
