import { Unbounded } from "next/font/google";
import "./globals.css";

export const metadata = {
  title: "Corbe - Creative Digital Agency Reactjs & Nextjs Template",
};
export const unbounded = Unbounded({
  weight: ["300", "400", "500", "600", "700"],
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={unbounded.className}>
        <div>{children}</div>
      </body>
    </html>
  );
}
