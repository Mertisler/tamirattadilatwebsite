'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const services = [
  {
    title: 'Çamaşır Makinesi',
    icon: '🧺',
    description: 'Tüm marka çamaşır makineleri için teknik servis',
    slug: 'camasir-makinesi'
  },
  {
    title: 'Bulaşık Makinesi',
    icon: '🍽️',
    description: 'Bulaşık makinesi tamir ve bakım hizmetleri',
    slug: 'bulasik-makinesi'
  },
  {
    title: 'Buzdolabı',
    icon: '❄️',
    description: 'Buzdolabı arıza ve bakım servisi',
    slug: 'buzdolabi'
  },
  {
    title: 'Elektrikli Süpürge',
    icon: '🧹',
    description: 'Elektrikli süpürge tamir ve bakım',
    slug: 'elektrikli-supurge'
  },
  {
    title: 'Fırın',
    icon: '🔥',
    description: 'Fırın tamir ve bakım hizmetleri',
    slug: 'firin'
  },
  {
    title: 'Kurutma Makinesi',
    icon: '🌀',
    description: 'Kurutma makinesi arıza ve bakım',
    slug: 'kurutma-makinesi'
  },
  {
    title: 'Kombi',
    icon: '♨️',
    description: 'Kombi arıza ve bakım servisi',
    slug: 'kombi'
  },
  {
    title: 'Klima',
    icon: '🌬️',
    description: 'Klima tamir ve bakım hizmetleri',
    slug: 'klima'
  },
  {
    title: 'Mikrodalga',
    icon: '📡',
    description: 'Mikrodalga fırın tamir ve bakım',
    slug: 'mikrodalga'
  },
  {
    title: 'Ocak',
    icon: '🍳',
    description: 'Ocak tamir ve bakım hizmetleri',
    slug: 'ocak'
  },
  {
    title: 'Diğerleri',
    icon: '🔧',
    description: 'Diğer tüm ev aletleri için servis',
    slug: 'digerleri'
  }
];

const ServiceCategories = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-center mb-12"
        >
          Hizmet Kategorilerimiz
        </motion.h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Link href={`/hizmetler/${service.slug}`} key={service.title}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow cursor-pointer"
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceCategories; 