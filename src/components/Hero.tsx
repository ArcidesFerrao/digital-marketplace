import Link from "next/link";

export const Hero = () => (
  <section id="hero" className="hero-section text-center p-10">
    <div className="my-5 flex flex-col items-center gap-5">
      <h2 className="text-5xl font-bold py-2">
        Your Skills are Digital Products
      </h2>
      <h2 className="text-5xl font-bold ">Sell in Minutes</h2>
      <p className="my-6 hero-text font-light ">
        Join Innovante Marketplace — a place for creators, developers and
        designers to sell their work with ease
      </p>
    </div>
    <div className="hero-buttons flex gap-5 justify-center py-5">
      <Link href="/products" className="btn">
        <span>Browse Products</span>
      </Link>
      <Link href="/products/new" className="btn btn-outline">
        <span>Start Selling...</span>
      </Link>
    </div>
    <div className="steps-section my-10 flex items-center w-full gap-4">
      <div className="step-card flex flex-col justify-between items-center">
        <span className="mdi--laptop-account "></span>
        <div>
          <h2 className="text-2xl">Step 1</h2>
          <h2 className="text-xl">Create an Account</h2>
        </div>
        <p className="font-extralight">
          Upload your digital product, set the price
        </p>
      </div>
      <div className="step-card flex flex-col justify-between items-center">
        <span className="line-md--link"></span>
        <div>
          <h2 className="text-2xl">Step 2</h2>
          <h2 className="text-xl">Share your link</h2>
        </div>
        <p className="font-extralight">Post it on your socials</p>
      </div>
      <div className="step-card flex flex-col justify-between items-center">
        <span className="streamline--payment-10"></span>
        <div>
          <h2 className="text-2xl">Step 3</h2>
          <h2 className="text-xl">Get paid instantly</h2>
        </div>
        <p className="font-extralight">Withdraw directly to your wallet</p>
      </div>
    </div>
  </section>
);
