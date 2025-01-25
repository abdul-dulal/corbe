"use client";
import { useEffect } from "react";
import FooterTwo from "@/src/components/footer/FooterTwo";
import NavbarTwo from "@/src/components/header/NavbarTwo";
import "aos/dist/aos.css";
import AOS from "aos";
export default function ShearedLayout({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <div>
      <NavbarTwo />
      {children}
      <FooterTwo />
    </div>
  );
}
