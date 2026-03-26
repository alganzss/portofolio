import { Mail, MessageSquare, Github, Send } from 'lucide-react';
import { motion } from 'motion/react';
import lastPageBg from 'figma:asset/f80f79352e16b1938dce949c728eac3d1cda7917.png';

const contacts = [
  {
    icon: Mail,
    title: 'Email',
    value: 'muhammadalfikri133@gmail.com',
    href: 'mailto:muhammadalfikri133@gmail.com',
    color: 'from-amber-600 to-orange-700'
  },
  {
    icon: MessageSquare,
    title: 'Discord',
    value: 'kyoger23',
    href: 'https://discord.com',
    color: 'from-orange-600 to-red-700'
  },
  {
    icon: Github,
    title: 'GitHub',
    value: 'alganzss',
    href: 'https://github.com/alganzss',
    color: 'from-red-600 to-amber-700'
  }
];

export function Contact() {
  return (
    <section id="contact" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-black py-20 px-6">
      {/* Background Image with Overlay - Matching Page 2 Style */}
      <div className="absolute inset-0 z-0">
        <img 
          src={lastPageBg} 
          alt="Contact Background" 
          className="w-full h-full object-cover opacity-30 grayscale"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-black/60" />
      </div>

      {/* Background Glow - Consistent Amber Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-amber-900/10 rounded-full filter blur-[150px] z-0" />

      <div className="max-w-5xl mx-auto relative z-10 w-full">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2 }}
        >
          <div className="w-16 h-16 mx-auto mb-8 bg-black/60 border border-amber-900/50 rounded-xl flex items-center justify-center backdrop-blur-sm drop-shadow-[0_0_15px_rgba(245,158,11,0.3)]">
            <Send className="text-amber-500" size={32} />
          </div>
          
          <h2 
            className="text-amber-500 mb-6 drop-shadow-[0_0_15px_rgba(245,158,11,0.5)]"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '1.5rem' }}
          >
            Connect With Me
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 mb-20">
          {contacts.map((contact, index) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={index}
                href={contact.href}
                target={contact.href.startsWith('http') ? '_blank' : undefined}
                rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="group relative"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <div className="relative bg-black/60 backdrop-blur-md border border-orange-900/20 rounded-2xl p-8 text-center hover:border-amber-500/50 transition-all duration-500 overflow-hidden group">
                  {/* Inner Film Glow */}
                  <div className="absolute inset-0 bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                  
                  <div className={`w-14 h-14 mx-auto mb-6 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center transform group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-black/50`}>
                    <Icon className="text-white" size={28} />
                  </div>

                  <h3 
                    className="text-white mb-3"
                    style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.7rem' }}
                  >
                    {contact.title}
                  </h3>
                  <p className="text-neutral-500 text-[10px] uppercase tracking-tighter opacity-80 group-hover:text-amber-500/80 transition-colors">
                    {contact.value}
                  </p>

                  {/* Aesthetic dots matching the film theme */}
                  <div className="absolute top-2 left-2 flex gap-1 opacity-20">
                    <div className="w-1 h-1 bg-amber-500 rounded-full" />
                    <div className="w-1 h-1 bg-amber-500 rounded-full" />
                  </div>
                </div>
              </motion.a>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          className="text-center pt-12 border-t border-orange-900/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          <p 
            className="text-amber-500 font-bold drop-shadow-[0_0_8px_rgba(245,158,11,0.4)]"
            style={{ fontFamily: "'Press Start 2P', cursive", fontSize: '0.6rem' }}
          >
            @ 2026 pikrew
          </p>
        </motion.div>
      </div>
    </section>
  );
}
