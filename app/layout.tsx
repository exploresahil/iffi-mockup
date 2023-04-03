import "../styles/styles.css";

import Header from "../components/Header/Header";
import Loader from "../components/Loader/Loader";

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
  return (
    <html lang="en">
      <body>
        <Loader />
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
