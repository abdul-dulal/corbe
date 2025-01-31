import FooterTwo from "@/src/components/footer/FooterTwo";
import NavbarTwo from "@/src/components/header/NavbarTwo";

export default function ShearedLayout({ children }) {
  return (
    <div>
      <NavbarTwo />
      {children}
      <FooterTwo />
    </div>
  );
}
