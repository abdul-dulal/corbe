import FooterOne from "@/src/components/footer/FooterOne";
import Navbar from "@/src/components/header/Navbar";

export default function HomeOneLayout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <FooterOne />
    </div>
  );
}
