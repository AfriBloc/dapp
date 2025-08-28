import AppLogo from "@/components/ui/app-logo/app-logo";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex min-h-screen flex-col gap-2">
      <div className="border-Gray-100 w-full border-b px-4 py-3">
        <AppLogo />
      </div>

      <section className="flex flex-1 items-center justify-center overflow-hidden">
        {children}
      </section>
    </section>
  );
}
