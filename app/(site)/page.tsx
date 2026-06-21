import { client } from "@/sanity/lib/client";
import { urlFor } from "@/sanity/lib/image";
import Image from "next/image";
import Link from "next/link";
import EditorialModule from "../components/EditorialModule";

export const revalidate = 60;

const QUERY = `*[_type == "homePage"][0] {
  modules[] {
    _type == 'reference' => @-> {
      _type,
      _id,
      title,
      "slug": slug,
      coverImage
    },
    _type == 'editorialModule' => {
      _type,
      _key,
      title,
      subtitle,
      "slug": slug,
      imageLeft,
      imageRight,
      variant
    }
  }
}`;

export default async function Home() {
  const homeData = await client.fetch(QUERY);
  const items = homeData?.modules || [];

  if (!items || items.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center text-gray-500">
        No content available yet. Please add modules to the Startseite in Sanity Studio.
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col gap-32">
      {/* eslint-disable-next-line @typescript-eslint/no-explicit-any */}
      {items.map((item: any) => {
        if (!item) return null;

        if (item._type === "editorialModule") {
          return <EditorialModule key={item._key || item.title} module={item} />;
        }

        if (item._type === "series") {
          return (
            <div key={item._id} className="group relative flex flex-col items-center">
              <Link href={`/series/${item.slug?.current || item.slug}`} className="block w-full">
                <div className="relative w-full aspect-[4/5] md:aspect-[16/9] overflow-hidden bg-gray-50 border border-gray-100">
                  {item.coverImage && (
                    <Image
                      src={urlFor(item.coverImage).url()}
                      alt={item.title || "Series Cover"}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      sizes="100vw"
                      priority
                    />
                  )}
                  {/* Optional overlay on hover */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
                </div>
                <h2 className="mt-6 text-center text-2xl tracking-[0.2em] uppercase font-light opacity-80 group-hover:opacity-100 transition-opacity">
                  {item.title}
                </h2>
              </Link>
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}