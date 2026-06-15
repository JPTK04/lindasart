import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

export const revalidate = 60;

const QUERY = `*[_type == "series" && slug.current == $slug][0] {
  title,
  gallery
}`;

export default async function SeriesDetail({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = await client.fetch(QUERY, { slug });

  if (!data) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-12 text-center">
        <Link href="/" className="text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity mb-4 inline-block">
          ← Back to Home
        </Link>
        <h1 className="text-3xl tracking-[0.2em] uppercase font-light mt-4">{data.title}</h1>
      </div>

      {data.gallery && data.gallery.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {data.gallery.map((image: any, index: number) => (
            <div key={index} className="relative aspect-[3/4] w-full bg-gray-50">
              <Image
                src={urlFor(image).url()}
                alt={`${data.title} - Image ${index + 1}`}
                fill
                className="object-cover"
                unoptimized
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-20">
          No images uploaded for this series yet.
        </div>
      )}
    </div>
  );
}
