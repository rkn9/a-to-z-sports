import "swiper/css";
import "swiper/css/pagination";
import "@/styles/components.css";
import "@/styles/page.css";
import "@/styles/responsive.css";
import dynamic from "next/dynamic";

const Header = dynamic(() => import("@/components/Header"));
const Footer = dynamic(() => import("@/components/Footer"));
const AllCategoryBtn = dynamic(() =>
  import("@/components/AllCategoryBtn/AllCategoryBtn")
);

import Providers from "./StoreProvider";

export const metadata = {
  title: "Home",
  description: "Home Page",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Header />
          {children}
          <Footer />
          <AllCategoryBtn />
        </Providers>
      </body>
    </html>
  );
}
