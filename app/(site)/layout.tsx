import Header from "../components/Header";
import Footer from "../components/Footer";
import { client } from "@/sanity/lib/client";

export const revalidate = 60;

export default async function SiteLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const settings = await client.fetch(`*[_type == "settings"][0]`);

  return (
    <>
      <Header />
      <main className="flex-grow pt-[9.5rem]">
        {children}
      </main>
      <Footer settings={settings} />
    </>
  );
}
