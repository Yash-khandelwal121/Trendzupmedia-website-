import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const services = {
    'Website Designing': [
      'Static Website Designing',
      'Dynamic Website Designing',
      'Ecommerce Website Designing',
      'Wordpress Website Designing',
      'Landing Page Designing'
    ],
    'Website Development': [
      'PHP Website Development',
      'Ecommerce Development',
      'Wordpress Development',
      'Custom Web Development',
      'CRM Software Development'
    ],
    'Mobile App Development': [
      'Android App Development',
      'IOS App Development',
      'Hybrid App Development',
      'Native App Development'
    ],
    'Digital Marketing': [
      'SEO Services',
      'Google Ads',
      'Social Media Marketing',
      'Lead Generation',
      'Performance Marketing'
    ],
    'Graphic Designing': [
      'Logo Designing',
      'Business Explainer Video',
      'Social Media Post Design',
      'Brand Identity Design'
    ]
  };

  const createSlug = (text) => text.toLowerCase().replace(/ /g, '-');

  return (
    <footer className="bg-[#050505] pt-20 pb-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-1 space-y-6">
            <Link to="/" className="flex items-center">
              <img src="/logo.png" alt="Trendzup Media" className="h-10 w-auto object-contain" />
            </Link>
            <p className="text-gray-400 leading-relaxed">
              We provide result-oriented digital marketing strategies that help your brand stand out and dominate the digital landscape.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, url: 'https://www.instagram.com/trendzupmediacreations/' },
                { Icon: Linkedin, url: 'https://www.linkedin.com/company/trendzup-media/about/' }
              ].map(({ Icon, url }, idx) => (
                <a 
                  key={idx} 
                  href={url} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white hover:bg-[#FF1E1E] hover:border-[#FF1E1E] transition-all"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <h3 className="text-white font-bold text-lg mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {['Home', 'About Us', 'Services', 'Portfolio', 'Blog', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={link === 'About Us' ? '/about' : (link === 'Home' ? '/' : `/${link.toLowerCase()}`)} className="text-gray-400 hover:text-[#FF1E1E] transition-colors">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-lg mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-gray-400">
                <Mail size={18} className="text-[#FF1E1E] mt-1 flex-shrink-0" />
                <a href="mailto:hello@trendzupmediac.com" className="hover:text-white transition-colors">hello@trendzupmediac.com</a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <Phone size={18} className="text-[#FF1E1E] mt-1 flex-shrink-0" />
                <a href="tel:+919310563727" className="hover:text-white transition-colors">+91 9310563727</a>
              </li>
              <li className="flex items-start space-x-3 text-gray-400">
                <MapPin size={18} className="text-[#FF1E1E] mt-1 flex-shrink-0" />
                <span>208/9, 2nd Floor, Somdutt Chamber-2,<br/>Bhikaji Cama Place,<br/>New Delhi, Delhi 110066, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Services Multi-column */}
        <div className="border-t border-white/5 pt-12 mb-16">
          <div className="footer-services">
            {Object.entries(services).map(([category, items]) => (
              <div key={category}>
                <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6">{category}</h3>
                <ul className="space-y-3">
                  {items.map((item) => (
                    <li key={item}>
                      <Link to={`/services/${createSlug(item)}`} className="text-gray-400 text-sm">
                        {item}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            © {currentYear} Trendzup Media. All Rights Reserved.
          </p>
          <div className="flex space-x-8 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
