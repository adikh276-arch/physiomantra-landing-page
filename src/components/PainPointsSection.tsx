import { motion } from 'framer-motion';
import painPointsModel from '@/assets/pain-points-model.png';

interface PainPointsSectionProps {
  onSelectPainArea: (area: string) => void;
}

const painPoints = [
  { 
    id: 'neck', 
    label: 'Neck', 
    description: 'Overcome cervical pain, chronic stiffness, and tension headaches.',
    position: { top: '12%', left: '45%' }
  },
  { 
    id: 'shoulder', 
    label: 'Shoulder', 
    description: 'Relief from frozen shoulder, rotator cuff injuries, and posture issues.',
    position: { top: '22%', left: '35%' }
  },
  { 
    id: 'lower-back', 
    label: 'Lower Back', 
    description: 'Address sciatica, disc problems, and chronic lower back pain.',
    position: { top: '42%', left: '42%' }
  },
  { 
    id: 'hip', 
    label: 'Hip', 
    description: 'Treatment for hip arthritis, bursitis, and mobility restrictions.',
    position: { top: '52%', left: '38%' }
  },
  { 
    id: 'knee', 
    label: 'Knee', 
    description: 'Recovery from ACL injuries, arthritis, and post-surgery rehabilitation.',
    position: { top: '72%', left: '42%' }
  },
  { 
    id: 'ankle', 
    label: 'Ankle', 
    description: 'Heal sprains, plantar fasciitis, and Achilles tendon issues.',
    position: { top: '92%', left: '44%' }
  },
];

const PainPointsSection = ({ onSelectPainArea }: PainPointsSectionProps) => {
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

        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-8 lg:gap-0">
          {/* Human Image with Pain Points */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative w-full max-w-sm lg:max-w-md xl:max-w-lg"
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
                  onClick={() => onSelectPainArea(point.label)}
                  initial={{ scale: 0, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1, type: 'spring', stiffness: 300 }}
                  whileHover={{ scale: 1.3 }}
                  whileTap={{ scale: 0.95 }}
                  className="absolute transform -translate-x-1/2 -translate-y-1/2 group cursor-pointer"
                  style={{ top: point.position.top, left: point.position.left }}
                  aria-label={`Select ${point.label} pain area`}
                >
                  {/* Pulsing ring */}
                  <span className="absolute inset-0 rounded-full bg-primary/40 animate-ping" />
                  
                  {/* Core dot - light blue from brand */}
                  <span className="relative block w-4 h-4 rounded-full bg-primary shadow-lg border-2 border-white" />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Pain Points Content List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex flex-col gap-6 lg:gap-8 lg:pl-8 xl:pl-16 w-full max-w-md"
          >
            {painPoints.map((point, index) => (
              <motion.button
                key={point.id}
                onClick={() => onSelectPainArea(point.label)}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ x: 8 }}
                className="text-left group cursor-pointer"
              >
                <h3 className="text-xl sm:text-2xl font-display font-semibold text-primary mb-1 group-hover:text-primary-foreground transition-colors">
                  {point.label}
                </h3>
                <p className="text-muted-foreground text-sm sm:text-base leading-relaxed">
                  {point.description}{' '}
                  <span className="text-primary font-medium group-hover:underline">
                    Know more
                  </span>
                </p>
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PainPointsSection;
