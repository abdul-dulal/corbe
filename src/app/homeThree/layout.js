"use client";
import FooterThree from "@/src/components/footer/FooterThree";
import NavbarThree from "@/src/components/header/NavbarThree";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
export default function HomeOneLayout({ children }) {
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
      <NavbarThree />
      {children}
      <FooterThree />
    </div>
  );
}
