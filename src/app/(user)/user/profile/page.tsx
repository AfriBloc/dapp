import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Profile",
};

export default function page() {
  return (
    <main className="text-Gray-900 bg-white">
      <section className="col-start container gap-5 py-14">
        <h1 className="text-2xl font-bold lg:text-[40px] lg:leading-[100%]">
          Profile
        </h1>
      </section>
    </main>
  );
}
