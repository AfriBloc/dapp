import Footer from "@/components/main/footer/footer";
import UserHeader from "@/components/main/user/user-header/user-header";
import { Providers } from "@/contexts/providers";

export default function UserLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers>
      <UserHeader />
      {children}
      <Footer />
    </Providers>
  );
}
