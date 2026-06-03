import React from 'react';
import { motion } from 'framer-motion';

const Terms = () => {
  return (
    <div className="bg-black min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h1 className="text-4xl lg:text-5xl font-extrabold text-white mb-8">
            Terms of <span className="text-[#FF1E1E]">Service</span>
          </h1>
          
          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-4">1. Acceptance of Terms</h2>
              <p>
                By accessing and using the Trendzup Media website and services, you agree to comply with and be bound by these Terms of Service. If you do not agree with any part of these terms, you must not use our website or services.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">2. Services Provided</h2>
              <p>
                Trendzup Media provides IT Development, web development, app development, and graphic design services. We reserve the right to modify or discontinue any service at any time without prior notice.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">3. User Obligations</h2>
              <p>
                As a user, you agree to provide accurate and complete information when contacting us or using our services. You are responsible for maintaining the confidentiality of any account information and for all activities that occur under your account.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">4. Intellectual Property</h2>
              <p>
                All content on this website, including text, graphics, logos, and software, is the property of Trendzup Media or its content suppliers and is protected by intellectual property laws. You may not use any content without our express written permission.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">5. Limitation of Liability</h2>
              <p>
                Trendzup Media shall not be liable for any direct, indirect, incidental, or consequential damages resulting from the use or inability to use our services or website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">6. Governing Law</h2>
              <p>
                These terms shall be governed by and construed in accordance with the laws of India. Any disputes arising out of or related to these terms shall be subject to the exclusive jurisdiction of the courts in New Delhi.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">7. Changes to Terms</h2>
              <p>
                We reserve the right to update or modify these Terms of Service at any time. Your continued use of the website or services after any changes constitutes your acceptance of the new terms.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-4">8. Contact Information</h2>
              <p>
                For any questions regarding these Terms of Service, please contact us at:
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

export default Terms;
