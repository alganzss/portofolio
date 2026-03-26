import { motion } from 'motion/react';
import bgFilm from 'figma:asset/edef869d453aa5f85561708699543d0df32c3dcc.png';

export function TechStack() {
  return (
    <section 
      id="tech-stack" 
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black py-20"
    >
      {/* Background Image with Overlay - This is the "Style" of page 2 */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgFilm} 
          alt="Background Strip" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-orange-900/10 rounded-full filter blur-[150px] z-0" />

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
            Minecraft Server Developer
          </h2>
        </motion.div>

        {/* Plugin Container - Matching the Background Style (Film Strip) */}
        <motion.div 
          className="relative w-full max-w-4xl h-40 md:h-48 overflow-hidden border-y border-orange-900/30 bg-black/40 backdrop-blur-sm mb-6"
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Label "Custom Plugin" */}
          <div className="absolute top-4 left-6 z-30">
            <span 
              className="text-amber-500/80 px-4 py-1 bg-black/80 border border-amber-900/50"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.7rem' }}
            >
              Custom Plugin
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img 
              src={bgFilm} 
              alt="Film Texture" 
              className="w-full h-full object-cover opacity-20 grayscale"
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
                className="text-orange-700/60 tracking-widest uppercase px-12"
                style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.8rem' }}
              >
                Create Plugin
              </p>
            </motion.div>
          </div>

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

        {/* Resourcepack Container - Matching Style */}
        <motion.div 
          className="relative w-full max-w-4xl h-40 md:h-48 overflow-hidden border-y border-orange-900/30 bg-black/40 backdrop-blur-sm"
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.2, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Label "Conversion" */}
          <div className="absolute top-4 left-6 z-30">
            <span 
              className="text-amber-500/80 px-4 py-1 bg-black/80 border border-amber-900/50"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.7rem' }}
            >
              Convert Resourcepack
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img 
              src={bgFilm} 
              alt="Film Texture" 
              className="w-full h-full object-cover opacity-20 grayscale"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 1 }}
            >
              <p 
                className="text-orange-700/60 tracking-widest uppercase px-12 leading-relaxed"
                style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.8rem' }}
              >
                Convert Minecraft Resourcepack From Java To Bedrock
              </p>
            </motion.div>
          </div>

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

        {/* Worldgen Datapack Container - New Section */}
        <motion.div 
          className="relative w-full max-w-4xl h-40 md:h-48 overflow-hidden border-y border-orange-900/30 bg-black/40 backdrop-blur-sm mt-6"
          initial={{ x: 300, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.4, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Label "Worldgen Datapack" */}
          <div className="absolute top-4 left-6 z-30">
            <span 
              className="text-amber-500/80 px-4 py-1 bg-black/80 border border-amber-900/50"
              style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.7rem' }}
            >
              Worldgen Datapack
            </span>
          </div>

          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <img 
              src={bgFilm} 
              alt="Film Texture" 
              className="w-full h-full object-cover opacity-20 grayscale"
            />
          </div>

          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div 
              className="text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 1.4, duration: 1 }}
            >
              <p 
                className="text-orange-700/60 tracking-widest uppercase px-12 leading-relaxed"
                style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.8rem' }}
              >
                Custom Terrain, Biomes & Structure Generation
              </p>
            </motion.div>
          </div>

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
      </div>
    </section>
  );
}
