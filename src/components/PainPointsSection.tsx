import { useState } from 'react';
import { motion } from 'framer-motion';

interface PainPointsSectionProps {
  onSelectPainArea: (area: string) => void;
}

const painPoints = [
  { id: 'neck', label: 'Neck', x: 50, y: 8 },
  { id: 'left-shoulder', label: 'Left Shoulder', x: 32, y: 15 },
  { id: 'right-shoulder', label: 'Right Shoulder', x: 68, y: 15 },
  { id: 'upper-back', label: 'Upper Back', x: 50, y: 22 },
  { id: 'lower-back', label: 'Lower Back', x: 50, y: 38 },
  { id: 'left-hip', label: 'Left Hip', x: 38, y: 48 },
  { id: 'right-hip', label: 'Right Hip', x: 62, y: 48 },
  { id: 'left-knee', label: 'Left Knee', x: 40, y: 68 },
  { id: 'right-knee', label: 'Right Knee', x: 60, y: 68 },
  { id: 'left-ankle', label: 'Left Ankle', x: 40, y: 90 },
  { id: 'right-ankle', label: 'Right Ankle', x: 60, y: 90 },
];

const PainPointsSection = ({ onSelectPainArea }: PainPointsSectionProps) => {
  const [hoveredPoint, setHoveredPoint] = useState<string | null>(null);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Where does it <span className="gradient-text">hurt?</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            Click on the area that's causing you discomfort
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex justify-center"
        >
          <div className="relative w-full max-w-xs aspect-[1/2.2]">
            {/* Human body silhouette - SVG */}
            <svg
              viewBox="0 0 100 220"
              className="w-full h-full"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Head */}
              <ellipse cx="50" cy="12" rx="12" ry="12" className="fill-primary/10 stroke-primary/30" strokeWidth="0.5" />
              
              {/* Neck */}
              <rect x="46" y="24" width="8" height="8" rx="2" className="fill-primary/10" />
              
              {/* Torso */}
              <path
                d="M30 35 Q25 40 25 60 L25 95 Q25 100 30 105 L40 110 L50 115 L60 110 L70 105 Q75 100 75 95 L75 60 Q75 40 70 35 L60 32 L50 30 L40 32 Z"
                className="fill-primary/10 stroke-primary/30"
                strokeWidth="0.5"
              />
              
              {/* Left Arm */}
              <path
                d="M25 40 Q15 45 12 70 Q10 85 15 100"
                className="stroke-primary/30 fill-none"
                strokeWidth="6"
                strokeLinecap="round"
              />
              
              {/* Right Arm */}
              <path
                d="M75 40 Q85 45 88 70 Q90 85 85 100"
                className="stroke-primary/30 fill-none"
                strokeWidth="6"
                strokeLinecap="round"
              />
              
              {/* Left Leg */}
              <path
                d="M40 110 Q38 130 40 150 Q40 175 38 200"
                className="stroke-primary/30 fill-none"
                strokeWidth="8"
                strokeLinecap="round"
              />
              
              {/* Right Leg */}
              <path
                d="M60 110 Q62 130 60 150 Q60 175 62 200"
                className="stroke-primary/30 fill-none"
                strokeWidth="8"
                strokeLinecap="round"
              />
            </svg>

            {/* Pain points */}
            {painPoints.map((point) => (
              <motion.button
                key={point.id}
                onClick={() => onSelectPainArea(point.label)}
                onMouseEnter={() => setHoveredPoint(point.id)}
                onMouseLeave={() => setHoveredPoint(null)}
                className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                style={{ left: `${point.x}%`, top: `${point.y}%` }}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.95 }}
              >
                {/* Pulsing ring */}
                <span className="absolute inset-0 rounded-full bg-destructive/30 pain-point-pulse" />
                
                {/* Core dot */}
                <span className="relative block w-4 h-4 rounded-full bg-destructive shadow-lg border-2 border-background" />
                
                {/* Tooltip */}
                {hoveredPoint === point.id && (
                  <motion.div
                    initial={{ opacity: 0, y: 5 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute left-1/2 -translate-x-1/2 -top-10 whitespace-nowrap glass-card px-3 py-1.5 text-sm font-medium z-10"
                  >
                    {point.label}
                    <span className="block text-xs text-primary mt-0.5">Yes, we help with this</span>
                  </motion.div>
                )}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PainPointsSection;
