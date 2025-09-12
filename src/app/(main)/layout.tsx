import Footer from "@/components/main/footer/footer";
import UserHeader from "@/components/main/user/user-header/user-header";
import CurrencyProvider from "@/contexts/currency-provider";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <CurrencyProvider>
      <UserHeader />
      {children}
      <Footer />
    </CurrencyProvider>
  );
}
