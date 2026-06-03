import React from 'react';
import { motion } from 'framer-motion';

const Privacy = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-8">
            Privacy <span className="text-[#FF1E1E]">Policy</span>
          </h1>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Introduction</h2>
              <p>
                At Trendzup Media, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, and safeguard your data when you visit our website or use our services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Information We Collect</h2>
              <p>
                We may collect personal information such as your name, email address, phone number, and company details when you contact us or request our services. We also collect non-personal information through cookies and similar technologies to improve your user experience.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. How We Use Information</h2>
              <ul className="list-disc pl-5 space-y-2">
                <li>To provide and maintain our services.</li>
                <li>To communicate with you regarding your projects or inquiries.</li>
                <li>To improve our website and development efforts.</li>
                <li>To comply with legal obligations.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Data Security</h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Third-Party Services</h2>
              <p>
                We do not sell, trade, or otherwise transfer your personally identifiable information to outside parties except for trusted third parties who assist us in operating our website or servicing you, as long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Your Rights</h2>
              <p>
                You have the right to access, correct, or delete your personal information. If you wish to exercise these rights, please contact us using the information provided below.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Contact Us</h2>
              <p>
                If you have any questions regarding this Privacy Policy, you may contact us at:
                <br />
                Email: hello@trendzupmediac.com
                <br />
                Phone: +91 9310563727
              </p>
            </section>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Privacy;
