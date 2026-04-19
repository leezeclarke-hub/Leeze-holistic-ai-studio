/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect } from 'react';
import ChatAssistant from './components/ChatAssistant';
import { Leaf, ArrowRight, Menu, Globe, Phone, Info } from 'lucide-react';

export default function App() {
  useEffect(() => {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100', 'translate-y-0');
                entry.target.classList.remove('opacity-0', 'translate-y-12');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal').forEach((el) => {
        el.classList.add('opacity-0', 'translate-y-12', 'transition-all', 'duration-[1200ms]', 'ease-out');
        observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="antialiased font-light selection:bg-maroon selection:text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed w-full top-0 z-50 h-20 px-6 md:px-12 flex items-center justify-between border-b border-beige bg-white/50 backdrop-blur-sm shrink-0 transition-all duration-500">
          <div className="max-w-6xl mx-auto w-full flex items-center justify-between">
              <div className="text-maroon uppercase text-xl tracking-[0.2em] font-serif cursor-pointer" onClick={() => window.location.href='https://linktr.ee/leeze'} role="button">
                Leeze <span className="font-light opacity-70">Holistic</span>
              </div>
              <div className="hidden md:flex items-center gap-10 text-[10px] uppercase tracking-[0.15em] font-semibold text-[#6B615A]">
                  <a href="#about" className="hover:text-maroon transition-colors duration-500">About</a>
                  <a href="#method" className="hover:text-maroon transition-colors duration-500">Method</a>
                  <a href="#services" className="hover:text-maroon transition-colors duration-500">Services</a>
                  <a href="#coaches" className="hover:text-maroon transition-colors duration-500">Coaches</a>
              </div>
              <a href="https://wa.link/gwlgym" className="hidden md:inline-flex px-6 py-2.5 border border-maroon text-maroon text-[10px] uppercase tracking-[0.2em] font-bold hover:bg-maroon hover:text-white transition-colors">
                  Book a Call
              </a>
              <button className="md:hidden text-maroon">
                  <Menu size={28} />
              </button>
          </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex-grow flex flex-col items-center justify-center p-6 md:p-12 pt-32 pb-24 md:pt-48 md:pb-32 overflow-hidden text-center">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[600px] bg-[#F4F0E6] rounded-full blur-[120px] opacity-40 -z-10"></div>

          <div className="reveal max-w-6xl mx-auto flex flex-col gap-8 items-center">
              <span className="text-[10px] uppercase tracking-[0.3em] text-[#6B615A] block">Premium Holistic Coaching</span>
              
              <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif text-maroon leading-[1.1] tracking-tight max-w-5xl">
                  Guiding you back to balance <br className="hidden md:block"/>
                  <span className="italic font-light">through structure, awareness, and support.</span>
              </h1>
              
              <p className="text-lg md:text-xl font-serif text-[#6B615A] leading-relaxed max-w-2xl mx-auto">
                Holistic Coaching to Restore Energy, Regulate Hormones, and Reconnect with Your Body Through a Guided,
                Personalised Approach.
              </p>

              <div className="flex justify-center w-full mt-4">
                  <a href="#contact" className="w-full sm:w-auto bg-maroon text-white px-8 py-4 text-[10px] uppercase tracking-[0.2em] font-bold shadow-lg shadow-maroon/20 flex items-center justify-center gap-3 hover:bg-[#5A2424] transition-all duration-700">
                      Book a Free 15 Min Call
                      <ArrowRight size={18} />
                  </a>
              </div>
          </div>
      </section>

      {/* High-Conversion Line */}
      <section className="w-full bg-white py-24 px-6 border-y border-beige relative overflow-hidden reveal">
          <div className="max-w-4xl mx-auto flex flex-col justify-center items-center text-center p-8 bg-[#FDFBF7] border border-beige">
              <div className="text-maroon/20 mb-6">
                 <Info size={40} className="fill-current text-white stroke-maroon/40" />
              </div>
              <p className="md:text-3xl leading-snug text-2xl font-light italic text-[#4A423C] font-serif mb-4">
                "Most women don’t lack knowledge, they lack the right structure and support."
              </p>
              <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-[#6B615A]">— Our Philosophy</span>
          </div>
      </section>

      {/* About Section */}
      <section className="md:px-6 md:py-40 py-40 px-6" id="about">
          <div className="grid md:grid-cols-2 gap-20 md:gap-32 max-w-6xl mx-auto items-center">
              <div className="reveal relative">
                  <div className="aspect-[3/4] bg-center bg-[url(https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&w=2000&auto=format&fit=crop)] bg-cover p-4 relative grayscale-[20%]">
                      <div className="border-beige/50 flex bg-[#FDFBF7]/80 backdrop-blur-sm w-full h-full border items-center justify-center">
                        <Leaf size={80} className="text-maroon/30" />
                      </div>
                  </div>
              </div>
              <div className="flex flex-col gap-10 reveal">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] block border-b border-beige pb-4">Our Philosophy</span>
                  <h2 className="md:text-5xl text-maroon leading-tight text-4xl tracking-tight font-serif">
                    At LEEZE Holistic, true health is not forced.
                  </h2>
                  <div className="space-y-8 text-lg font-serif text-[#6B615A] leading-relaxed">
                      <p>
                        It is restored by aligning with the body's biological intelligence. We guide you to understand your body through a clear structured, premium system so you can stop guessing and start
                        responding to what your body actually needs.
                      </p>
                      <div className="pl-8 border-l border-maroon">
                          <p className="text-xl text-[#4A423C] italic">
                              This is not about quick fixes.<br/>
                              It’s about building a foundation your body can trust.
                          </p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Signature Method Section */}
      <section id="method" className="py-32 md:py-48 px-6 bg-[#FDFBF7] border-y border-beige">
          <div className="max-w-6xl mx-auto">
              <div className="text-center mb-20 md:mb-32 reveal">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] block mb-6">Our Signature Approach</span>
                  <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-maroon mb-8">The LEEZE Regulation Method</h2>
                  <p className="text-lg font-serif text-[#6B615A] max-w-2xl mx-auto">
                      A structured 3-phase system designed to guide your body back into balance with precision and elegance.
                  </p>
              </div>

              {/* 3 Phases */}
              <div className="grid md:grid-cols-3 gap-6 mb-24 reveal shrink-0">
                  {/* Phase 1 */}
                  <div className="bg-white border border-beige p-8 flex flex-col gap-4 hover:border-maroon transition-colors duration-700">
                      <div className="text-maroon font-serif text-3xl opacity-30">01</div>
                      <h3 className="font-serif text-xl text-[#4A423C]">Stabilise</h3>
                      <p className="text-xs text-[#6B615A] leading-relaxed uppercase tracking-wider">Create safety and consistency within the body.</p>
                      <p className="text-xs font-serif italic text-maroon/80 border-t border-beige pt-4 mt-auto">(We will use Listen & Eliminate approaches)</p>
                  </div>
                  {/* Phase 2 */}
                  <div className="bg-white border border-beige p-8 flex flex-col gap-4 hover:border-maroon transition-colors duration-700">
                      <div className="text-maroon font-serif text-3xl opacity-30">02</div>
                      <h3 className="font-serif text-xl text-[#4A423C]">Rebuild</h3>
                      <p className="text-xs text-[#6B615A] leading-relaxed uppercase tracking-wider">Restore function, energy, and internal balance.</p>
                      <p className="text-maroon/80 border-beige text-xs italic font-serif border-t pt-4 mt-auto">(We will use Eat & Support approaches)</p>
                  </div>
                  {/* Phase 3 */}
                  <div className="bg-white border border-beige p-8 flex flex-col gap-4 hover:border-maroon transition-colors duration-700">
                      <div className="text-maroon font-serif text-3xl opacity-30">03</div>
                      <h3 className="font-serif text-xl text-[#4A423C]">Elevate</h3>
                      <p className="text-xs text-[#6B615A] leading-relaxed uppercase tracking-wider">Optimise and maintain long-term balance.</p>
                      <p className="text-xs font-serif italic text-maroon/80 border-t border-beige pt-4 mt-auto">(We will empower your knowledge to have long lasting results)</p>
                  </div>
              </div>

              {/* Framework & Focus Grid */}
              <div className="grid lg:grid-cols-2 gap-8 reveal">
                  {/* LEEZE Framework Box */}
                  <div className="bg-white p-12 md:p-16 border border-beige flex flex-col justify-center">
                      <h4 className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] mb-8 text-center">Guided by the</h4>
                      <h4 className="font-serif text-3xl tracking-tight text-maroon mb-12 text-center">
                          LEEZE Framework
                      </h4>
                      <ul className="space-y-8">
                          <li className="flex items-start gap-6 border-b border-beige pb-6">
                              <span className="text-maroon font-serif text-xl italic mt-0.5">L</span>
                              <div>
                                  <strong className="font-serif text-xl font-normal text-[#4A423C] block mb-1">Listen</strong> 
                                  <span className="text-xs text-[#6B615A] uppercase tracking-widest">Understand your body’s signals</span>
                              </div>
                          </li>
                          <li className="flex items-start gap-6 border-b border-beige pb-6">
                              <span className="text-maroon font-serif text-xl italic mt-0.5">E</span>
                              <div>
                                  <strong className="font-serif text-xl font-normal text-[#4A423C] block mb-1">Eliminate</strong> 
                                  <span className="text-xs text-[#6B615A] uppercase tracking-widest">Remove what disrupts balance</span>
                              </div>
                          </li>
                          <li className="flex items-start gap-6 border-b border-beige pb-6">
                              <span className="text-maroon font-serif text-xl italic mt-0.5">E</span>
                              <div>
                                  <strong className="font-serif text-xl font-normal text-[#4A423C] block mb-1">Eat</strong> 
                                  <span className="text-xs text-[#6B615A] uppercase tracking-widest">Nourish your body intentionally</span>
                              </div>
                          </li>
                          <li className="flex items-start gap-6 border-b border-beige pb-6">
                              <span className="text-maroon font-serif text-xl italic mt-0.5">Z</span>
                              <div>
                                  <strong className="block text-xl font-normal text-[#4A423C] font-serif mb-1">Support</strong> 
                                  <span className="uppercase text-xs text-[#6B615A] tracking-widest">Coaching guidance by our Founder</span>
                              </div>
                          </li>
                          <li className="flex items-start gap-6">
                              <span className="text-maroon font-serif text-xl italic mt-0.5">E</span>
                              <div>
                                  <strong className="font-serif text-xl font-normal text-[#4A423C] block mb-1">Empower</strong> 
                                  <span className="text-xs text-[#6B615A] uppercase tracking-widest">Build long term independence</span>
                              </div>
                          </li>
                      </ul>
                  </div>

                  {/* Combined Core Focus Box */}
                  <div className="border-beige flex flex-col md:p-16 text-center bg-[#F4F0E6]/30 h-full border py-9 px-12 items-center justify-center">
                      <h4 className="font-serif text-3xl tracking-tight text-[#4A423C] mb-12">Core Focus Areas</h4>
                      
                      <div className="mb-12 w-full">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-maroon mb-6">Primary Focus</p>
                          <div className="flex flex-wrap justify-center gap-4">
                              <span className="px-6 py-3 bg-white border border-beige text-xs text-[#4A423C] font-medium tracking-wide">Nervous System Regulation</span>
                              <span className="px-6 py-3 bg-white border border-beige text-xs text-[#4A423C] font-medium tracking-wide">Digestion & Elimination</span>
                              <span className="px-6 py-3 bg-white border border-beige text-xs text-[#4A423C] font-medium tracking-wide">Energy & Daily Rhythm</span>
                          </div>
                      </div>
                      
                      <div className="w-16 h-px bg-maroon/20 mx-auto mb-12"></div>
                      
                      <div className="w-full">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] mb-6">Essential Subcategories</p>
                          <div className="flex flex-wrap justify-center gap-4">
                              <span className="px-5 py-2.5 bg-transparent border border-beige text-xs text-[#6B615A] tracking-wide">Blood Sugar Regulation</span>
                              <span className="px-5 py-2.5 bg-transparent border border-beige text-xs text-[#6B615A] tracking-wide">Cortisol & Emotional Balance</span>
                              <span className="px-5 py-2.5 bg-transparent border border-beige text-xs text-[#6B615A] tracking-wide">Gut Health & Inflammation</span>
                              <span className="px-5 py-2.5 bg-transparent border border-beige text-xs text-[#6B615A] tracking-wide">Cycle-Sync Nutrition</span>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* How You Work With Us */}
      <section className="py-32 md:py-48 px-6 bg-white relative">
          <div className="max-w-4xl mx-auto">
              <div className="text-center mb-24 reveal">
                  <h2 className="md:text-6xl text-maroon text-4xl tracking-tight font-serif mb-6">How You Work With Us</h2>
              </div>

              <div className="relative space-y-12">
                  {/* Connecting Line */}
                  <div className="absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-beige hidden md:block"></div>

                  {/* Layer 1 */}
                  <div className="flex flex-col md:flex-row reveal z-10 relative gap-12 items-center justify-between">
                      <div className="md:w-5/12 text-center md:text-right">
                          <span className="text-[10px] uppercase text-maroon block tracking-[0.2em] mb-4">Layer 1</span>
                          <h3 className="font-serif text-3xl tracking-tight text-[#4A423C] mb-6">Educational System</h3>
                          <p className="text-sm text-[#6B615A] mb-6 font-serif italic text-lg">You begin by understanding your body. You’ll learn:</p>
                          <ul className="space-y-4 text-xs tracking-widest uppercase text-[#4A423C]">
                              <li>How your body responds</li>
                              <li>What’s creating imbalance</li>
                              <li>How to support it properly</li>
                          </ul>
                      </div>
                      
                      <div className="md:w-5/12 hidden md:block"></div>
                  </div>

                  {/* Layer 2 */}
                  <div className="flex flex-col md:flex-row items-center justify-between gap-12 relative z-10 reveal">
                      <div className="md:w-5/12 hidden md:block"></div>
                      
                      <div className="md:w-5/12 text-center md:text-left">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-maroon mb-4 block">Layer 2</span>
                          <h3 className="font-serif text-3xl tracking-tight text-[#4A423C] mb-6">Personalised Coaching</h3>
                          <p className="text-sm text-[#6B615A] mb-6 font-serif italic text-lg">Then we personalise everything for you. This includes:</p>
                          <ul className="space-y-4 text-xs tracking-widest uppercase text-[#4A423C]">
                              <li>One on one coaching</li>
                              <li>Structured guidance and accountability</li>
                              <li>Adjustments based on your body’s response</li>
                          </ul>
                      </div>
                  </div>
              </div>

              <div className="mt-32 text-center reveal">
                  <a href="#services" className="inline-flex items-center justify-center uppercase hover:bg-black transition-all duration-700 font-bold text-[10px] text-white tracking-[0.2em] bg-[#4A423C] py-5 px-10">
                      Explore Services
                  </a>
              </div>
          </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 md:py-48 px-6 bg-[#F4F0E6] border-y border-beige">
          <div className="max-w-5xl mx-auto">
              
              <div className="text-center mb-24 reveal">
                  <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-[#4A423C]">Our Services</h2>
              </div>

              {/* Featured Service */}
              <div className="bg-[#F4F0E6] p-10 md:p-16 border border-beige flex flex-col justify-between relative overflow-hidden mb-12 reveal">
                  <div className="relative z-10 text-center">
                      <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] mb-4 block">Featured Experience</span>
                      
                      <h3 className="font-serif text-4xl md:text-5xl text-maroon mb-6">
                          1:1 Coaching & Health Consultation
                      </h3>
                      
                      <p className="text-maroon text-xl italic font-serif mb-10">Drawing from the experience of over 600 consultations.</p>
                      
                      <p className="text-base font-serif text-[#6B615A] mb-16 leading-relaxed max-w-3xl mx-auto text-lg">
                          A personalised one-on-one session where we explore your current struggles and guide you with a structured, practical approach. Together, we identify what is not working, what your body needs, and how to move forward with absolute clarity.
                      </p>
                      
                      <div className="mb-16">
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#4A423C] mb-8">This includes support with:</p>
                          <div className="grid grid-cols-1 md:grid-cols-4 gap-0 border-y border-beige divide-y md:divide-y-0 md:divide-x divide-beige bg-[#FDFBF7]">
                              <div className="py-8 px-4 flex gap-3 items-center justify-center">
                                  <div className="w-1 h-1 rounded-full bg-maroon hidden md:block"></div>
                                  <span className="font-serif text-xl tracking-tight text-[#4A423C]">Stress & Burnout</span>
                              </div>
                              <div className="py-8 px-4 flex gap-3 items-center justify-center">
                                  <div className="w-1 h-1 rounded-full bg-maroon hidden md:block"></div>
                                  <span className="font-serif text-xl tracking-tight text-[#4A423C]">Hormonal Imbalance</span>
                              </div>
                              <div className="py-8 px-4 flex gap-3 items-center justify-center">
                                  <div className="w-1 h-1 rounded-full bg-maroon hidden md:block"></div>
                                  <span className="font-serif text-xl tracking-tight text-[#4A423C]">Energy & Metabolism</span>
                              </div>
                              <div className="py-8 px-4 flex gap-3 items-center justify-center">
                                  <div className="w-1 h-1 rounded-full bg-maroon hidden md:block"></div>
                                  <span className="font-serif text-xl tracking-tight text-[#4A423C]">Gut & Liver Health</span>
                              </div>
                          </div>
                      </div>

                      <div className="pt-6 border-t border-maroon/10 flex justify-between items-center max-w-3xl mx-auto mb-8">
                          <span className="text-[10px] font-bold uppercase tracking-widest text-[#6B615A]">Global Online Available</span>
                      </div>

                      <a href="https://wa.link/gwlgym" className="inline-flex items-center justify-center uppercase bg-maroon text-white hover:bg-[#5A2424] transition-all duration-700 shadow-lg shadow-maroon/20 text-[10px] font-bold tracking-[0.2em] py-4 px-8">
                          Secure Your Session
                      </a>
                  </div>
              </div>

              {/* Additional Services Grid */}
              <div className="grid md:grid-cols-2 gap-12 reveal">
                  {/* Device Testing */}
                  <div className="bg-[#FDFBF7] p-12 md:p-16 border border-beige flex flex-col justify-between">
                      <div>
                          <h3 className="font-serif text-3xl tracking-tight text-[#4A423C] mb-4">Device Testing</h3>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-maroon mb-8">Malaysia & Brunei Residents Only</p>
                          <p className="text-base font-serif text-[#6B615A] leading-relaxed mb-12">
                              Utilising an advanced electromagnetic resonance device to comprehensively check for vitamins, minerals, hormones, liver function, gut health, and overall internal vitality.
                          </p>
                      </div>
                      <a href="https://wa.link/a5furx" className="inline-flex items-center uppercase hover:text-maroon transition-colors gap-3 hover:border-maroon text-[10px] font-bold text-[#4A423C] tracking-[0.2em] w-fit border-[#4A423C] border-b pb-2">
                          Enquire Now <ArrowRight size={14} />
                      </a>
                  </div>

                  {/* Recommended Products */}
                  <div className="bg-[#FDFBF7] p-12 md:p-16 border border-beige flex flex-col justify-between">
                      <div>
                          <h3 className="font-serif text-3xl tracking-tight text-[#4A423C] mb-4">Recommended Products</h3>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] mb-8">Trusted Support Tools</p>
                          <p className="text-base font-serif text-[#6B615A] leading-relaxed mb-12">
                              Explore our curated selection of trusted products and supplements. Use our recommended links to access high-quality holistic support for your daily journey.
                          </p>
                      </div>
                      <a href="https://wa.link/dh2kpv" className="inline-flex items-center uppercase hover:text-maroon transition-colors gap-3 hover:border-maroon text-[10px] font-bold text-[#4A423C] tracking-[0.2em] w-fit border-[#4A423C] border-b pb-2">
                          View Collection <ArrowRight size={14} />
                      </a>
                  </div>
              </div>
          </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 bg-white overflow-hidden border-b border-beige">
          <div className="text-center mb-24 reveal">
              <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] mb-6 block">Client Stories</span>
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-maroon">Words From Our Community</h2>
          </div>
          
          <div className="relative w-full">
              <div className="marquee-container gap-8 px-4">
                  {/* Set 1 */}
                  <div className="flex gap-8">
                      <div className="w-[350px] md:w-[450px] flex-none bg-[#FDFBF7] p-12 border border-beige flex flex-col justify-between">
                          <p className="font-serif text-xl text-[#4A423C] leading-relaxed italic mb-10">"I finally understand my body. The structure provided completely changed my approach to health and wellbeing."</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] border-t border-beige pt-6">Sarah M.</p>
                      </div>
                      <div className="w-[350px] md:w-[450px] flex-none bg-[#FDFBF7] p-12 border border-beige flex flex-col justify-between">
                          <p className="font-serif text-xl text-[#4A423C] leading-relaxed italic mb-10">"After years of fatigue, I have my energy back. The 1:1 consultation was an absolute game changer for my hormones."</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] border-t border-beige pt-6">Aisha K.</p>
                      </div>
                      <div className="w-[350px] md:w-[450px] flex-none bg-[#FDFBF7] p-12 border border-beige flex flex-col justify-between">
                          <p className="font-serif text-xl text-[#4A423C] leading-relaxed italic mb-10">"Coach Jay helped me build physical strength and mental clarity. Highly recommend the LEEZE method."</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] border-t border-beige pt-6">Omar R.</p>
                      </div>
                      <div className="w-[350px] md:w-[450px] flex-none bg-[#FDFBF7] p-12 border border-beige flex flex-col justify-between">
                          <p className="font-serif text-xl text-[#4A423C] leading-relaxed italic mb-10">"The most comprehensive holistic approach I have ever experienced. I finally feel in tune with my digestion and rhythm."</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] border-t border-beige pt-6">Elena P.</p>
                      </div>
                  </div>
                  {/* Set 2 (Duplicate for continuous scroll) */}
                  <div className="flex gap-8">
                      <div className="w-[350px] md:w-[450px] flex-none bg-[#FDFBF7] p-12 border border-beige flex flex-col justify-between">
                          <p className="font-serif text-xl text-[#4A423C] leading-relaxed italic mb-10">"I finally understand my body. The structure provided completely changed my approach to health and wellbeing."</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] border-t border-beige pt-6">Sarah M.</p>
                      </div>
                      <div className="w-[350px] md:w-[450px] flex-none bg-[#FDFBF7] p-12 border border-beige flex flex-col justify-between">
                          <p className="font-serif text-xl text-[#4A423C] leading-relaxed italic mb-10">"After years of fatigue, I have my energy back. The 1:1 consultation was an absolute game changer for my hormones."</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] border-t border-beige pt-6">Aisha K.</p>
                      </div>
                      <div className="w-[350px] md:w-[450px] flex-none bg-[#FDFBF7] p-12 border border-beige flex flex-col justify-between">
                          <p className="font-serif text-xl text-[#4A423C] leading-relaxed italic mb-10">"Coach Jay helped me build physical strength and mental clarity. Highly recommend the LEEZE method."</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] border-t border-beige pt-6">Omar R.</p>
                      </div>
                      <div className="w-[350px] md:w-[450px] flex-none bg-[#FDFBF7] p-12 border border-beige flex flex-col justify-between">
                          <p className="font-serif text-xl text-[#4A423C] leading-relaxed italic mb-10">"The most comprehensive holistic approach I have ever experienced. I finally feel in tune with my digestion and rhythm."</p>
                          <p className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] border-t border-beige pt-6">Elena P.</p>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Coaches Section */}
      <section id="coaches" className="py-32 md:py-48 px-6 bg-[#FDFBF7]">
          <div className="max-w-6xl mx-auto">
              <div className="text-center mb-24 reveal">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] mb-6 block">Expert Guidance</span>
                  <h2 className="font-serif text-4xl md:text-6xl tracking-tight text-maroon">Meet Your Coaches</h2>
              </div>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-16 reveal">
                  {/* Coach Zainab */}
                  <div className="group bg-white p-12 border border-beige hover:border-maroon transition-colors duration-700">
                      <div className="mb-8 flex justify-between items-start">
                          <h3 className="font-serif text-4xl tracking-tight text-[#4A423C]">Coach Zainab</h3>
                      </div>
                      <div className="mb-8">
                          <span className="px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] border border-maroon text-maroon rounded-full bg-maroon/5">For female clients only</span>
                      </div>
                      <p className="font-serif italic text-2xl text-maroon mb-10 leading-snug">“Guiding women to reconnect with their body and restore internal balance.”</p>
                      
                      <div className="pt-8 border-t border-beige">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] block mb-6">Focus Areas</span>
                          <ul className="flex flex-wrap gap-3">
                              <li className="px-5 py-2 bg-[#FDFBF7] border border-beige text-xs text-[#4A423C] tracking-wide">Hormonal Health</li>
                              <li className="px-5 py-2 bg-[#FDFBF7] border border-beige text-xs text-[#4A423C] tracking-wide">Body Awareness</li>
                              <li className="px-5 py-2 bg-[#FDFBF7] border border-beige text-xs text-[#4A423C] tracking-wide">Internal Balance</li>
                          </ul>
                      </div>
                  </div>

                  {/* Coach Jay */}
                  <div className="group bg-white p-12 border border-beige hover:border-maroon transition-colors duration-700">
                      <div className="mb-8 flex justify-between items-start">
                          <h3 className="font-serif text-4xl tracking-tight text-[#4A423C]">Coach Jay</h3>
                      </div>
                      <div className="mb-8">
                          <span className="px-4 py-1.5 text-[10px] uppercase tracking-[0.2em] border border-[#4A423C] text-[#4A423C] rounded-full bg-[#4A423C]/5">For male clients only</span>
                      </div>
                      <p className="font-serif italic text-2xl text-maroon mb-10 leading-snug">“Helping men build strength, clarity, and confidence from within.”</p>
                      
                      <div className="pt-8 border-t border-beige">
                          <span className="text-[10px] uppercase tracking-[0.2em] text-[#6B615A] block mb-6">Focus Areas</span>
                          <ul className="flex flex-wrap gap-3">
                              <li className="px-5 py-2 bg-[#FDFBF7] border border-beige text-xs text-[#4A423C] tracking-wide">Fitness & Strength</li>
                              <li className="px-5 py-2 bg-[#FDFBF7] border border-beige text-xs text-[#4A423C] tracking-wide">Mental Awareness</li>
                              <li className="px-5 py-2 bg-[#FDFBF7] border border-beige text-xs text-[#4A423C] tracking-wide">Discipline & Integrity</li>
                          </ul>
                      </div>
                  </div>
              </div>
          </div>
      </section>

      {/* Free Offer / CTA Section */}
      <section id="contact" className="py-32 md:py-40 px-6 bg-maroon text-white text-center border-y border-maroon">
          <div className="max-w-3xl mx-auto reveal">
              <h2 className="font-serif text-4xl md:text-6xl tracking-tight mb-8 text-[#FDFBF7]">
                  Start With a Free <br className="hidden md:block"/>15-Minute Consultation
              </h2>
              <p className="font-serif text-xl text-white/80 mb-14 leading-relaxed italic max-w-2xl mx-auto">
                  Share what you have been struggling with, and we will guide you on what your body needs and how we can support you.
              </p>
              <a href="https://wa.link/px3xr5" className="inline-flex items-center justify-center text-maroon uppercase hover:bg-white transition-all duration-700 hover:shadow-2xl text-[10px] font-bold tracking-[0.2em] bg-[#FDFBF7] py-6 px-12">
                  Contact on WhatsApp
              </a>
          </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-12 px-6 border-t border-beige">
          <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between text-[10px] uppercase tracking-[0.2em] text-[#6B615A] gap-4">
              <div className="flex gap-8">
                  <span>© 2026 Leeze Holistic</span>
                  <span>Privacy Policy</span>
              </div>
              <div className="flex items-center gap-6">
                  <a href="https://linktr.ee/leeze" className="hover:text-maroon transition-colors">Instagram</a>
                  <a href="https://wa.link/gwlgym" className="hover:text-maroon transition-colors">WhatsApp</a>
                  <div className="h-4 w-px bg-beige"></div>
                  <span className="text-maroon font-bold">Built for Health</span>
              </div>
          </div>
      </footer>
      
      <ChatAssistant />
    </div>
  );
}

