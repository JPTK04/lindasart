import { PortableText } from "@portabletext/react";
import Link from "next/link";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export default function Footer({ settings }: { settings: any }) {
  return (
    <footer className="mt-24 py-16 border-t border-gray-100 text-sm opacity-80 font-sukhumvit">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">

        <div className="flex-1 flex flex-col md:flex-row gap-12 md:gap-24">
          {/* Column 1: Contact */}
          <div className="leading-tight">
            <h4 className="font-semibold uppercase tracking-widest mb-3 font-ztneue text-gray-900">Kontakt</h4>
            {settings?.contactEmail && (
              <p className="text-gray-600">
                <a href={`mailto:${settings.contactEmail}`} className="hover:text-gray-900 transition-colors">
                  {settings.contactEmail}
                </a>
              </p>
            )}
            {settings?.contactPhone && <p className="text-gray-600">{settings.contactPhone}</p>}
            {settings?.instagram && (
              <p className="mt-2 text-gray-600">
                <a href={settings.instagram} target="_blank" rel="noopener noreferrer" className="hover:text-gray-900 transition-colors">
                  Instagram ↗
                </a>
              </p>
            )}
          </div>

          {/* Column 2: Studio Address */}
          <div className="leading-tight">
            <h4 className="font-semibold uppercase tracking-widest mb-3 font-ztneue text-gray-900">Studio</h4>
            <p className="text-gray-600">Portraitatelier | Grünes Studio</p>
            <p className="text-gray-600">Brandenburgstraße 59</p>
            <p className="text-gray-600">14612 Falkensee</p>
          </div>
        </div>

        {/* Column 3: Legal */}
        <div className="md:text-right leading-tight mt-12 md:mt-0">
          <h4 className="font-semibold uppercase tracking-widest mb-3 font-ztneue text-gray-900">Rechtliches</h4>
          <p className="text-gray-600">
            <Link href="/impressum" className="hover:text-gray-900 transition-colors">
              Impressum
            </Link>
          </p>
          <p className="text-gray-400 mt-2 font-light">© {new Date().getFullYear()} Lindas Art</p>
        </div>

      </div>
    </footer>
  );
}
