import Link from "next/link";
import Image from "next/image";
import { urlFor } from "@/sanity/lib/image";

interface EditorialModuleProps {
  module: {
    title: string;
    subtitle?: string;
    slug: { current: string };
    variant: "left" | "right";
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imageLeft: any;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    imageRight: any;
  };
}

export default function EditorialModule({ module }: EditorialModuleProps) {
  const { title, subtitle, slug, variant, imageLeft, imageRight } = module;
  const linkHref = `/editorial/${slug?.current || slug}`;

  const isLeft = variant === "left";

  return (
    <div className="w-full">
      <div 
        className={`grid grid-cols-1 gap-4 items-start ${
          isLeft ? "md:grid-cols-[514fr_1119fr]" : "md:grid-cols-[1119fr_514fr]"
        }`}
      >
        {isLeft ? (
          <>
            {/* Left Column: Portrait Image + Text */}
            <div className="flex flex-col">
              <Link 
                href={linkHref} 
                className="group block w-full bg-[#eae9e9] p-2 transition-colors hover:bg-[#d8d8d8]"
                style={{ aspectRatio: '514 / 756' }}
              >
                <div className="relative w-full h-full overflow-hidden bg-white">
                  {imageLeft && (
                    <Image
                      src={urlFor(imageLeft).url()}
                      alt={title}
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  )}
                </div>
              </Link>
              
              {/* Text underneath, exactly left-aligned */}
              <div className="mt-3 text-left">
                <h3 className="font-ztneue font-bold text-[24px] text-gray-900 leading-tight">
                  {title}
                </h3>
                {subtitle && (
                  <p className="font-sukhumvit font-thin text-[20px] text-gray-600 mt-1 leading-normal">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>

            {/* Right Column: Landscape Image */}
            <div>
              <Link 
                href={linkHref} 
                className="group block w-full bg-[#eae9e9] p-2 transition-colors hover:bg-[#d8d8d8]"
                style={{ aspectRatio: '1119 / 756' }}
              >
                <div className="relative w-full h-full overflow-hidden bg-white">
                  {imageRight && (
                    <Image
                      src={urlFor(imageRight).url()}
                      alt={title}
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  )}
                </div>
              </Link>
            </div>
          </>
        ) : (
          <>
            {/* Left Column: Landscape Image */}
            <div className="order-2 md:order-1">
              <Link 
                href={linkHref} 
                className="group block w-full bg-[#eae9e9] p-2 transition-colors hover:bg-[#d8d8d8]"
                style={{ aspectRatio: '1119 / 756' }}
              >
                <div className="relative w-full h-full overflow-hidden bg-white">
                  {imageLeft && (
                    <Image
                      src={urlFor(imageLeft).url()}
                      alt={title}
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  )}
                </div>
              </Link>
            </div>

            {/* Right Column: Portrait Image + Text */}
            <div className="flex flex-col order-1 md:order-2">
              <Link 
                href={linkHref} 
                className="group block w-full bg-[#eae9e9] p-2 transition-colors hover:bg-[#d8d8d8]"
                style={{ aspectRatio: '514 / 756' }}
              >
                <div className="relative w-full h-full overflow-hidden bg-white">
                  {imageRight && (
                    <Image
                      src={urlFor(imageRight).url()}
                      alt={title}
                      fill
                      className="object-cover"
                      priority
                      unoptimized
                    />
                  )}
                </div>
              </Link>
              
              {/* Text underneath, exactly right-aligned */}
              <div className="mt-3 text-right">
                <h3 className="font-ztneue font-bold text-[24px] text-gray-900 leading-tight">
                  {title}
                </h3>
                {subtitle && (
                  <p className="font-sukhumvit font-thin text-[20px] text-gray-600 mt-1 leading-normal">
                    {subtitle}
                  </p>
                )}
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
