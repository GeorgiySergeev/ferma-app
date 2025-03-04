import ClientInit from '@/components/client-init';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { CartProvider } from '@/context/CartContext';

export const metedata = {
  title: 'FERMA | Власна молочна ферма',
  description: 'Власна молочна ферма. Молочна продукція.',
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
