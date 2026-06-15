import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

export default async function ImpressumPage() {
  const settings = await client.fetch(`*[_type == "settings"][0]`);

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 min-h-[50vh]">
      <h1 className="text-3xl font-light uppercase tracking-widest mb-12 opacity-80">Impressum</h1>
      {settings?.impressum ? (
        <div className="prose prose-sm md:prose-base prose-gray max-w-none text-gray-800">
          <PortableText value={settings.impressum} />
        </div>
      ) : (
        <p className="text-gray-500">Impressum details will appear here once added in Sanity.</p>
      )}
    </div>
  );
}
