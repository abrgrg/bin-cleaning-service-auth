import './globals.css';

export const metadata = {
  title: 'Bin Cleaning Service',
  description: 'Affordable, reliable bin cleaning service across South Africa',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
