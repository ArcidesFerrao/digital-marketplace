import { ContactForm } from "@/components/ContactForm";
import React from "react";

export default function ContactPage() {
  return (
    <main className="flex flex-col justify-center items-center gap-6 p-10">
      <ContactForm />
      {/* <section className="footer-contact"></section> */}
    </main>
  );
}
