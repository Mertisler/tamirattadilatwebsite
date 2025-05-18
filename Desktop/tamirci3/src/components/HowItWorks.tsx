'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    title: 'Arıza Bildir',
    description: 'Web sitemiz veya telefon ile arızanızı bize bildirin',
    icon: '📱'
  },
  {
    title: 'Ustamız Gelsin',
    description: 'En kısa sürede adresinize geliyoruz',
    icon: '🚗'
  },
  {
    title: 'Sorun Çözülsün',
    description: 'Profesyonel ekibimiz sorununuzu çözüyor',
    icon: '🔧'
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Nasıl Çalışırız?
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="text-center"
            >
              <div className="bg-blue-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-3xl">{step.icon}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks; 