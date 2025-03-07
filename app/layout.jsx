import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Nav from "@components/Nav";
import { Toaster } from "react-hot-toast";

export const metadata = {
  title: "My Personal Portfolio | Ybon.dev",
  description: "My Personal Portfolio | Ybon.dev",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="body">
        <Nav />
        {children}
        <Toaster />
      </body>
    </html>
  );
};

export default layout;
