import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";

import WorkSlider from "../../components/WorkSlider";

export const revalidate = 60;

const QUERY = `*[_type == "workPage"][0] {
  featuredWorks,
  references
}`;

export default async function WorkPage() {
  const workData = await client.fetch(QUERY);
  const references = workData?.references || [];
  const featuredWorksRaw = workData?.featuredWorks || [];

  // Resolve image URLs server-side
  const featuredWorks = featuredWorksRaw.map((work: any) => ({
    ...work,
    imageUrl: work.image ? urlFor(work.image).url() : null
  }));

  return (
    <div className="max-w-7xl mx-auto px-6 py-20">
      
      {/* Featured Works Slider Section */}
      <WorkSlider works={featuredWorks} />

      {/* References List */}
      <div className="max-w-4xl mx-auto">
        {references.length > 0 && (
          <h1 className="font-ztneue text-3xl md:text-4xl text-center mb-24 text-gray-500 tracking-wide">
            Weitere Referenzen
          </h1>
        )}
        
        {references.length > 0 ? (
          <div className="flex flex-col gap-10">
            {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
            {references.map((item: any, index: number) => (
              <div 
                key={item._key || index} 
                className="group flex flex-col md:flex-row md:items-baseline justify-between border-b border-gray-100 pb-8 transition-colors hover:border-gray-300"
              >
                <div className="mb-2 md:mb-0 md:max-w-[60%]">
                  {item.url ? (
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="font-sukhumvit text-xl md:text-2xl text-gray-500 hover:text-gray-900 transition-colors block"
                    >
                      {item.title}
                    </a>
                  ) : (
                    <h2 className="font-sukhumvit text-xl md:text-2xl text-gray-500">
                      {item.title}
                    </h2>
                  )}
                  {item.description && (
                    <p className="text-sm font-light tracking-widest text-gray-500 mt-2 uppercase">
                      {item.description}
                    </p>
                  )}
                </div>
                
                {item.url && (
                  <div className="mt-2 md:mt-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hidden md:block">
                    <a 
                      href={item.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sm font-light tracking-widest uppercase text-gray-500 hover:text-gray-900 transition-colors"
                    >
                      Zur Website ↗
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500 font-light">
            Noch keine Referenzen hinterlegt. Bitte füge diese im Sanity Studio hinzu.
          </div>
        )}
      </div>
    </div>
  );
}
