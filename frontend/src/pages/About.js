import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FaGem, FaAward, FaTruck, FaClock, FaPhoneAlt, FaHome } from 'react-icons/fa'

const About = () => {
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className='bg-slate-50/60 min-h-screen pb-20'>
      
      {/* ─── HERO OVERLAY STRIPE ─── */}
      <div className='bg-slate-900 text-white py-20 px-4 text-center relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(217,119,6,0.12),transparent_75%)]' />
        <div className='container mx-auto max-w-3xl relative z-10 space-y-3'>
          <span className='text-amber-500 font-semibold text-xs uppercase tracking-widest block'>The Art of Fragrance</span>
          <h1 className='text-4xl md:text-5xl font-serif font-bold tracking-wide uppercase'>
            About <span className='text-amber-500 font-light lowercase italic capitalize'>Joyce Perfumier</span>
          </h1>
          <p className='text-slate-400 text-xs md:text-sm leading-relaxed font-light max-w-xl mx-auto'>
            Nairobi's elite multi-brand hub for authentic designer fragrances, masterclass watches, and pristine custom gift boxes.
          </p>
        </div>
      </div>

      {/* ─── VISUAL IMAGE CATALOG GRID SECTION ─── */}
      <div className='container mx-auto px-4 py-12 max-w-5xl'>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
          
          {/* Card 1: Luxury Boutique Display */}
          <div className='group overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm block hover:shadow-md transition-all duration-300'>
            <div className='h-48 bg-slate-100 overflow-hidden relative'>
              <img 
                src="https://unsplash.com" 
                alt="Luxury Perfume Boutique Aesthetic Display" 
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent' />
              <span className='absolute bottom-3 left-4 text-white text-xs font-bold uppercase tracking-wider'>Our Boutique Atmosphere</span>
            </div>
            <p className='p-3 text-[11px] text-slate-500 font-light leading-relaxed'>Experience an immersive world of luxury tailored to help you find your unique seasonal signature scent profiles.</p>
          </div>

          {/* Card 2: Exquisite Vanity Bottle Arrays */}
          <div className='group overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm block hover:shadow-md transition-all duration-300'>
            <div className='h-48 bg-slate-100 overflow-hidden relative'>
              <img 
                src="https://unsplash.com" 
                alt="Designer Perfume Bottle Display Vanity Elegant" 
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent' />
              <span className='absolute bottom-3 left-4 text-white text-xs font-bold uppercase tracking-wider'>Curated Masterpieces</span>
            </div>
            <p className='p-3 text-[11px] text-slate-500 font-light leading-relaxed'>Every piece inside our catalog is meticulously audited to ensure a flawless retail badge code history.</p>
          </div>

          {/* Card 3: Curated Gift Wrapping Matrix */}
          <div className='group overflow-hidden rounded-2xl bg-white border border-slate-100 shadow-sm block hover:shadow-md transition-all duration-300'>
            <div className='h-48 bg-slate-100 overflow-hidden relative'>
              <img 
                src="https://unsplash.com" 
                alt="Luxury Perfume Gift Sets Packaging Curated" 
                className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent' />
              <span className='absolute bottom-3 left-4 text-white text-xs font-bold uppercase tracking-wider'>Bespoke Presentation Giftboxes</span>
            </div>
            <p className='p-3 text-[11px] text-slate-500 font-light leading-relaxed'>Unbox perfection with our custom structural gift linings engineered to deliver lasting sensory impressions.</p>
          </div>

        </div>
      </div>

      {/* ─── BRAND CHRONICLE STORY LINE ─── */}
      <div className='container mx-auto px-4 py-8 max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center'>
        <div className='space-y-4'>
          <h2 className='text-xl md:text-2xl font-serif font-bold text-slate-800 tracking-wide uppercase border-b pb-2 border-slate-200'>
            Crafting Unforgettable Memories
          </h2>
          <p className='text-slate-600 font-light text-xs md:text-sm leading-relaxed'>
            Founded on the principle of uncompromised sensory distinction, **Joyce Perfumier** has evolved into a premier luxury standard bearer across Nairobi. We operate on the ethos that a premium perfume behaves as an intimate extension of character—a silent dialogue that captures presence and commands memory long after you leave the room.
          </p>
          <p className='text-slate-600 font-light text-xs md:text-sm leading-relaxed'>
            By maintaining deep verified supply pipelines with leading global distribution houses, we bridge the divide between international design luxury and local fragrance collectors in Kenya. Our display rows carefully interlace the high-volume projection of Arabian oud expressions with the pristine, delicate finish of classical European extraits.
          </p>
        </div>
        
        {/* Decorative Banner Block Quotes */}
        <div className='bg-gradient-to-br from-white to-slate-50/30 border border-slate-100 p-8 rounded-2xl shadow-sm text-center space-y-4 relative'>
          <div className='absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-amber-600 text-white text-[10px] font-bold uppercase tracking-widest px-4 py-1 rounded-full shadow-sm'>
            Our Core Blueprint
          </div>
          <p className='font-serif italic text-base md:text-lg text-slate-700 pt-2 leading-relaxed'>
            "To curate absolute authenticity, eliminate the distribution barrier for local enthusiasts, and provide world-class unboxing visuals across every package."
          </p>
          <div className='text-[10px] text-slate-400 font-mono tracking-wider uppercase'>— The Joyce Perfumier Executive Bench</div>
        </div>
      </div>

      {/* ─── DUAL-ACTION HIGH CONVERSION CONTEXTUAL CTA BLOCK ─── */}
      <div className='container mx-auto px-4 mt-16 max-w-4xl text-center bg-gradient-to-br from-slate-900 to-slate-950 text-white rounded-2xl p-8 md:p-12 shadow-xl relative overflow-hidden'>
        <div className='absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(217,119,6,0.14),transparent_65%)]' />
        <div className='relative z-10 space-y-5 max-w-xl mx-auto'>
          <h3 className='text-xl md:text-2xl font-serif font-bold tracking-wide uppercase'>
            Ready to Begin Your <span className='text-amber-500 normal-case italic font-light font-serif capitalize'>Scent Journey?</span>
          </h3>
          <p className='text-slate-400 text-xs font-light leading-relaxed'>
            Return to our main home displays to explore trending gift items, or connect directly with sop concierge numbers for order configuration help.
          </p>
          <div className='flex flex-col sm:flex-row items-center justify-center gap-4 pt-2'>
            {/*  Fixed: Button now returns user back to Home page layout route */}
            <Link 
              to="/" 
              className='w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-full text-white bg-gradient-to-r from-amber-600 to-amber-700 hover:from-amber-700 hover:to-amber-800 transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0 shadow'
            >
              <FaHome /> Return to Home
            </Link>
            <Link 
              to="/contact" 
              className='w-full sm:w-auto px-6 py-3 text-xs font-bold uppercase tracking-wider rounded-full text-slate-300 border border-slate-800 hover:border-slate-700 hover:text-white bg-slate-950/40 transition-all duration-200 flex items-center justify-center gap-2 transform hover:-translate-y-0.5 active:translate-y-0'
            >
              <FaPhoneAlt size={10} /> Contact Our Team
            </Link>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About
