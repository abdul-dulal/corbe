import FooterTwo from "@/src/components/footer/FooterTwo";
import NavbarTwo from "@/src/components/header/NavbarTwo";
import { Unbounded } from "next/font/google";

export const unbounded = Unbounded({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function HomeOneLayout({ children }) {
  return (
    <html lang="en">
      <body className={unbounded.className}>
        <div>
          <NavbarTwo />
          {children}
          <FooterTwo />
        </div>
      </body>
    </html>
  );
}
