import { Code, Database, Zap, Wrench, FileCode, Server } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const skills = [
  {
    icon: Code,
    title: 'Java Development',
    description: 'Expert in Java programming with focus on Minecraft server-side development and optimization',
    color: '#f59e0b'
  },
  {
    icon: Wrench,
    title: 'Spigot & Bukkit API',
    description: 'Deep knowledge of Spigot/Bukkit API, events, and custom server mechanics implementation',
    color: '#ef4444'
  },
  {
    icon: Database,
    title: 'Database Integration',
    description: 'MySQL, SQLite, and MongoDB integration for data persistence and player statistics',
    color: '#3b82f6'
  },
  {
    icon: FileCode,
    title: 'Plugin Architecture',
    description: 'Clean code practices, design patterns, and scalable plugin architecture development',
    color: '#22c55e'
  },
  {
    icon: Zap,
    title: 'Performance Optimization',
    description: 'Server performance tuning, async operations, and efficient resource management',
    color: '#8b5cf6'
  },
  {
    icon: Server,
    title: 'API Development',
    description: 'Creating developer-friendly APIs and hooks for plugin integration and extensibility',
    color: '#06b6d4'
  }
];

export function Skills() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section className="px-6 py-20 bg-neutral-50 relative overflow-hidden">
      {/* Animated background blocks */}
      <div className="absolute inset-0 overflow-hidden opacity-5">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-16 h-16 border-2 border-neutral-900 rounded-sm"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              imageRendering: 'pixelated'
            }}
            animate={{
              rotate: [0, 90, 180, 270, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              ease: "linear",
              delay: i * 0.2
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-neutral-900 mb-3">Technical Skills</h2>
          <p className="text-neutral-600">Technologies and tools I use for plugin development</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <motion.div 
                key={index}
                className="relative"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.5,
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 100
                }}
                onHoverStart={() => setActiveIndex(index)}
                onHoverEnd={() => setActiveIndex(null)}
              >
                {/* Glow effect */}
                <motion.div
                  className="absolute -inset-1 rounded-lg opacity-0"
                  style={{ 
                    background: `linear-gradient(45deg, ${skill.color}, transparent)`,
                    filter: 'blur(12px)'
                  }}
                  animate={{ 
                    opacity: activeIndex === index ? 0.6 : 0 
                  }}
                  transition={{ duration: 0.3 }}
                />
                
                <motion.div
                  className="p-6 bg-white rounded-lg border-4 border-neutral-900 relative overflow-hidden"
                  whileHover={{ y: -5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Animated background pattern */}
                  <motion.div
                    className="absolute inset-0 opacity-0"
                    style={{
                      backgroundImage: `repeating-linear-gradient(45deg, ${skill.color}20 0, ${skill.color}20 2px, transparent 2px, transparent 8px)`,
                    }}
                    animate={{
                      opacity: activeIndex === index ? 1 : 0
                    }}
                  />
                  
                  <motion.div 
                    className="w-14 h-14 rounded-lg flex items-center justify-center mb-4 relative"
                    style={{ backgroundColor: skill.color }}
                    animate={{
                      rotate: activeIndex === index ? [0, -10, 10, -10, 0] : 0,
                      scale: activeIndex === index ? 1.1 : 1
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon className="text-white" size={28} />
                    
                    {/* Pixel particles */}
                    {activeIndex === index && (
                      <>
                        <motion.div
                          className="absolute -top-2 -right-2 w-2 h-2 rounded-sm bg-white"
                          animate={{
                            opacity: [0, 1, 0],
                            y: [-10, -20],
                            x: [0, 10]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity
                          }}
                        />
                        <motion.div
                          className="absolute -bottom-2 -left-2 w-2 h-2 rounded-sm bg-white"
                          animate={{
                            opacity: [0, 1, 0],
                            y: [10, 20],
                            x: [0, -10]
                          }}
                          transition={{
                            duration: 1,
                            repeat: Infinity,
                            delay: 0.5
                          }}
                        />
                      </>
                    )}
                  </motion.div>
                  
                  <motion.h3 
                    className="text-neutral-900 mb-2 relative z-10"
                    animate={{
                      x: activeIndex === index ? 5 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    {skill.title}
                  </motion.h3>
                  <motion.p 
                    className="text-neutral-600 text-sm relative z-10"
                    animate={{
                      x: activeIndex === index ? 5 : 0
                    }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.05 }}
                  >
                    {skill.description}
                  </motion.p>
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
