import Navbar from "@/components/ui/navbar";
import Footer from "@/components/ui/footer";

export const metadata = {
  title: "Mediar",
  description: "Generated by Digitson",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="d-flex flex-column min-vh-100">
        <Navbar />

        {children}

        <Footer />
      </body>
    </html>
  );
}
