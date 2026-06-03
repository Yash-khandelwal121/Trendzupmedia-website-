import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  return (
    <div className="pt-32 pb-20 animate-fadeIn bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-bold uppercase tracking-widest text-sm mb-4 block" style={{ color: '#F5B400' }}>Contact Us</span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Let's Work Together</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Have a project in mind? Let's discuss how we can build your software systems.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <div className="space-y-8">
            <a href="mailto:hello@trendzupmediac.com" className="block p-8 rounded-[2rem] border card-hover transition-all hover:-translate-y-2 group" style={{ background: '#111', borderColor: '#222', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <Mail className="w-10 h-10 mb-4 transition-transform group-hover:scale-110" style={{ color: '#FF1E1E' }} />
              <h3 className="text-white font-bold text-lg mb-2">Email Us</h3>
              <p className="text-gray-400">hello@trendzupmediac.com</p>
            </a>
            <a href="tel:+919310563727" className="block p-8 rounded-[2rem] border card-hover transition-all hover:-translate-y-2 group" style={{ background: '#111', borderColor: '#222', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <Phone className="w-10 h-10 mb-4 transition-transform group-hover:scale-110" style={{ color: '#FF1E1E' }} />
              <h3 className="text-white font-bold text-lg mb-2">Call Us</h3>
              <p className="text-gray-400">+91 9310563727</p>
            </a>
            <a href="https://www.google.com/maps/search/?api=1&query=208/9+Somdutt+Chamber+2+Bhikaji+Cama+Place+New+Delhi" target="_blank" rel="noopener noreferrer" className="block p-8 rounded-[2rem] border card-hover transition-all hover:-translate-y-2 group" style={{ background: '#111', borderColor: '#222', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
              <MapPin className="w-10 h-10 mb-4 transition-transform group-hover:scale-110" style={{ color: '#FF1E1E' }} />
              <h3 className="text-white font-bold text-lg mb-2">Visit Us</h3>
              <p className="text-gray-400 whitespace-pre-line leading-relaxed">208/9, 2nd Floor, Somdutt Chamber-2,{"\n"}Bhikaji Cama Place,{"\n"}New Delhi, Delhi 110066, India</p>
              <span className="bg-[#FF1E1E] group-hover:bg-[#cc0000] text-white px-5 py-2.5 rounded-xl inline-block mt-6 transition-colors font-bold shadow-lg">
                Get Directions
              </span>
            </a>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2 p-8 lg:p-12 rounded-[3rem] border relative overflow-hidden" style={{ background: '#111', borderColor: '#222', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
            <form action="https://formsubmit.co/hello@trendzupmediac.com" method="POST" className="space-y-6">
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_next" value="http://localhost:5173/thank-you" />
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-2">Full Name</label>
                  <input required type="text" name="name" placeholder="John Doe" className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-[#FF1E1E] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-2">Email Address</label>
                  <input required type="email" name="email" placeholder="john@example.com" className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-[#FF1E1E] outline-none transition-colors" />
                </div>
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-2">Phone Number</label>
                  <input required type="tel" name="phone" placeholder="+91 00000 00000" className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-[#FF1E1E] outline-none transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-gray-400 ml-2">Subject</label>
                  <input required type="text" name="subject" placeholder="Project Inquiry" className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-[#FF1E1E] outline-none transition-colors" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-bold text-gray-400 ml-2">Message</label>
                <textarea required name="message" rows="5" placeholder="Tell us about your project..." className="w-full bg-black/40 border border-white/10 rounded-2xl py-4 px-6 text-white focus:border-[#FF1E1E] outline-none transition-colors resize-none"></textarea>
              </div>
              <button 
                type="submit"
                className="w-full text-white py-5 rounded-2xl font-bold text-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-3"
                style={{ background: '#FF1E1E', boxShadow: '0 4px 15px rgba(255,30,30,0.3)' }}
                onMouseEnter={e => e.currentTarget.style.background = '#CC0000'}
                onMouseLeave={e => e.currentTarget.style.background = '#FF1E1E'}
              >
                Send Message <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
