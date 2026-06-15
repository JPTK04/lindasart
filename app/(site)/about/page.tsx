import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import { PortableText } from "@portabletext/react";

export const revalidate = 60;

const QUERY = `*[_type == "about"][0] {
  title,
  profileImage,
  bio
}`;

export default async function AboutPage() {
  const data = await client.fetch(QUERY);

  if (!data) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center text-gray-500">
        About page content has not been set up yet. Please add it in the Sanity Studio.
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-6 py-12">
      <div className="flex flex-col md:flex-row gap-16 items-center md:items-start">
        {data.profileImage && (
          <div className="w-full md:w-1/3 shrink-0">
            <div className="relative aspect-[3/4] w-full bg-gray-50">
              <Image
                src={urlFor(data.profileImage).url()}
                alt={data.title || "About Me"}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          </div>
        )}
        
        <div className="w-full md:w-2/3 flex flex-col justify-center min-h-[400px]">
          <h1 className="text-3xl tracking-[0.2em] uppercase font-light mb-8">
            {data.title || "About"}
          </h1>
          
          {data.bio && (
            <div className="prose prose-gray prose-lg max-w-none opacity-80 leading-relaxed font-light">
              <PortableText value={data.bio} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
