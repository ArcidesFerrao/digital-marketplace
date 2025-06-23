import React from "react";

export default function TermsPage() {
  return (
    <main className="about-page flex flex-col justify-center items-center gap-6 p-10">
      <section className="terms-header flex flex-col gap-5">
        <h1 className="text-4xl font-bold">Terms and Conditions</h1>
        <div>
          <h3 className="font-bold">Effective Date:</h3>
          <p></p>
        </div>
        <p>
          Welcome to Innovante`s Digital Marketplace. These Terms and Conditions
          (“Terms”) govern your use of our website and services provided by
          Innovante (“we”, “us”, or “our”). By accessing or using our
          marketplace, you agree to be bound by these Terms. Please read them
          carefully before using our platform.
        </p>
      </section>
      <section className="terms-content flex flex-col  gap-5 p-5">
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">1. Eligibility</h2>
          <p>
            You must be at least 18 years old to use this site or have the
            consent of a legal guardian. By using Innovante`s Digital
            Marketplace, you confirm that you meet this requirement.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">2. Account Registration</h2>
          <ul>
            <li>
              You may be required to create an account to access certain
              features.
            </li>
            <li>
              You agree to provide accurate, complete, and current information.
            </li>
            <li>
              You are responsible for safeguarding your password and all
              activities under your account.
            </li>
            <li>
              You may not share your account or use another user`s account.
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">3. Products and Services</h2>
          <ul>
            <li>
              Our marketplace offers digital products, such as templates,
              eBooks, design assets, and more.
            </li>
            <li>
              All purchases are final and non-refundable, except where required
              by law or explicitly stated.
            </li>
            <li>
              You must not attempt to resell, redistribute, or claim ownership
              of products you did not create.
            </li>
            <li>
              Sellers are responsible for ensuring their content is legal,
              original, and does not infringe on copyrights.
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">4. Payments</h2>
          <ul>
            <li>
              Buyers agree to pay the price listed for any product they
              purchase.
            </li>
            <li>
              All transactions are processed securely using third-party payment
              providers (e.g., Mpesa, Stripe).
            </li>
            <li>
              Sellers may receive payouts after a standard processing period and
              are responsible for their own taxes.
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">5. User Conduct</h2>
          <p>You agree not to:</p>
          <ul>
            <li>Upload or share harmful, illegal, or infringing content.</li>
            <li>Attempt to hack, disrupt, or reverse-engineer the platform.</li>
            <li>Harass or impersonate other users.</li>
            <li>Manipulate prices or feedback.</li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">6. Intellectual Property</h2>
          <ul>
            <li>
              All content on the platform is either owned by Innovante or
              licensed by third-party creators.
            </li>
            <li>
              You may not reproduce, modify, or distribute any content without
              the appropriate rights or licenses.
            </li>
            <li>
              Sellers grant Innovante a non-exclusive license to host and
              display their digital products.
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">7. Refunds and Disputes</h2>
          <ul>
            <li>
              Due to the nature of digital products, refunds are generally not
              provided.
            </li>
            <li>
              Buyers and sellers can open disputes by contacting support at
              support@innovante.co.mz.
            </li>
            <li>
              Innovante may review cases and, at its discretion, decide whether
              to issue a refund or take corrective action.
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-bold">8. Suspension or Termination</h2>
          <p>
            We reserve the right to suspend or terminate your access to the
            platform if you violate these Terms, engage in fraud, or harm the
            community.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">9. Modifications</h2>
          <p>
            We may update these Terms at any time. Changes will be posted on
            this page with a new effective date. Continued use of the platform
            means you accept the revised Terms.
          </p>
        </div>

        <div className="flex flex-col">
          <h2 className="text-xl font-bold">
            10. Disclaimer and Limitation of Liability
          </h2>
          <ul>
            <li>
              The marketplace is provided “as-is” without warranties of any
              kind.
            </li>
            <li>
              We are not responsible for the quality, legality, or accuracy of
              products sold by users.
            </li>
            <li>
              Innovante shall not be liable for any damages resulting from use
              or inability to use the platform.
            </li>
          </ul>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">11. Governing Law</h2>
          <p>
            These Terms shall be governed by the laws of the Republic of
            Mozambique, without regard to conflict of law principles.
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-xl font-bold">12. Contact Us</h2>
          <p>For any questions regarding these Terms, please contact us at:</p>
          <p>📧 legal@innovante.co.mz</p>
        </div>
      </section>
    </main>
  );
}
