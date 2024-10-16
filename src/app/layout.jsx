import "./globals.css";
import Header from "../components/header";

export const metadata = {
  title: "LN Challenge",
  description: "La Nación Challenge",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <Header />
        {children}
      </body>
    </html>
  );
}
