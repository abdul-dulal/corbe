import FooterThree from "@/src/components/footer/FooterThree";
import NavbarThree from "@/src/components/header/NavbarThree";
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
          <NavbarThree />
          {children}
          <FooterThree />
        </div>
      </body>
    </html>
  );
}
