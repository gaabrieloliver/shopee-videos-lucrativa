import { motion } from "framer-motion";

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden bg-background">
      {/* Base Grid Pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(#ff0000 1px, transparent 1px), linear-gradient(90deg, #ff0000 1px, transparent 1px)`,
          backgroundSize: "100px 100px",
        }}
      />

      {/* Animated Vertical Neon Lines */}
      <div className="absolute inset-y-0 left-0 w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent ml-[5%] sm:ml-[10%]" />
      <div className="absolute inset-y-0 right-0 w-px bg-gradient-to-b from-transparent via-red-500/20 to-transparent mr-[5%] sm:mr-[10%]" />

      {/* Traveling Neon Pulses */}
      <motion.div
        animate={{ y: ["-100%", "200%"] }}
        transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        className="absolute left-[5%] sm:left-[10%] w-[2px] h-32 bg-gradient-to-b from-transparent via-red-500 to-transparent shadow-[0_0_20px_rgba(255,0,0,0.8)] z-10"
      />

      <motion.div
        animate={{ y: ["200%", "-100%"] }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear", delay: 2 }}
        className="absolute right-[5%] sm:right-[10%] w-[2px] h-32 bg-gradient-to-b from-transparent via-red-500 to-transparent shadow-[0_0_20px_rgba(255,0,0,0.8)] z-10"
      />

      {/* Floating Diagonal Streams */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, x: -500, y: i * 200 }}
          animate={{
            opacity: [0, 0.5, 0],
            x: 2000,
            y: i * 200 + 500,
          }}
          transition={{
            duration: 15 + i * 2,
            repeat: Infinity,
            ease: "linear",
            delay: i * 4,
          }}
          className="absolute w-64 h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent rotate-45"
        />
      ))}

      {/* Large Ambient Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-red-600/5 rounded-full blur-[150px]" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-red-900/5 rounded-full blur-[180px]" />
      <div className="absolute top-[40%] left-[60%] w-[30%] h-[30%] bg-red-600/5 rounded-full blur-[120px]" />
    </div>
  );
}
