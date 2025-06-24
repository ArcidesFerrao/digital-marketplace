import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function AboutPage() {
  return (
    <main className="about-page flex flex-col justify-center items-center gap-6 p-10">
      <section className="header flex flex-col text-center">
        <h2 className="text-4xl font-bold">Empowering Africa&apos;s</h2>
        <h2 className="text-4xl font-bold">Digital Creators</h2>
      </section>
      <section className="flex flex-col items-center gap-10">
        <p className="max-w-md text-center text-xl">
          Innovante is a digital marketplace dedicated to providing top-tier
          digital tools and support to African freelancers and creators
        </p>
        <div className="services-list flex gap-5">
          <div className="service-item flex flex-col items-center gap-5 max-w-3xs ">
            <span className="carbon--ibm-cloud-vpc-file-storage"></span>
            <h3 className="text-xl font-bold">Digital Tools</h3>
            <div>
              <p className="text-center">
                Templates, apps and resources to accelerate
              </p>
              <p className="text-center">your workflow</p>
            </div>
          </div>
          <div className="service-item flex flex-col items-center gap-5">
            <span className="mdi--handshake"></span>
            <h3 className="text-xl font-bold">Freelancer Support</h3>
            <div>
              <p className="text-center">
                Contracts, proposals and community tools to
              </p>
              <p className="text-center">win more gigs</p>
            </div>
          </div>
          <div className="service-item flex flex-col items-center gap-5">
            <span className="streamline-cyber--wallet-cash-1"></span>
            <h3 className="text-xl font-bold">Local Payments</h3>
            <div>
              <p className="text-center">
                We support MZN, Mpesa and our payouts
              </p>
              <p className="text-center">are instant </p>
            </div>
          </div>
        </div>
        <div className="about-reason flex gap-8">
          <div className="flex flex-col gap-5">
            <h2 className="text-2xl font-bold">Why choose us?</h2>
            <ul className="flex flex-col gap-2">
              <li className="flex items-center gap-2">
                <span className="ph--check-fat"></span>
                <p>10% fee, no subscriptions</p>
              </li>
              <li className="flex items-center gap-2">
                <span className="ph--check-fat"></span>
                <p>Designed for emerging digital economies</p>
              </li>
              <li className="flex items-center gap-2">
                <span className="ph--check-fat"></span>
                <p>Built with Next.js for top-tier performance</p>
              </li>
              <li className="flex items-center gap-2">
                <span className="ph--check-fat"></span>
                <p>Fast, safe and mobile-friendly</p>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-5 max-w-sm ">
            <h2 className="text-2xl font-bold">Join our Community</h2>
            <p>
              Whether you&apos;re looking to share your creations with the world
              or discover the next digital innovation, we invite you to join
              Innovante&apos;s Digital Marketplace today!
            </p>
            <div className="flex gap-5">
              <Link href="/product/new">Start Selling</Link>
              <Link href="/products">Explore our products</Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Our Story</h2>
          <div className="flex gap-10 ">
            <Image
              src="/assets/profile.png"
              alt="arcides-ferrao"
              width={240}
              height={240}
              className="image-profile border-8 rounded-xl border-white/90 hover:rotate-3"
            />
            <div className="flex flex-col justify-around">
              <p className="max-w-sm">
                Born with a simple idea: to change how people buy and sell
                digital things like music, art or designs. We saw people needed
                a safe, clear and easy-to-use platform for both creators and
                buyers.
              </p>
              <p>
                Since day one, we&apos;ve focused on two things: building a
                strong community and constantly improving our platform to keep
                up with the digital world&apos;s changes.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center gap-5">
          <h2 className="text-2xl font-bold">Our mission</h2>
          <div className="flex gap-10">
            <div className="about-mission flex flex-col items-center gap-5">
              <h3 className="text-xl font-bold">For Creators</h3>
              <div className="text-center">
                <p>Give you a fair and easy platform</p>
                <p>to show your work and earn</p>
                <p>money from it</p>
              </div>
            </div>
            <div className="about-mission flex flex-col items-center  gap-5">
              <h3 className="text-xl font-bold">For Buyers</h3>
              <div className="text-center">
                <p>Offer you a trusted place to</p>
                <p>find many different high-quality</p>
                <p>digital products</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
