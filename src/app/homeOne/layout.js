import Navbar from "@/src/components/header/Navbar";

export default function HomeOneLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
