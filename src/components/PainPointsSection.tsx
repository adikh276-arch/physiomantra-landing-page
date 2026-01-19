import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import painPointsModel from '@/assets/pain-points-model.png';

interface PainPointsSectionProps {
  onSelectPainArea: (area: string) => void;
}

const painPoints = [
  { 
    id: 'neck', 
    label: 'Neck', 
    description: 'Overcome cervical pain, chronic stiffness, and tension headaches.',
    details: 'Our specialists help with cervical spondylosis, whiplash injuries, and tech neck from prolonged screen time.',
    position: { top: '12%', left: '45%' }
  },
  { 
    id: 'shoulder', 
    label: 'Shoulder', 
    description: 'Relief from frozen shoulder, rotator cuff injuries, and posture issues.',
    details: 'Targeted therapy for impingement syndrome, adhesive capsulitis, and sports-related shoulder injuries.',
    position: { top: '22%', left: '35%' }
  },
  { 
    id: 'lower-back', 
    label: 'Lower Back', 
    description: 'Address sciatica, disc problems, and chronic lower back pain.',
    details: 'Expert care for herniated discs, lumbar stenosis, and work-related back strain.',
    position: { top: '42%', left: '42%' }
  },
  { 
    id: 'hip', 
    label: 'Hip', 
    description: 'Treatment for hip arthritis, bursitis, and mobility restrictions.',
    details: 'Comprehensive rehab for hip replacements, labral tears, and age-related joint stiffness.',
    position: { top: '52%', left: '38%' }
  },
  { 
    id: 'knee', 
    label: 'Knee', 
    description: 'Recovery from ACL injuries, arthritis, and post-surgery rehabilitation.',
    details: 'Specialized programs for meniscus tears, ligament reconstruction, and knee replacement recovery.',
    position: { top: '72%', left: '42%' }
  },
  { 
    id: 'ankle', 
    label: 'Ankle', 
    description: 'Heal sprains, plantar fasciitis, and Achilles tendon issues.',
    details: 'Effective treatment for chronic ankle instability, stress fractures, and sports injuries.',
    position: { top: '92%', left: '44%' }
  },
];

const PainPointsSection = ({ onSelectPainArea }: PainPointsSectionProps) => {
  const [activePoint, setActivePoint] = useState<string>('neck');

  const activeData = painPoints.find(p => p.id === activePoint);

  return (
    <section className="section-padding bg-gradient-to-b from-background to-secondary/30 overflow-hidden">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            From Aches to Chronic Pain
          </h2>
          <p className="gradient-text text-2xl sm:text-3xl lg:text-4xl font-display font-medium">
            We've Got You Covered
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16">
          {/* Human Image with Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-xs sm:max-w-sm lg:max-w-md"
          >
            <div className="relative">
              <img 
                src={painPointsModel} 
                alt="Body pain points illustration" 
                className="w-full h-auto object-contain"
              />
              
              {/* Pain point markers on the image */}
              {painPoints.map((point, index) => (
                <motion.button
                  key={point.id}
                  onClick={() => setActivePoint(point.id)}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 300 }}
                  whileHover={{ scale: 1.4 }}
                  whileTap={{ scale: 0.95 }}
                  className={`absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-all duration-300 ${
                    activePoint === point.id ? 'z-20' : 'z-10'
                  }`}
                  style={{ top: point.position.top, left: point.position.left }}
                  aria-label={`Select ${point.label} pain area`}
                >
                  {/* Pulsing ring - only for active */}
                  {activePoint === point.id && (
                    <motion.span 
                      className="absolute inset-[-8px] rounded-full bg-primary/30"
                      animate={{ scale: [1, 1.5, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  )}
                  
                  {/* Core dot */}
                  <span className={`relative block rounded-full shadow-lg border-2 border-white transition-all duration-300 ${
                    activePoint === point.id 
                      ? 'w-5 h-5 bg-primary ring-4 ring-primary/20' 
                      : 'w-3.5 h-3.5 bg-primary/70 hover:bg-primary'
                  }`} />
                  
                  {/* Label on hover/active */}
                  <AnimatePresence>
                    {activePoint === point.id && (
                      <motion.span
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -10 }}
                        className="absolute left-full ml-3 top-1/2 -translate-y-1/2 whitespace-nowrap bg-primary text-primary-foreground text-xs font-medium px-2 py-1 rounded-full"
                      >
                        {point.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Active Pain Point Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="w-full max-w-md lg:max-w-lg"
          >
            {/* Pain point selector tabs */}
            <div className="flex flex-wrap gap-2 mb-8">
              {painPoints.map((point) => (
                <button
                  key={point.id}
                  onClick={() => setActivePoint(point.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                    activePoint === point.id
                      ? 'bg-primary text-primary-foreground shadow-md'
                      : 'bg-secondary/50 text-muted-foreground hover:bg-secondary hover:text-foreground'
                  }`}
                >
                  {point.label}
                </button>
              ))}
            </div>

            {/* Active content card */}
            <AnimatePresence mode="wait">
              {activeData && (
                <motion.div
                  key={activeData.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="glass-card p-8"
                >
                  <motion.h3 
                    className="text-3xl sm:text-4xl font-display font-bold text-primary mb-4"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.1 }}
                  >
                    {activeData.label}
                  </motion.h3>
                  
                  <motion.p 
                    className="text-foreground text-lg mb-3 font-medium"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.15 }}
                  >
                    {activeData.description}
                  </motion.p>
                  
                  <motion.p 
                    className="text-muted-foreground mb-6 leading-relaxed"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    {activeData.details}
                  </motion.p>
                  
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.25 }}
                  >
                    <Button 
                      variant="hero" 
                      size="lg"
                      onClick={() => onSelectPainArea(activeData.label)}
                      className="group"
                    >
                      Get help for {activeData.label.toLowerCase()} pain
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
