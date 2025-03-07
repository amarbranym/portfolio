import Providers from "@/components/providers";
import "./globals.css";
import Header from "@/components/sections/Header";



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` antialiased`}
      >
        <Providers>
          <div className=" relative max-w-[1200px]  w-full mx-auto">
            {children}
          </div>
        </Providers>
      </body>
    </html>
  );
}
