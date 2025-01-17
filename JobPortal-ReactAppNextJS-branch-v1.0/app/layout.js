import "../public/css/plugins.css";
import "../public/css/style.css";
import "../public/css/templete.css";
import "../public/css/skin/skin-1.css";
import "../public/css/dark-layout.css";

import "./globals.css";

export const metadata = {
  title: "Radiantze Job Portal",
  description: "Radiantze Job Portal",
};

export default function DefaultRoute({ children }) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
