import PageTransision from "components/features/PageTransision";
import Footer from "components/footer/Footer";
import Header from "components/header/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <div className="wrap" id="wrap">
        <PageTransision>
          <main id="main">{children}</main>
        </PageTransision>
      </div>
      <Footer />
    </>
  );
}
