import "../../public/css/plugins.css";
import "../../public/css/style.css";
import "../../public/css/templete.css";
import "../../public/css/skin/skin-1.css";
import "../../public/css/dark-layout.css";

import "../globals.css";
import HeaderComponent from "@/app/components/common/HeaderComponent";
import FooterComponent from "@/app/components/common/FooterComponent";

export const metadata = {
  title: "Radiantze Job Portal",
  description: "Radiantze Job Portal",
};

export default function MainLayout({ children }) {
  return (
    <>
      <HeaderComponent />
      <main>{children}</main>
      <FooterComponent />
    </>
  );
}
