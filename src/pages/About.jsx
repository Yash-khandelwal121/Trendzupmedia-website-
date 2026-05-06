import React from 'react';
import { Target, Eye, Users, Award, Briefcase, Zap } from 'lucide-react';

const About = () => {
  const stats = [
    { label: "Projects Done", value: "250+", icon: <Briefcase size={28} /> },
    { label: "Happy Clients", value: "150+", icon: <Users size={28} /> },
    { label: "Expert Team", value: "25+", icon: <Award size={28} /> },
    { label: "Success Rate", value: "98%", icon: <Zap size={28} /> },
  ];

  const team = [
    { name: "Rahul Sharma", role: "CEO & Founder", image: "https://i.pravatar.cc/150?u=rahul" },
    { name: "Priya Gupta", role: "Digital Marketing Head", image: "https://i.pravatar.cc/150?u=priya" },
    { name: "Amit Verma", role: "Lead Web Developer", image: "https://i.pravatar.cc/150?u=amit" },
    { name: "Sneha Kapur", role: "UI/UX Designer", image: "https://i.pravatar.cc/150?u=sneha" },
  ];

  return (
    <div className="pt-32 pb-20 animate-fadeIn bg-black">
      {/* Intro Section */}
      <section className="container mx-auto px-6 mb-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="animate-premium-in">
            <span className="font-bold uppercase tracking-widest text-sm mb-4 block" style={{ color: '#F5B400' }}>About Us</span>
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-8 leading-tight">
              Empowering Brands with <span style={{ color: '#FF1E1E' }}>Digital Excellence</span>
            </h1>
            <p className="text-[#B0B0B0] text-lg leading-relaxed mb-6">
              Trendzup Media is a premier digital marketing agency that believes in the power of innovation and strategy. Founded with a vision to revolutionize how brands connect with their audiences, we have grown into a multi-disciplinary team of creative thinkers, technical experts, and strategic planners.
            </p>
            <p className="text-[#B0B0B0] text-lg leading-relaxed">
              Our journey began with a simple goal: to deliver measurable results that matter. Today, we help businesses of all sizes navigate the complexities of the digital world with confidence and clarity.
            </p>
          </div>
          <div className="relative group">
            <div className="rounded-3xl overflow-hidden shadow-2xl border border-[#222] video-glow">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80" alt="Team" className="w-full h-auto transition-transform duration-700 group-hover:scale-105" />
            </div>
            <div className="absolute -bottom-10 -left-10 p-8 rounded-2xl hidden lg:block animate-pulse-glow" style={{ background: '#FF1E1E' }}>
              <p className="text-white text-5xl font-black italic">10+</p>
              <p className="text-white font-bold uppercase tracking-wider text-xs">Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 mb-24 border-y border-[#222]" style={{ background: '#0A0A0A' }}>
        <div className="container mx-auto px-6 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center group card-hover p-6 rounded-3xl" style={{ background: '#111', border: '1px solid #222' }}>
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-all duration-300 group-hover:scale-110" 
                style={{ background: 'rgba(245,180,0,0.1)', color: '#F5B400' }}
                onMouseEnter={e => { e.currentTarget.style.background = '#FF1E1E'; e.currentTarget.style.color = '#fff'; }}
                onMouseLeave={e => { e.currentTarget.style.background = 'rgba(245,180,0,0.1)'; e.currentTarget.style.color = '#F5B400'; }}
              >
                {stat.icon}
              </div>
              <h3 className="text-4xl font-bold text-white mb-2">{stat.value}</h3>
              <p className="text-[#B0B0B0] font-medium uppercase tracking-wider text-xs">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="container mx-auto px-6 mb-24 grid md:grid-cols-2 gap-8">
        <div className="bg-[#111] border border-[#222] p-12 rounded-[2rem] transition-all card-hover">
          <Target className="w-12 h-12 mb-6" style={{ color: '#F5B400' }} />
          <h2 className="text-3xl font-bold text-white mb-6">Our <span style={{ color: '#FF1E1E' }}>Mission</span></h2>
          <p className="text-[#B0B0B0] leading-relaxed text-lg">
            To provide innovative and effective integrated brand marketing and public relations solutions which help our clients to grow their businesses and realize their marketing goals.
          </p>
        </div>
        <div className="bg-[#111] border border-[#222] p-12 rounded-[2rem] transition-all card-hover">
          <Eye className="w-12 h-12 mb-6" style={{ color: '#F5B400' }} />
          <h2 className="text-3xl font-bold text-white mb-6">Our <span style={{ color: '#FF1E1E' }}>Vision</span></h2>
          <p className="text-[#B0B0B0] leading-relaxed text-lg">
            To be the most reliable and creative digital marketing agency globally, setting new standards in digital excellence and client satisfaction.
          </p>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4">Meet Our <span style={{ color: '#FF1E1E' }}>Experts</span></h2>
          <p className="text-[#B0B0B0] max-w-2xl mx-auto">The brilliant minds behind our successful campaigns and innovative solutions.</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="group text-center">
              <div className="relative overflow-hidden rounded-3xl mb-6 aspect-square border border-[#222]">
                <img src={member.image} alt={member.name} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-8"
                  style={{ background: 'linear-gradient(to top, rgba(255,30,30,0.8), transparent)' }}
                >
                </div>
              </div>
              <h3 className="text-xl font-bold text-white">{member.name}</h3>
              <p className="text-sm font-medium" style={{ color: '#F5B400' }}>{member.role}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default About;
