import "./globals.css";

export const metadata = {
  title: "Teknik Servis - Beyaz Eşya Tamir ve Bakım",
  description: "Profesyonel beyaz eşya tamir ve bakım hizmetleri. Çamaşır makinesi, bulaşık makinesi, buzdolabı ve daha fazlası için teknik servis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body>{children}</body>
    </html>
  );
}
