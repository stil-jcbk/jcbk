import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { config } from "./email";

export default function ContactForm() {
  const form = useRef<HTMLFormElement | null>(null);
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form) {
      emailjs.sendForm(
        config.service,
        config.template,
        form.current as HTMLFormElement,
        config.public
      );
      e.currentTarget.reset();
    }
  };

  return (
    <form
      ref={form}
      onSubmit={handleSubmit}
      className="contact-form flex w-9/12 flex-col items-center justify-center"
    >
      <a
        className="mt-2 mb-8 flex items-center gap-4 text-xl font-extrabold"
        href="mailto:jcbkdev@gmail.com"
      >
        <MailIconSVG /> jcbkdev@gmail.com
      </a>
      <div className="flex max-w-xs flex-col gap-4 md:max-w-md">
        <input
          className="border-b-2 border-black border-opacity-30 bg-transparent focus:border-opacity-100 focus-visible:outline-none"
          type="text"
          placeholder="e-mail"
          required
          name="user_email"
        />
        <textarea
          className="mb-4 border-b-2 border-black border-opacity-30 bg-transparent focus:border-opacity-100 focus-visible:outline-none"
          cols={40}
          rows={6}
          placeholder="message"
          name="user_msg"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-black p-2 text-lg font-extrabold text-white"
      >
        SEND
      </button>
    </form>
  );
}

const MailIconSVG = () => {
  return (
    <svg className="h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z"></path>
    </svg>
  );
};
