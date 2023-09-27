import "bootstrap/dist/css/bootstrap.min.css";
import "@/styles/globals.css";
import Nav from "./components/Nav";

export const metadata = {
  title: "My Personal Portfolio | Ybon.dev",
  description: "",
};

const layout = ({ children }) => {
  return (
    <html lang="en">
      <body className="body">
        <Nav />
        {children}
      </body>
    </html>
  );
};

export default layout;
