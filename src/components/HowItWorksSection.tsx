import { motion } from 'framer-motion';
import { Video, FileText, UserCheck, Shield } from 'lucide-react';

const steps = [
  {
    icon: Video,
    number: '01',
    title: 'Online Consultation',
    description: 'Connect with a licensed physiotherapist via video call.',
  },
  {
    icon: FileText,
    number: '02',
    title: 'Personalised Care Plan',
    description: 'Receive a tailored treatment program for your condition.',
  },
  {
    icon: UserCheck,
    number: '03',
    title: 'Guided Home Sessions',
    description: 'Follow expert-led exercises in the comfort of your home.',
  },
  {
    icon: Shield,
    number: '04',
    title: 'Doctor Supervision',
    description: 'Continuous monitoring and adjustments by medical professionals.',
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="section-padding bg-secondary/30">
      <div className="container-padding max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="heading-display text-3xl sm:text-4xl lg:text-5xl text-foreground mb-4">
            Your recovery, <span className="gradient-text">simplified</span>
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${index < steps.length - 1 ? 'step-connector' : ''}`}
            >
              <div className="text-center">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="relative mx-auto mb-6"
                >
                  <div className="w-20 h-20 rounded-full bg-background border-2 border-primary/20 flex items-center justify-center shadow-card mx-auto">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <span className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {step.number}
                  </span>
                </motion.div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {step.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
