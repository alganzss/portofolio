import { motion } from 'motion/react';
import bgGraffiti from 'figma:asset/64086ffe30d3996ee3a168ced2e57ac6bc252d40.png';
import geminiLogo from 'figma:asset/3cbc6e680f36fb91acf19ad8b151c9232598c36e.png';
import claudeLogo from 'figma:asset/86f5feb94411c5909226fe2b665dfdf5abdbc82b.png';
import perplexityLogo from 'figma:asset/1719e51b4a1a9d141256966e9fd008a15d7fdb4e.png';
import chatgptLogo from 'figma:asset/c7e2a85e52f1a6730952cbe83c332fe85b7d1234.png';
import aiLogo5 from 'figma:asset/32de3a2c74250da743becf59c8e418c22fa72ce1.png';
import poeLogo from 'figma:asset/dd977a915b6b9b1a30deb2f571cfeb3bddbcd05f.png';

export function AIPromptEngineer() {
  const aiLogos = [
    { src: geminiLogo, alt: 'Gemini AI' },
    { src: claudeLogo, alt: 'Claude AI' },
    { src: perplexityLogo, alt: 'Perplexity AI' },
    { src: chatgptLogo, alt: 'ChatGPT' },
    { src: aiLogo5, alt: 'AI Assistant' },
    { src: poeLogo, alt: 'Poe AI' }
  ];

  return (
    <section 
      id="ai-prompt-engineer" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black py-20"
    >
      {/* Background Image with Overlay - Matching Page 2 Style */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgGraffiti} 
          alt="AI Background" 
          className="w-full h-full object-cover opacity-30 grayscale transition-all duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Background Glow - Consistent Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-900/10 rounded-full filter blur-[150px] z-0" />

      <div className="max-w-7xl w-full relative z-10 px-6 flex flex-col items-center">
        {/* Title Section */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          viewport={{ once: true }}
        >
          <h2 
            className="text-amber-500 mb-2 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]" 
            style={{ 
              fontFamily: "'Press Start 2P', cursive", 
              fontSize: '1.5rem', 
              lineHeight: '1.6' 
            }}
          >
            AI Prompt Engineer
          </h2>
        </motion.div>

        {/* AI Skill Container - Matching the Film/Box Style of Page 2 */}
        <motion.div 
          className="relative w-full max-w-4xl h-40 md:h-48 overflow-hidden border-y border-orange-900/30 bg-black/40 backdrop-blur-sm"
          initial={{ x: -300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Label "Intelligence" */}
          <div className="absolute top-4 left-6 z-30">
            <span 
              className="text-amber-500/80 px-4 py-1 bg-black/80 border border-amber-900/50"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.7rem' }}
            >
              LLM Context
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {/* Using the same background texture for consistency */}
            <img 
              src={bgGraffiti} 
              alt="Texture Overlay" 
              className="w-full h-full object-cover opacity-10 grayscale"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1, duration: 1 }}
            >
              <p 
                className="text-orange-700/60 tracking-widest uppercase px-12 leading-relaxed"
                style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.8rem' }}
              >
                Advanced Prompting & Model Optimization
              </p>
            </motion.div>
          </div>

          {/* Film perforations (aesthetic dots) */}
          <div className="absolute top-2 left-0 right-0 flex justify-around opacity-30">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-2 h-3 bg-orange-900/50 rounded-sm" />
            ))}
          </div>
          <div className="absolute bottom-2 left-0 right-0 flex justify-around opacity-30">
            {[...Array(12)].map((_, i) => (
              <div key={i} className="w-2 h-3 bg-orange-900/50 rounded-sm" />
            ))}
          </div>
        </motion.div>

        {/* AI Logos Section */}
        <motion.div 
          className="flex items-center justify-center gap-12 mt-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {aiLogos.map((logo, index) => (
            <motion.div
              key={index}
              className="w-14 h-14 md:w-16 md:h-16 relative group flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7 + (index * 0.2) }}
              whileHover={{ scale: 1.15, rotate: [0, -5, 5, 0] }}
              viewport={{ once: true }}
            >
              <img 
                src={logo.src} 
                alt={logo.alt} 
                className="w-full h-full object-cover transition-all duration-500 drop-shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:drop-shadow-[0_0_25px_rgba(245,158,11,0.8)] group-hover:brightness-110"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
