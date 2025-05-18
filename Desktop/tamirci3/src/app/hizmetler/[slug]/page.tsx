'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

// Hizmet verileri
const services = {
  'camasir-makinesi': {
    title: 'Çamaşır Makinesi Tamiri',
    image: '/images/washing-machine.jpg',
    problems: [
      { title: 'Makine Su Almıyor', icon: '💧', description: 'Su giriş vanası, su hortumu veya su giriş elektrovanası arızası' },
      { title: 'Sıkma Yapmıyor', icon: '🔄', description: 'Motor, sürücü kayışı veya sıkma devresi arızası' },
      { title: 'Titreşim Fazla', icon: '📳', description: 'Denge ayarı, amortisör veya yay arızası' },
      { title: 'Program Değişmiyor', icon: '⚙️', description: 'Program düğmesi veya elektronik kart arızası' },
      { title: 'Su Tahliye Etmiyor', icon: '🚰', description: 'Tahliye pompası veya tahliye hortumu tıkanıklığı' }
    ],
    features: [
      { title: '10+ Yıllık Tecrübe', icon: '⭐' },
      { title: '7/24 Hizmet', icon: '⏰' },
      { title: 'Uygun Fiyat Garantisi', icon: '💰' }
    ]
  },
  'bulasik-makinesi': {
    title: 'Bulaşık Makinesi Tamiri',
    image: '/images/dishwasher.jpg',
    problems: [
      { title: 'Su Almıyor', icon: '💧', description: 'Su giriş vanası veya su giriş elektrovanası arızası' },
      { title: 'Yıkama Yapmıyor', icon: '🧼', description: 'Pompa veya motor arızası' },
      { title: 'Kurutma Çalışmıyor', icon: '🌡️', description: 'Isıtıcı veya kurutma devresi arızası' },
      { title: 'Program Değişmiyor', icon: '⚙️', description: 'Program düğmesi veya elektronik kart arızası' },
      { title: 'Su Tahliye Etmiyor', icon: '🚰', description: 'Tahliye pompası veya filtre tıkanıklığı' }
    ],
    features: [
      { title: '10+ Yıllık Tecrübe', icon: '⭐' },
      { title: '7/24 Hizmet', icon: '⏰' },
      { title: 'Uygun Fiyat Garantisi', icon: '💰' }
    ]
  },
  'buzdolabi': {
    title: 'Buzdolabı Tamiri',
    image: '/images/refrigerator.jpg',
    problems: [
      { title: 'Soğutmuyor', icon: '❄️', description: 'Kompresör veya gaz kaçağı' },
      { title: 'Aşırı Soğutuyor', icon: '🥶', description: 'Termostat veya sıcaklık sensörü arızası' },
      { title: 'Su Akıtıyor', icon: '💧', description: 'Su tahliye borusu tıkanıklığı' },
      { title: 'Buz Yapıyor', icon: '🧊', description: 'Defrost sistemi arızası' },
      { title: 'Gürültü Yapıyor', icon: '🔊', description: 'Kompresör veya fan arızası' }
    ],
    features: [
      { title: '10+ Yıllık Tecrübe', icon: '⭐' },
      { title: '7/24 Hizmet', icon: '⏰' },
      { title: 'Uygun Fiyat Garantisi', icon: '💰' }
    ]
  }
};

const otherProblems = [
  { title: 'Çalışmıyor', icon: '🔌', description: 'Cihaz hiç çalışmıyor veya güç almıyor.' },
  { title: 'Sesli Çalışıyor', icon: '🔊', description: 'Normalden fazla ses çıkarıyor.' },
  { title: 'Isıtmıyor/Soğutmuyor', icon: '🌡️', description: 'Beklenen ısıtma veya soğutma yapılmıyor.' },
  { title: 'Koku Yapıyor', icon: '👃', description: 'Cihazdan kötü koku geliyor.' },
  { title: 'Düğmeler Çalışmıyor', icon: '🛑', description: 'Kontrol paneli veya tuşlar tepki vermiyor.' },
  { title: 'Su Kaçağı', icon: '💧', description: 'Cihazdan su sızıyor.' },
  { title: 'Elektrik Kaçağı', icon: '⚡', description: 'Cihazda elektrik kaçağı hissediliyor.' },
  { title: 'Diğer Arızalar', icon: '❓', description: 'Farklı veya nadir görülen arızalar.' }
];

