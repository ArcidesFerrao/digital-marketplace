import Link from "next/link";
import React from "react";

export const Footer = () => (
  <section className="w-full">
    <footer className="w-full flex  gap-10 justify-between p-8 my-10">
      <div className="m-0 flex flex-col justify-around">
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        {/* <Link href="/#contact">Help</Link> */}
        <Link href="/terms">Terms&Conditions</Link>
      </div>
      <div className="footer-links flex flex-col-reverse h-full justify-between gap-2">
        <Link href="mailto:cidesferrao@gmail.com">
          <span className="mage--email"></span>
        </Link>
        <Link href="#">
          <span className="mage--whatsapp"></span>
        </Link>
        <Link href="#">
          <span className="jam--github"></span>
        </Link>
      </div>
    </footer>
    <div className="text-center">
      <p>© {new Date().getFullYear()} Web Studio. All rights reserved.</p>
    </div>
  </section>
);
