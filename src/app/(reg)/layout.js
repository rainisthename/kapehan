import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import "../globals.css";

export const metadata = {
  title: "Home - Kapehan",
  description: "Tara kape tayo!",
};

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}



