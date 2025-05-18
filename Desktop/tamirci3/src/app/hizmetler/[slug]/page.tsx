// app/[slug]/page.tsx
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ProblemList from '@/components/ProblemList';
import ServiceHero from '@/components/ServiceHero';
import ServiceFeatures from '@/components/ServiceFeatures';

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

// Metadata tanımı
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const service = services[params.slug as keyof typeof services];
  const isOther = params.slug === 'digerleri';

  if (!service && !isOther) {
    return {
      title: 'Sayfa Bulunamadı | Yılmaz Teknik',
      description: 'Aradığınız hizmet sayfası bulunamadı.',
    };
  }

  return {
    title: service ? `${service.title} | Yılmaz Teknik` : 'Diğer Arızalar | Yılmaz Teknik',
    description: service 
      ? `${service.title} - Yılmaz Teknik ile hızlı ve güvenilir servis.` 
      : 'Diğer ev aletleri ve genel arızalar için teknik servis hizmetleri.',
  };
}

// Statik sayfaları oluştur
export async function generateStaticParams() {
  return Object.keys(services).map((slug) => ({ slug }));
}

// Build davranışı
export const dynamic = 'force-static';
export const revalidate = 3600;

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = services[params.slug as keyof typeof services];
  const isOther = params.slug === 'digerleri';

  if (!service && !isOther) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <ServiceHero title={service?.title || 'Diğer Arızalar'} isOther={isOther} />

      <section className="relative py-16 bg-white">
        <div className="absolute inset-0 pointer-events-none z-0" aria-hidden>
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-fuchsia-500 to-yellow-400 opacity-40 mix-blend-multiply" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <h2 className="text-3xl font-bold text-center mb-12">Sık Karşılaşılan Problemler</h2>
          <ProblemList problems={isOther ? otherProblems : service!.problems} />
        </div>
      </section>

      <ServiceFeatures features={service?.features || []} />
    </div>
  );
}
