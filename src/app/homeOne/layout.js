"use client";
import FooterOne from "@/src/components/footer/FooterOne";
import Navbar from "@/src/components/header/Navbar";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
export default function HomeOneLayout({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      AOS.init({
        duration: 600,
        offset: 100,
        easing: "ease-in-out",
        once: true,
      });
    }
  }, []);
  return (
    <div>
      <Navbar />
      {children}
      <FooterOne />
    </div>
  );
}
