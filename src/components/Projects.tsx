import { ImageWithFallback } from './figma/ImageWithFallback';
import { motion } from 'motion/react';
import { useState } from 'react';
import { Code2 } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Advanced Economy System',
    description: 'Comprehensive economy plugin with virtual currency, shops, auctions, and transaction logging with MySQL integration.',
    category: 'Economy',
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    color: '#f59e0b',
    features: ['MySQL Database', 'Shop System', 'Auction House']
  },
  {
    id: 2,
    title: 'Custom Minigames Framework',
    description: 'Flexible framework for creating custom minigames with lobby system, team management, and spectator mode.',
    category: 'Framework',
    image: 'https://images.unsplash.com/photo-1511512578047-dfb367046420?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    color: '#3b82f6',
    features: ['Team System', 'Lobby Manager', 'Custom Events']
  },
  {
    id: 3,
    title: 'RPG Skill System',
    description: 'Advanced RPG plugin with custom skills, leveling system, skill trees, and class customization.',
    category: 'RPG',
    image: 'https://images.unsplash.com/photo-1552820728-8b83bb6b773f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    color: '#8b5cf6',
    features: ['Skill Trees', 'Level System', 'Custom Classes']
  },
  {
    id: 4,
    title: 'Protection & Land Claim',
    description: 'Territory management plugin with chunk-based claiming, permissions system, and grief prevention tools.',
    category: 'Management',
    image: 'https://images.unsplash.com/photo-1614850523296-3062c1b050b3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    color: '#ef4444',
    features: ['Chunk Claims', 'Permissions', 'GUI Interface']
  },
  {
    id: 5,
    title: 'Quest & Achievement System',
    description: 'Interactive quest plugin with storylines, objectives tracking, rewards, and achievement progression.',
    category: 'Quest',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    color: '#22c55e',
    features: ['Quest Editor', 'Progress Tracking', 'Rewards API']
  },
  {
    id: 6,
    title: 'Advanced Combat Mechanics',
    description: 'Custom combat system with combo attacks, weapon abilities, cooldowns, and damage indicators.',
    category: 'Combat',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    color: '#ec4899',
    features: ['Custom Weapons', 'Ability System', 'Combat Stats']
  }
];

export function Projects() {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section id="projects" className="px-6 py-20 bg-white relative overflow-hidden">
      {/* Animated grid background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)',
          backgroundSize: '20px 20px'
        }} />
      </div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3 justify-center md:justify-start">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <Code2 className="text-green-600" size={32} />
            </motion.div>
            <h2 className="text-neutral-900">Custom Plugins</h2>
          </div>
          <p className="text-neutral-600 text-center md:text-left">Advanced Minecraft plugins for enhanced server functionality</p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group cursor-pointer relative"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.5,
                delay: index * 0.1
              }}
              onHoverStart={() => setHoveredId(project.id)}
              onHoverEnd={() => setHoveredId(null)}
              whileHover={{ y: -8 }}
            >
              {/* Pixelated border effect */}
              <motion.div
                className="absolute -inset-1 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity"
                style={{ 
                  background: `linear-gradient(45deg, ${project.color}, transparent)`,
                  filter: 'blur(10px)'
                }}
              />
              
              <div className="relative bg-neutral-50 rounded-lg overflow-hidden border-4 border-neutral-900 shadow-lg">
                {/* Block breaking animation overlay */}
                <motion.div
                  className="absolute inset-0 z-20 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                >
                  <div className="absolute inset-0 bg-white opacity-20" style={{
                    backgroundImage: 'linear-gradient(45deg, transparent 45%, rgba(255,255,255,.5) 50%, transparent 55%)',
                    backgroundSize: '20px 20px',
                    animation: hoveredId === project.id ? 'shimmer 1s infinite' : 'none'
                  }} />
                </motion.div>
                
                <div className="aspect-video overflow-hidden bg-neutral-200 relative">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.4 }}
                  >
                    <ImageWithFallback
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      query={project.image}
                    />
                  </motion.div>
                  
                  {/* Pixelated overlay on hover */}
                  <motion.div
                    className="absolute inset-0 pointer-events-none"
                    style={{ 
                      background: `linear-gradient(to bottom, transparent, ${project.color}40)`,
                    }}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: hoveredId === project.id ? 1 : 0 }}
                  />
                </div>
                
                <motion.div 
                  className="p-5"
                  initial={{ backgroundColor: '#fafafa' }}
                  whileHover={{ backgroundColor: '#ffffff' }}
                >
                  <div className="flex items-center gap-2 mb-2">
                    <motion.span 
                      className="text-xs px-3 py-1 rounded-sm text-white relative overflow-hidden"
                      style={{ 
                        backgroundColor: project.color,
                        imageRendering: 'pixelated'
                      }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {project.category}
                    </motion.span>
                  </div>
                  <h3 className="text-neutral-900 mb-2">{project.title}</h3>
                  <p className="text-neutral-600 text-sm mb-3">{project.description}</p>
                  
                  {/* Features tags */}
                  <div className="flex flex-wrap gap-1">
                    {project.features.map((feature, idx) => (
                      <span 
                        key={idx}
                        className="text-xs px-2 py-1 bg-neutral-200 text-neutral-700 rounded"
                      >
                        {feature}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              {/* Floating pixel particles on hover */}
              {hoveredId === project.id && (
                <>
                  <motion.div
                    className="absolute top-0 right-0 w-3 h-3 rounded-sm"
                    style={{ backgroundColor: project.color }}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: [0, 1, 0], y: -30 }}
                    transition={{ duration: 1, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-0 left-0 w-2 h-2 rounded-sm"
                    style={{ backgroundColor: project.color }}
                    initial={{ opacity: 0, y: 0 }}
                    animate={{ opacity: [0, 1, 0], y: -20 }}
                    transition={{ duration: 1.2, repeat: Infinity, delay: 0.3 }}
                  />
                </>
              )}
            </motion.div>
          ))}
        </div>
      </div>
      
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}} />
    </section>
  );
}
