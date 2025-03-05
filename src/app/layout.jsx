import ClientInit from '@/components/client-init';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { CartProvider } from '@/context/CartContext';

export const metadata = {
  title: 'FERMA | Власна молочна ферма',
  description: 'Власна молочна ферма в Закарпатті. Натуральна молочна продукція найвищої якості.',
  keywords: ['ферма', 'молочні продукти', 'натуральні продукти', 'фермерське господарство'],
  openGraph: {
    title: 'FERMA - Сервіс турботи',
    description:
      'Власне фермерське господарство з натуральними молочними продуктами найвищої якості',
    url: 'https://ferma.com.ua',
    siteName: 'FERMA',
    images: [
      {
        url: '/images/hero/hero-farm.jpeg',
        width: 1200,
        height: 630,
        alt: 'FERMA - Сервіс турботи',
      },
    ],
    locale: 'uk_UA',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="uk">
      <body suppressHydrationWarning={true}>
        <CartProvider>
          <ClientInit />
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </CartProvider>
      </body>
    </html>
  );
}
