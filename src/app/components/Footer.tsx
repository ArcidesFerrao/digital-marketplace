import Link from "next/link";
import React from "react";

export const Footer = () => (
  <section className="w-full">
    <footer className="w-full flex items-center gap-10 justify-between p-8 my-10">
      <div className="m-0 flex flex-col">
        <Link href="/#services">About</Link>
        <Link href="/#projects">Contact</Link>
        <Link href="/#contact">Help</Link>
        <Link href="/#contact">Terms&Conditions</Link>
      </div>
      <div className="footer-links flex h-full text-center gap-2">
        <Link href="mailto:cidesferrao@gmail.com">
          <span className="mage--email"></span>
        </Link>

        <span className="jam--github"></span>

        <span className="mage--whatsapp"></span>
      </div>
    </footer>
    <div className="text-center">
      <p>© {new Date().getFullYear()} Web Studio. All rights reserved.</p>
    </div>
  </section>
);
