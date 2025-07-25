import "./globals.css";
import { Outfit, Ovo } from "next/font/google";

const outfit = Outfit({
  subsets: ["latin"], weight: ["400", "500", "600", "700"]
});

const ovo = Ovo({
  subsets: ["latin"], weight: ["400"]
});

export const metadata = {
  title: "Portfolio - Palash",
  description: "",
};

export default function RootLayout({ children }) {
  return (
   <html
      lang="en"
      className={`scroll-smooth`}
    >
      <body
        // Remove any conflicting background/color classes from here.
        // The html tag handles the main background/text color.
        className={`${outfit.variable} ${ovo.variable} 
                  antialiased leading-8 overflow-x-hidden dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
