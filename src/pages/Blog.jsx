import React from 'react';
import { blogData } from '../data/siteData';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';
import { Link } from 'react-router-dom';

const Blog = () => {
  return (
    <div className="pt-32 pb-20 animate-fadeIn min-h-screen">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="font-bold uppercase tracking-widest text-sm mb-4 block" style={{ color: '#FF1E1E' }}>Our Blog</span>
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">Insights & Articles</h1>
          <p className="text-gray-400 max-w-2xl mx-auto">Stay updated with the latest trends and best practices in the digital marketing industry.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {blogData.map((blog) => (
              <div key={blog.id} className="group bg-secondary-light rounded-[2rem] overflow-hidden border border-white/5 hover:border-[#FF1E1E]/30 transition-all">
                <div className="aspect-[21/9] overflow-hidden">
                  <img src={blog.image} alt={blog.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                </div>
                <div className="p-8">
                  <div className="flex items-center gap-6 mb-6 text-sm text-gray-400">
                    <span className="px-4 py-1 rounded-full font-bold" style={{ background: 'rgba(255,30,30,0.1)', color: '#FF1E1E' }}>{blog.category}</span>
                    <span className="flex items-center gap-2"><Calendar size={16} /> {blog.date}</span>
                    <span className="flex items-center gap-2"><User size={16} /> By Admin</span>
                  </div>
                  <h2 
                    className="text-2xl lg:text-3xl font-bold text-white mb-6 transition-colors leading-tight cursor-pointer"
                    onMouseEnter={e => e.currentTarget.style.color = '#FF1E1E'}
                    onMouseLeave={e => e.currentTarget.style.color = '#fff'}
                  >
                    {blog.title}
                  </h2>
                  <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                    {blog.excerpt || "Discover the latest strategies and insights in digital marketing..."}
                  </p>
                  <Link to={`/blog/${blog.id}`} className="text-white font-bold flex items-center gap-2 group-hover:gap-4 transition-all">
                    Read More <ArrowRight style={{ color: '#FF1E1E' }} />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            <div className="bg-[#111] border border-[#222] p-6 rounded-2xl">
              <h3 className="text-white font-bold text-lg mb-4">Search</h3>
              <div className="relative">
                <input 
                  type="text" 
                  placeholder="Type to search..." 
                  className="w-full bg-black/40 border border-white/10 rounded-xl py-4 px-6 text-white outline-none"
                  style={{ transition: 'border-color 0.3s' }}
                  onFocus={e => e.currentTarget.style.borderColor = '#FF1E1E'}
                  onBlur={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
                />
                <Search className="absolute right-6 top-1/2 -translate-y-1/2 text-gray-500" size={20} />
              </div>
            </div>

            <div className="bg-[#111] border border-[#222] p-6 rounded-2xl">
              <h3 className="text-white font-bold text-lg mb-4">Categories</h3>
              <ul className="space-y-4">
                {['Digital Marketing', 'Web Design', 'SEO', 'Mobile Apps', 'Case Studies'].map((cat) => (
                  <li key={cat}>
                    <a 
                      href="#" 
                      className="flex justify-between items-center text-gray-400 transition-colors"
                      onMouseEnter={e => e.currentTarget.style.color = '#FF1E1E'}
                      onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
                    >
                      {cat} <span>(12)</span>
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-8 rounded-2xl text-white" style={{ background: 'linear-gradient(135deg, #FF1E1E, #CC0000)' }}>
              <h3 className="text-2xl font-bold mb-4">Subscribe to Newsletter</h3>
              <p className="text-white/80 text-sm mb-6">Get the latest updates delivered to your inbox.</p>
              <input type="email" placeholder="Your email..." className="w-full bg-white/20 rounded-xl py-3 px-4 text-white placeholder:text-white/60 outline-none mb-4" />
              <button className="w-full py-3 rounded-xl font-bold" style={{ background: '#F5B400', color: '#000' }}>Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
