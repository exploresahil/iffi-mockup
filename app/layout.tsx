"use client";

import { useEffect, useRef } from "react";

import { gsap } from "gsap";

import "../styles/styles.css";

import Header from "../components/Header/Header";

export const metadata = {
  title: "IFFI | Website",
  description: "IFFI is a ...",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const loaderRef = useRef(null);
  const loadContainerRef = useRef(null);
  const titleRef = useRef(null);

  useEffect(() => {
    const loader = loaderRef.current;
    const loadContainer = loadContainerRef.current;
    const title = titleRef.current;

    gsap.to(title, {
      opacity: 0,
      ease: "power2.in",
      delay: 2,
    });
    gsap.to(loader, {
      width: "100%",
      ease: "power2.in",
      duration: 2,
    });
    gsap.to(loadContainer, {
      opacity: 0,
      delay: 2,
      ease: "power2.in",
      display: "none",
    });
  }, []);

  return (
    <html lang="en">
      <body>
        <div
          className="Dhidden fixed flex flex-col justify-center top-0 left-0 w-[100vw] h-[100vh] bg-[#E9E1D3] z-[999] pointer-events-none"
          ref={loadContainerRef}
        >
          <div className="mx-[8vw] flex flex-col gap-0">
            <h1 className="text-[#C92D1F] text-[200px]" ref={titleRef}>
              IFFI
            </h1>
            <div className="h-2 w-[0%] bg-[#C92D1F]" ref={loaderRef} />
          </div>
          <div className="c-noise" />
          <div className="c-old" />
        </div>
        <div>
          <Header />
          <main className="mt-[80px]">
            {children}
            <div className="c-noise" />
            <div className="c-old" />
          </main>
        </div>
      </body>
    </html>
  );
}
