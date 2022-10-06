import Footer from "components/footer/Footer";
import Header from "components/header/Header";

export default function Layout({ children }) {
  return (
    <div className="wrap" id="wrap">
      <Header />
      <main style={{ background: "yellow" }}>{children}</main>
      <Footer />
    </div>
  );
}