const ServicePage = () => {
  const params = useParams();
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const service = services[params.slug as keyof typeof services];
  const isOther = params.slug === 'digerleri' || !service;

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  if (isOther) {
    return (
      <div className="min-h-screen">
        <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
          {/* Canlı gradient arka plan */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-fuchsia-500 to-pink-300" />
          <div className="absolute inset-0 pointer-events-none z-0">
            <motion.div
              className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-40 left-[-20%] top-[-30%]"
              animate={{
                x: [0, 120, 0],
                y: [0, 100, 0],
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-[100px] opacity-30 right-[-15%] bottom-[-20%]"
              animate={{
                x: [0, -100, 0],
                y: [0, -80, 0],
                scale: [1, 1.18, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            />
          </div>
          <div className="relative z-10 w-full flex items-center justify-center h-full">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-lg"
            >
              Diğer Ev Aletleri & Genel Arızalar
            </motion.h1>
          </div>
        </div>
        <section className="py-16 bg-white relative overflow-hidden">
          {/* Daha canlı animasyonlu arka plan */}
          <motion.div
            className="absolute inset-0 pointer-events-none z-0"
            aria-hidden
          >
            {/* Canlı gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-fuchsia-500 to-yellow-400 opacity-40 mix-blend-multiply" />
            {/* Büyük ve doygun blur toplar */}
            <motion.div
              className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-60 left-[-20%] top-[-30%]"
              animate={{
                x: [0, 120, 0],
                y: [0, 100, 0],
                scale: [1, 1.25, 1],
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-[100px] opacity-50 right-[-15%] bottom-[-20%]"
              animate={{
                x: [0, -100, 0],
                y: [0, -80, 0],
                scale: [1, 1.18, 1],
              }}
              transition={{
                duration: 12,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            />
            <motion.div
              className="absolute w-[350px] h-[350px] bg-yellow-400 rounded-full blur-[90px] opacity-40 left-[40%] top-[60%]"
              animate={{
                x: [0, 80, 0],
                y: [0, -60, 0],
                scale: [1, 1.13, 1],
              }}
              transition={{
                duration: 14,
                repeat: Infinity,
                repeatType: 'mirror',
                ease: 'easeInOut',
              }}
            />
          </motion.div>
          <div className="container mx-auto px-4 relative z-10">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12"
            >
              Sık Karşılaşılan Problemler
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherProblems.map((problem, index) => (
                <div
                  key={problem.title}
                  className="bg-gray-50 p-6 rounded-lg shadow-lg cursor-pointer transition hover:bg-blue-50"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <div className="flex items-center gap-3">
                    <div className="text-4xl mb-4">{problem.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                  </div>
                  <AnimatePresence>
                    {openIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <p className="text-gray-600 mt-2">{problem.description}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            className="fixed bottom-8 right-8 z-50"
          >
            <a
              href="https://wa.me/905415302349"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center"
            >
              <span className="mr-2">WhatsApp ile İletişim</span>
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
              </svg>
            </a>
          </motion.div>
        )}
      </div>
    );
  }

  if (!service) {
    return <div>Hizmet bulunamadı</div>;
  }

  return (
    <div className="min-h-screen">
      {/* Hero Bölümü */}
      <div className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        {/* Canlı gradient arka plan */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-fuchsia-500 to-pink-300" />
        <div className="absolute inset-0 pointer-events-none z-0">
          <motion.div
            className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-40 left-[-20%] top-[-30%]"
            animate={{
              x: [0, 120, 0],
              y: [0, 100, 0],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-[100px] opacity-30 right-[-15%] bottom-[-20%]"
            animate={{
              x: [0, -100, 0],
              y: [0, -80, 0],
              scale: [1, 1.18, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        </div>
        <div className="relative z-10 w-full flex items-center justify-center h-full">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-white text-center px-4 drop-shadow-lg"
          >
            {service.title}
          </motion.h1>
        </div>
      </div>

      {/* Sık Karşılaşılan Problemler */}
      <section className="py-16 bg-white relative overflow-hidden">
        {/* Daha canlı animasyonlu arka plan */}
        <motion.div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden
        >
          {/* Canlı gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-fuchsia-500 to-yellow-400 opacity-40 mix-blend-multiply" />
          {/* Büyük ve doygun blur toplar */}
          <motion.div
            className="absolute w-[600px] h-[600px] bg-blue-500 rounded-full blur-[120px] opacity-60 left-[-20%] top-[-30%]"
            animate={{
              x: [0, 120, 0],
              y: [0, 100, 0],
              scale: [1, 1.25, 1],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute w-[400px] h-[400px] bg-pink-500 rounded-full blur-[100px] opacity-50 right-[-15%] bottom-[-20%]"
            animate={{
              x: [0, -100, 0],
              y: [0, -80, 0],
              scale: [1, 1.18, 1],
            }}
            transition={{
              duration: 12,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
          <motion.div
            className="absolute w-[350px] h-[350px] bg-yellow-400 rounded-full blur-[90px] opacity-40 left-[40%] top-[60%]"
            animate={{
              x: [0, 80, 0],
              y: [0, -60, 0],
              scale: [1, 1.13, 1],
            }}
            transition={{
              duration: 14,
              repeat: Infinity,
              repeatType: 'mirror',
              ease: 'easeInOut',
            }}
          />
        </motion.div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Sık Karşılaşılan Problemler
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.problems.map((problem, index) => (
              <div
                key={problem.title}
                className="bg-gray-50 p-6 rounded-lg shadow-lg cursor-pointer transition hover:bg-blue-50"
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
              >
                <div className="flex items-center gap-3">
                  <div className="text-4xl mb-4">{problem.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{problem.title}</h3>
                </div>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="text-gray-600 mt-2">{problem.description}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Neden Bizi Tercih Etmelisiniz */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl font-bold text-center mb-12"
          >
            Neden Bizi Tercih Etmelisiniz?
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="text-4xl mb-4">👨‍🔧</div>
              <h3 className="text-xl font-semibold mb-2">Tecrübe</h3>
              <p className="text-gray-600">10+ yıllık sektör tecrübesi</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">⚡</div>
              <h3 className="text-xl font-semibold mb-2">Hız</h3>
              <p className="text-gray-600">Aynı gün servis hizmeti</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-semibold mb-2">Fiyat</h3>
              <p className="text-gray-600">Uygun fiyat garantisi</p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-center"
            >
              <div className="text-4xl mb-4">✅</div>
              <h3 className="text-xl font-semibold mb-2">Garanti</h3>
              <p className="text-gray-600">6 ay parça garantisi</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Güven Simgeleri */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {service.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Sabit İletişim Butonu */}
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          className="fixed bottom-8 right-8 z-50"
        >
          <a
            href="https://wa.me/905415302349"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center"
          >
            <span className="mr-2">WhatsApp ile İletişim</span>
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </a>
        </motion.div>
      )}
    </div>
  );
};

export default ServicePage; 