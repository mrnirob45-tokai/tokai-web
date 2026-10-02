import "./globals.css";

export const metadata = {
  title: 'টোকাই | Tokai.com.bd',
  description: 'মানবতা ছড়িয়ে দিন টোকাইয়ের মাধ্যমে',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="bn">
      <body>{children}</body>
    </html>
  );
}
