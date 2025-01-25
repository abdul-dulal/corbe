"use client";
import FooterOne from "@/src/components/footer/FooterOne";
import Navbar from "@/src/components/header/Navbar";
import { useEffect } from "react";
import "aos/dist/aos.css";
import AOS from "aos";
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
      <Navbar />
      {children}
      <FooterOne />
    </div>
  );
}
