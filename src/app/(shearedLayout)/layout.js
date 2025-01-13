import NavbarTwo from "@/src/components/header/NavbarTwo";

export default function ShearedLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div>
          <NavbarTwo />
          {children}
        </div>
      </body>
    </html>
  );
}
