import Image from "next/image";
import React from "react";

export const Description = () => {
  return (
    <section className="description-section flex flex-row-reverse items-center justify-around px-10 py-10 w-full">
      <div className="reason ">
        <h2 className="text-2xl font-bold">Let us help you</h2>
        <h2 className="text-2xl font-bold">sell your products...</h2>
        <ul className=" py-5">
          <li className="flex items-center gap-4 py-2">
            <span className="wpf--renew-subscription"></span>No subscriptions,
            just 10% per sale
          </li>
          <li className="flex items-center gap-4 py-2">
            <span className="streamline-ultimate--cashless-payment-online-statement-monitor"></span>
            Instant payouts
          </li>
          <li className="flex items-center gap-4 py-2">
            <span className="lets-icons--wallet"></span>Local currency support
            (MZN/M-Pesa)
          </li>
        </ul>
      </div>
      <div className="call-action flex flex-col  gap-5">
        <div className="flex gap-3">
          <Image
            alt="Innovante's MarketPlace"
            src="/assets/logo-accent.png"
            width={50}
            height={5}
          />
          <div>
            <h2 className="text-xl font-bold">
              Innovante&apos;s Digital Marketplace
            </h2>
            <p className="text-sm">
              Your hub for digital tools and freelance success
            </p>
          </div>
        </div>
        <h3 className="text-2xl font-light">
          &quot;Ready to sell your first product?&quot;
        </h3>
        <button className="w-fit">Join Free</button>
      </div>
    </section>
  );
};
