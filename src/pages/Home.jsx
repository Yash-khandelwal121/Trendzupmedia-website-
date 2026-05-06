import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Hero from '../components/home/Hero';
import ServicesHighlight from '../components/home/ServicesHighlight';
import WhyChooseUs from '../components/home/WhyChooseUs';
import VideoModal from '../components/ui/VideoModal';
import { motion } from 'framer-motion';
import { Quote, Send, CheckCircle2 } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    { name: "John Smith", role: "CEO, TechFlow", content: "Trendzup Media transformed our online presence completely. Our leads increased by 150% within the first 3 months!" },
    { name: "Sarah Williams", role: "Marketing Director, Bloom", content: "The level of professionalism and creativity they bring to the table is unmatched. Highly recommended for any growing brand." },
    { name: "Mike Johnson", role: "Founder, GreenSpace", content: "From web design to SEO, they handled everything perfectly. A true partner in our success journey." }
  ];

  return (
    <section className="py-24 overflow-hidden" style={{ background: '#0A0A0A' }}>
      <div className="container mx-auto px-6">
        <h2 className="text-3xl lg:text-5xl font-bold text-center text-white mb-16">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <div key={idx} className="p-8 rounded-2xl border relative group transition-all card-hover" style={{ background: 'rgba(0,0,0,0.6)', borderColor: '#222' }}>
              <Quote className="absolute top-4 right-4 opacity-20 group-hover:opacity-100 transition-opacity" style={{ color: '#FF1E1E' }} size={40} />
              <div className="flex mb-4" style={{ color: '#F5B400' }}>
                {"★★★★★".split("").map((s, i) => <span key={i}>{s}</span>)}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{t.content}"</p>
              <div>
                <p className="text-white font-bold">{t.name}</p>
                <p className="text-sm" style={{ color: '#FF1E1E' }}>{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ClientLogos = () => {
  return (
    <section className="py-12 bg-black border-y border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-center items-center gap-12 lg:gap-24 opacity-30 grayscale hover:grayscale-0 hover:opacity-100 transition-all">
          {['Google', 'Microsoft', 'Amazon', 'Adobe', 'Shopify'].map((brand) => (
            <span key={brand} className="text-2xl font-bold text-white tracking-tighter">{brand}</span>
          ))}
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  const [isVideoOpen, setIsVideoOpen] = useState(false);
  const [formStatus, setFormStatus] = useState(null);

  const handleConsultationClick = () => {
    document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => {
      setFormStatus('success');
      e.target.reset();
      setTimeout(() => setFormStatus(null), 5000);
    }, 1500);
  };

  return (
    <div className="animate-fadeIn">
      <Hero 
        onPlayVideo={() => setIsVideoOpen(true)} 
        onConsultation={handleConsultationClick}
      />
      
      <ClientLogos />
      <ServicesHighlight />
      <WhyChooseUs />
      <Testimonials />
      
      {/* Contact Section */}
      <section id="contact-form" className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-6xl font-bold text-white mb-8">Ready for a Free <span style={{ color: '#FF1E1E' }}>Consultation?</span></h2>
              <p className="text-gray-400 text-lg mb-10">Our experts are ready to audit your current digital presence and provide a custom roadmap for your growth.</p>
              <div className="space-y-4">
                {['30-Minute Strategy Call', 'Custom Growth Roadmap', 'Competitor Analysis', 'SEO Audit Report'].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 style={{ color: '#FF1E1E' }} size={24} />
                    <span className="text-white font-medium text-lg">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-secondary-light p-8 lg:p-12 rounded-[3rem] border border-white/5 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full -mr-16 -mt-16 blur-2xl"></div>
              
              {formStatus === 'success' ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-12"
                >
                  <div className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 size={48} />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                  <p className="text-gray-400">Our team will get back to you within 24 hours.</p>
                </motion.div>
              ) : (
                <form onSubmit={handleFormSubmit} className="space-y-6 relative z-10">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 ml-2">Full Name</label>
                      <input required type="text" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-primary outline-none transition-colors" />
                    </div>
                    <div className="space-y-2">
                      <label className="text-sm font-bold text-gray-400 ml-2">Email Address</label>
                      <input required type="email" placeholder="john@example.com" className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-primary outline-none transition-colors" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-2">Phone Number</label>
                    <input required type="tel" placeholder="+91 00000 00000" className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-primary outline-none transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-gray-400 ml-2">Message</label>
                    <textarea required rows="4" placeholder="Tell us about your goals..." className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-primary outline-none transition-colors resize-none"></textarea>
                  </div>
                  <button 
                    disabled={formStatus === 'loading'}
                    className="w-full text-white py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3 disabled:opacity-50"
                    style={{ background: '#FF1E1E', boxShadow: '0 4px 15px rgba(255,30,30,0.3)' }}
                    onMouseEnter={e => e.currentTarget.style.background = '#F5B400'}
                    onMouseLeave={e => e.currentTarget.style.background = '#FF1E1E'}
                  >
                    {formStatus === 'loading' ? (
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    ) : (
                      <>Send Message <Send size={20} /></>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Banner */}
      <section className="py-24 bg-black">
        <div className="container mx-auto px-6">
          <div className="p-12 lg:p-20 rounded-[3rem] text-center relative overflow-hidden group border" style={{ background: 'linear-gradient(135deg, #FF1E1E 0%, #CC0000 50%, #0B1F3A 100%)', borderColor: 'rgba(255,30,30,0.3)' }}>
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32 blur-3xl group-hover:scale-150 transition-transform duration-700"></div>
            <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full -ml-24 -mb-24 blur-3xl" style={{ background: 'rgba(245,180,0,0.2)' }}></div>
            <h2 className="text-3xl lg:text-6xl font-extrabold text-white mb-8 relative z-10">
              Ready to Scale Your Brand?
            </h2>
            <p className="text-white/90 text-xl mb-10 max-w-2xl mx-auto relative z-10">
              Join 500+ successful companies that have grown their business with our digital solutions.
            </p>
            <Link to="/contact" className="px-10 py-5 rounded-full font-bold text-xl transition-all shadow-xl hover:scale-105 relative z-10 inline-block" style={{ background: '#F5B400', color: '#000' }}>
              Get Started Now
            </Link>
          </div>
        </div>
      </section>

      <VideoModal 
        isOpen={isVideoOpen} 
        onClose={() => setIsVideoOpen(false)} 
        videoId="dQw4w9WgXcQ"
      />
    </div>
  );
};

export default Home;
