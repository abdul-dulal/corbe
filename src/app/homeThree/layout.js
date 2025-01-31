"use client";
import FooterThree from "@/src/components/footer/FooterThree";
import NavbarThree from "@/src/components/header/NavbarThree";

export default function HomeOneLayout({ children }) {
  return (
    <div>
      <NavbarThree />
      {children}
      <FooterThree />
    </div>
  );
}
