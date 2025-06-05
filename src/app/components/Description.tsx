import React from "react";

export const Description = () => {
  return (
    <section className="flex flex-col items-center px-5 py-10 ">
      <div className="reason ">
        <h2 className="text-2xl font-bold">
          Let us help you sell your products...
        </h2>
        <ul className="text-center py-5">
          <li>No subscriptions, just 10% per sale</li>
          <li>Instant payouts</li>
          <li>Local currency support (MZN/M-Pesa)</li>
        </ul>
      </div>
      <div className="call-action flex flex-col items-center gap-5">
        <h3 className="text-xl">
          &quot;Ready to sell your first product&quot;
        </h3>
        <button>Join Free</button>
      </div>
    </section>
  );
};
