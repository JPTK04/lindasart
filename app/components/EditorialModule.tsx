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
                <Link href={linkHref} className="group/link inline-flex flex-col items-start">
                  <h3 className="font-sukhumvit font-thin text-[24px] tracking-widest uppercase text-gray-500 leading-tight transition-colors underline decoration-[1px] underline-offset-8 decoration-gray-300 group-hover/link:text-gray-900 group-hover/link:decoration-gray-900">
                    {title}
                  </h3>
                  {subtitle && (
                    <p className="font-ztneue font-bold text-[20px] text-gray-600 mt-2 leading-normal group-hover/link:text-gray-900 transition-colors">
                      {subtitle}
                    </p>
                  )}
                </Link>
              </div>
            </div>

            {/* Right Column: Landscape Image */}
            <div className="hidden md:block">
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
            <div className="hidden md:block order-2 md:order-1">
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
              <div className="mt-3 text-right flex justify-end">
                <Link href={linkHref} className="group/link inline-flex flex-col items-end">
                  <h3 className="font-sukhumvit font-thin text-[24px] tracking-widest uppercase text-gray-500 leading-tight transition-colors underline decoration-[1px] underline-offset-8 decoration-gray-300 group-hover/link:text-gray-900 group-hover/link:decoration-gray-900">
                    {title}
                  </h3>
                  {subtitle && (
                    <p className="font-ztneue font-bold text-[20px] text-gray-600 mt-2 leading-normal group-hover/link:text-gray-900 transition-colors">
                      {subtitle}
                    </p>
                  )}
                </Link>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
