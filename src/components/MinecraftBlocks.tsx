import { motion } from 'motion/react';
import { useEffect, useState } from 'react';

interface Block {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  delay: number;
}

export function MinecraftBlocks() {
  const [blocks, setBlocks] = useState<Block[]>([]);

  useEffect(() => {
    const colors = [
      '#4ade80', // green
      '#22c55e', // emerald
      '#86efac', // light green
      '#16a34a', // dark green
      '#10b981', // emerald-500
    ];

    const newBlocks: Block[] = [];
    for (let i = 0; i < 20; i++) {
      newBlocks.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 30 + 20,
        color: colors[Math.floor(Math.random() * colors.length)],
        delay: Math.random() * 2,
      });
    }
    setBlocks(newBlocks);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-10">
      {blocks.map((block) => (
        <motion.div
          key={block.id}
          className="absolute rounded-sm"
          style={{
            left: `${block.x}%`,
            top: `${block.y}%`,
            width: `${block.size}px`,
            height: `${block.size}px`,
            backgroundColor: block.color,
            imageRendering: 'pixelated',
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 4 + Math.random() * 2,
            repeat: Infinity,
            ease: "easeInOut",
            delay: block.delay,
          }}
        />
      ))}
    </div>
  );
}
