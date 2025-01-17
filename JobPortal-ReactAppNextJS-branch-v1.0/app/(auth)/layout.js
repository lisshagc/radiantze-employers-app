import "../../public/css/plugins.css";
import "../../public/css/style.css";
import "../../public/css/templete.css";
import "../../public/css/skin/skin-1.css";
import "../../public/css/dark-layout.css";
import { GoogleOAuthProvider } from '@react-oauth/google';

import "../globals.css";
export default function LoginLayout({ children }) {
  return <GoogleOAuthProvider clientId="359104740448-6ukln411roia93eapp8ur1jhf84qt4vp.apps.googleusercontent.com">{children}</GoogleOAuthProvider>;
}
