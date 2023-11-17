import ContactForm from "../components/ContactForm/contactform";

export default function ContactSection() {
  return (
    <div id="contact-section" className="mt-32">
      <h2 className="mb-5 text-center text-3xl">CONTACT</h2>
      <div className="content flex justify-center">
        <ContactForm />
      </div>
    </div>
  );
}
