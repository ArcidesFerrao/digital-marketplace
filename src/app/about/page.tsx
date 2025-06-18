import React from "react";

export default function AboutPage() {
  return (
    <main className="about-page flex flex-col justify-center items-center gap-6 p-10">
      <section className="header flex flex-col text-center">
        <h2>Empowering Africa&apos;s</h2>
        <h2>Digital Creators</h2>
      </section>
      <section className="flex flex-col gap-10">
        <p>
          Innovante is a digital marketplace dedicated to providing top-tier
          digital tools and support to African freelancers and creators
        </p>
        <div className="services-list flex">
          <div className="flex flex-col gap-5 max-w-3xs">
            <span>icon</span>
            <h3>Digital Tools</h3>
            <p>Templates, apps and resources to accelerate your workflow</p>
          </div>
          <div className="flex flex-col gap-5">
            <span>icon</span>
            <h3>Freelancer Support</h3>
            <p>Contracts, proposals and community tools to win more gigs</p>
          </div>
          <div className="flex flex-col gap-5">
            <span>icon</span>
            <h3>Local Payments</h3>
            <p>We support MZN, Mpesa and instant payouts</p>
          </div>
        </div>
        <div className="about-reason flex gap-8">
          <div className="flex flex-col gap-5">
            <h2>Why choose us?</h2>
            <ul className="flex flex-col gap-2">
              <li>10% fee, no subscriptions</li>
              <li>Designed for emerging digital economies</li>
              <li>Built with Next.js for top-tier performance</li>
              <li>Fast, safe and mobile-friendly</li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 max-w-sm ">
            <h2>Join our Community</h2>
            <p>
              Whether you&apos;re looking to share your creations with the world
              or discover the next digital innovation, we invite you to join
              Innovante&apos;s Digital Marketplace today!
            </p>
            <div className="flex gap-5">
              <button>Start Selling</button>
              <button>Explore our products</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2>Our Story</h2>
          <div className="flex gap-5 ">
            <span>image</span>
            <p className="max-w-sm">
              Born with a simple idea: to change how people buy and sell digital
              things like music, art or designs. We saw people needed a safe,
              clear and easy-to-use platform for both creators and buyers. Since
              day one, we&apos;ve focused on two things: building a strong
              community and constantly improving our platform to keep up with
              the digital world&apos;s changes.
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2>Our mission</h2>
          <div className="flex">
            <div>
              <h3>For Creators</h3>
              <p>
                Give you a fair and easy platform to show your work and earn
                money from it
              </p>
            </div>
            <div>
              <h3>For Buyers</h3>
              <p>
                Offer you a trusted place to find many different high-quality
                digital products
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
