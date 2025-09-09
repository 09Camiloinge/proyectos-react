import "./globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Mi App en Next.js",
  description: "Práctica con listas y API",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
