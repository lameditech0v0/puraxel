import PageTransision from "components/features/PageTransision";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";

export default function Layout({ children }) {
  return (
    <div className="wrap" id="wrap">
      <PageTransision>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </PageTransision>
    </div>
  );
}
