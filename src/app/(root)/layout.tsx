import Footer from "@/components/main/footer/footer";
import Header from "@/components/main/header/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header where="home" />
      {children}
      <Footer />
    </>
  );
}
