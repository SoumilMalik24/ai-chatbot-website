// src/app/layout.tsx
import "../styles/globals.css";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Gappe",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />  {/* ✅ Sticky Navbar here */}
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}
