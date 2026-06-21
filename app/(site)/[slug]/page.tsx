import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PortableText } from '@portabletext/react';

export const revalidate = 60;

const QUERY = `*[_type == "homePage"][0].modules[_type == "editorialModule" && slug.current == $slug][0] {
  title,
  subtitle,
  imageLeft,
  imageRight,
  masonryImages,
  personalInfo,
  reviews
}`;

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function EditorialDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const data = await client.fetch(QUERY, { slug });

  if (!data) {
    notFound();
  }

  // Combine cover images and masonry images if desired, 
  // but the user specified "x weitere bilder ... die als mansory grid angeordnet werden"
  // So we render the masonryImages in the grid.
  const images = data.masonryImages || [];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <div className="mb-16 text-center">
        <Link 
          href="/" 
          className="text-xs uppercase tracking-widest opacity-50 hover:opacity-100 transition-opacity mb-4 inline-block font-sans"
        >
          ← Zurück
        </Link>
        
        <h1 
          className="text-3xl md:text-4xl tracking-[0.2em] uppercase font-light mt-4 text-gray-500"
          style={{ fontFamily: '"Sukhumvit Set", sans-serif' }}
        >
          {data.title}
        </h1>
        {data.subtitle && (
          <p 
            className="mt-2 text-xs md:text-sm tracking-widest text-gray-500 uppercase font-light"
            style={{ fontFamily: '"Sukhumvit Set", sans-serif' }}
          >
            {data.subtitle}
          </p>
        )}
      </div>

      {images.length > 0 ? (
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
          {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
          {images.map((image: any, index: number) => {
            return (
              <div 
                key={index} 
                className="break-inside-avoid mb-8 overflow-hidden bg-gray-50 relative"
              >
                <img
                  src={urlFor(image).width(1000).auto('format').url()}
                  alt={`${data.title} - Masonry ${index + 1}`}
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
              </div>
            );
          })}
        </div>
      ) : (
        <div className="text-center text-gray-500 py-20 font-sans">
          Noch keine Bilder für dieses Galerie-Raster hochgeladen.
        </div>
      )}

      {/* Info & Reviews Section */}
      {(data.personalInfo || data.reviews) && (
        <div className={`mt-20 grid grid-cols-1 ${data.personalInfo && data.reviews ? 'md:grid-cols-2' : ''} gap-12 border-t border-gray-100 pt-16`}>
          {data.personalInfo && (
            <div className="prose prose-gray prose-a:text-gray-900 font-sans font-light text-gray-500">
              <PortableText value={data.personalInfo} />
            </div>
          )}
          {data.reviews && (
            <div className="prose prose-gray prose-a:text-gray-900 font-sans font-light text-gray-500">
              <PortableText value={data.reviews} />
            </div>
          )}
        </div>
      )}
    </div>
  );
}
