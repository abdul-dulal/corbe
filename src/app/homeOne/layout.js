import { Unbounded } from "next/font/google";
import FooterOne from "@/src/components/footer/FooterOne";
import Navbar from "@/src/components/header/Navbar";

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
          <Navbar />
          {children}
          <FooterOne />
        </div>
      </body>
    </html>
  );
}
