import bgImage from 'figma:asset/3c91f2882611d8cdbd4574867ab713145b48ce70.png';
import portfolioImage from 'figma:asset/cb82ddcb4ed394bc0c25826e9f373bed7b9c18eb.png';
import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative bg-black overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Background" 
          className="w-full h-full object-cover opacity-40 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Simple background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-900/10 rounded-full filter blur-[150px] z-0" />
      
      {/* Central Text Content */}
      <motion.div 
        className="relative z-10 flex flex-col items-center justify-center text-center px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
      >
        <motion.span 
          className="text-orange-500/80 tracking-[0.3em] uppercase mb-4"
          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.75rem' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          introduce
        </motion.span>

        <motion.h1 
          className="text-amber-500 mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]"
          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '2.5rem', lineHeight: '1.2' }}
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Pikrew
        </motion.h1>

        <motion.button 
          onClick={() => scrollToSection('tech-stack')}
          className="text-orange-700/70 tracking-wider max-w-[280px] md:max-w-none hover:text-amber-500 transition-colors cursor-pointer group"
          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.75rem', lineHeight: '1.8' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 1 }}
        >
          Minecraft Server Developer
          <div className="h-px w-0 group-hover:w-full bg-amber-500 transition-all duration-300 mx-auto" />
        </motion.button>

        <motion.button 
          onClick={() => scrollToSection('ai-prompt-engineer')}
          className="text-orange-700/70 tracking-wider mt-4 max-w-[280px] md:max-w-none hover:text-amber-500 transition-colors cursor-pointer group"
          style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.75rem', lineHeight: '1.8' }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
        >
          AI Prompt Engineer
          <div className="h-px w-0 group-hover:w-full bg-amber-500 transition-all duration-300 mx-auto" />
        </motion.button>
      </motion.div>

      {/* Optional: Simple scroll indicator to guide user */}
      <motion.div 
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-amber-500/50 z-10"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
}